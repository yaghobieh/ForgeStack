import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const MANIFEST = JSON.parse(readFileSync(join(ROOT, 'projects.const.json'), 'utf8'));
const TOKEN = process.env.SLACK_BOT_TOKEN;
const PROJECT = process.env.FORGE_SLACK_PROJECT ?? process.argv[2];
const COMMAND = process.env.FORGE_GIT_COMMAND ?? process.argv[3] ?? 'git command';
const REPO_ROOT = process.env.FORGE_REPO_ROOT ?? process.cwd();

function runGit(args) {
  try {
    return execSync(`git ${args}`, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  } catch {
    return '';
  }
}

function truncate(text, max) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 3)}...`;
}

function buildSummary() {
  const branch = runGit('rev-parse --abbrev-ref HEAD');
  const status = runGit('status --short');
  const diffStat = runGit('diff --stat');
  const stagedStat = runGit('diff --cached --stat');
  const lastCommit = runGit('log -1 --oneline');
  const remote = runGit('rev-parse --abbrev-ref --symbolic-full-name @{u}');

  return {
    branch,
    remote,
    status: status || '_No unstaged changes_',
    diffStat: diffStat || '_No unstaged diff_',
    stagedStat: stagedStat || '_Nothing staged_',
    lastCommit: lastCommit || '_No commits yet_',
  };
}

async function resolveChannelId(channelName) {
  const response = await fetch('https://slack.com/api/conversations.list?types=public_channel&limit=1000', {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  const data = await response.json();
  if (!data.ok) throw new Error(data.error);
  const match = data.channels.find((channel) => channel.name === channelName);
  if (!match) throw new Error(`Channel not found: #${channelName}`);
  return match.id;
}

async function postMessage(channelId, blocks, text) {
  const response = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ channel: channelId, text, blocks }),
  });
  const data = await response.json();
  if (!data.ok) throw new Error(data.error);
  return data;
}

async function main() {
  if (!PROJECT) {
    console.error('Set FORGE_SLACK_PROJECT (e.g. bear)');
    process.exit(1);
  }
  if (!TOKEN) {
    console.error('Set SLACK_BOT_TOKEN to post approval requests.');
    process.exit(1);
  }

  const meta = MANIFEST.projects.find((entry) => entry.id === PROJECT);
  const channelName = `developers-${PROJECT}`;
  const summary = buildSummary();
  const projectLabel = meta?.name ?? PROJECT;

  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: `${projectLabel} — git approval requested` },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Command*\n\`${COMMAND}\`` },
        { type: 'mrkdwn', text: `*Branch*\n\`${summary.branch}\`` },
        { type: 'mrkdwn', text: `*Remote*\n\`${summary.remote || 'none'}\`` },
        { type: 'mrkdwn', text: `*Channel*\n#${channelName}` },
      ],
    },
    {
      type: 'section',
      text: { type: 'mrkdwn', text: `*git status*\n\`\`\`${truncate(summary.status, 1200)}\`\`\`` },
    },
    {
      type: 'section',
      text: { type: 'mrkdwn', text: `*staged diff*\n\`\`\`${truncate(summary.stagedStat, 800)}\`\`\`` },
    },
    {
      type: 'section',
      text: { type: 'mrkdwn', text: `*unstaged diff*\n\`\`\`${truncate(summary.diffStat, 800)}\`\`\`` },
    },
    {
      type: 'section',
      text: { type: 'mrkdwn', text: `*HEAD*\n\`${summary.lastCommit}\`` },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: 'Approve in Cursor when the summary looks correct. React :white_check_mark: here when pushed.',
        },
      ],
    },
  ];

  const channelId = await resolveChannelId(channelName);
  await postMessage(
    channelId,
    blocks,
    `${projectLabel}: approval requested for \`${COMMAND}\` on ${summary.branch}`,
  );

  console.log(`Posted to #${channelName}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
