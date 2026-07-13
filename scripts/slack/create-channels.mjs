import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const MANIFEST = JSON.parse(readFileSync(join(ROOT, 'projects.const.json'), 'utf8'));
const TOKEN = process.env.SLACK_BOT_TOKEN;
const DRY_RUN = process.argv.includes('--dry-run');
const PROJECT_FILTER = process.argv.find((arg) => arg.startsWith('--project='))?.split('=')[1];

async function slackApi(method, body) {
  const response = await fetch(`https://slack.com/api/${method}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  if (!data.ok) {
    throw new Error(`${method} failed: ${data.error}`);
  }
  return data;
}

function channelPlan() {
  const channels = MANIFEST.globalChannels.map((entry) => ({
    name: entry.name,
    topic: entry.topic,
    purpose: entry.topic,
  }));

  const projects = PROJECT_FILTER
    ? MANIFEST.projects.filter((project) => project.id === PROJECT_FILTER)
    : MANIFEST.projects;

  for (const project of projects) {
    for (const prefix of ['developers', 'po', 'docs']) {
      const label = MANIFEST.channelPrefixes[prefix];
      channels.push({
        name: `${prefix}-${project.id}`,
        topic: `${project.name} — ${label}`,
        purpose: `${project.name} (${project.npm ?? project.id})`,
      });
    }
  }

  return channels;
}

async function createChannel(channel) {
  if (DRY_RUN) {
    console.log(`[dry-run] #${channel.name}`);
    return;
  }

  try {
    await slackApi('conversations.create', {
      name: channel.name,
      is_private: false,
    });
    console.log(`created #${channel.name}`);
  } catch (error) {
    if (String(error.message).includes('name_taken')) {
      console.log(`exists  #${channel.name}`);
    } else {
      throw error;
    }
  }

  const info = await slackApi('conversations.list', {
    types: 'public_channel',
    limit: 1000,
  });
  const match = info.channels.find((entry) => entry.name === channel.name);
  if (!match) return;

  await slackApi('conversations.setTopic', {
    channel: match.id,
    topic: channel.topic,
  });
  await slackApi('conversations.setPurpose', {
    channel: match.id,
    purpose: channel.purpose,
  });
}

async function main() {
  if (!TOKEN && !DRY_RUN) {
    console.error('Set SLACK_BOT_TOKEN (xoxb-…) with channels:manage, channels:write, chat:write scopes.');
    process.exit(1);
  }

  const channels = channelPlan();
  console.log(`ForgeStack Slack — ${MANIFEST.workspaceUrl}`);
  console.log(`Planning ${channels.length} channels${PROJECT_FILTER ? ` (filter: ${PROJECT_FILTER})` : ''}…\n`);

  for (const channel of channels) {
    await createChannel(channel);
  }

  console.log('\nDone.');
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
