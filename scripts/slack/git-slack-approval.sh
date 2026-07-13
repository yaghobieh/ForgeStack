#!/usr/bin/env bash
set -euo pipefail

input=$(cat)
command=$(echo "$input" | python3 -c "import json,sys; print(json.load(sys.stdin).get('command',''))" 2>/dev/null || echo "")

if [[ -z "$command" ]]; then
  echo '{ "permission": "allow" }'
  exit 0
fi

if [[ ! "$command" =~ git[[:space:]]+(commit|push) ]]; then
  echo '{ "permission": "allow" }'
  exit 0
fi

if [[ -z "${FORGE_SLACK_PROJECT:-}" ]]; then
  echo '{
    "permission": "ask",
    "user_message": "Set FORGE_SLACK_PROJECT in your environment (e.g. bear) to enable Slack git approvals.",
    "agent_message": "Git commit/push blocked until FORGE_SLACK_PROJECT is configured."
  }'
  exit 0
fi

script_dir="$(cd "$(dirname "$0")" && pwd)"
repo_root="$(git -C "${CURSOR_PROJECT_DIR:-.}" rev-parse --show-toplevel 2>/dev/null || pwd)"

export FORGE_GIT_COMMAND="$command"
export FORGE_REPO_ROOT="$repo_root"

if [[ -n "${SLACK_BOT_TOKEN:-}" ]]; then
  node "$script_dir/post-git-approval.mjs" "$FORGE_SLACK_PROJECT" "$command" 2>/dev/null || true
fi

action="commit"
if [[ "$command" =~ git[[:space:]]+push ]]; then
  action="push"
fi

echo "$(cat <<EOF
{
  "permission": "ask",
  "user_message": "Review the ${action} summary in #developers-${FORGE_SLACK_PROJECT} on forge-stack.slack.com, then approve here if it looks correct.",
  "agent_message": "Posted git ${action} context to Slack #developers-${FORGE_SLACK_PROJECT}. Wait for explicit user approval before running git ${action}."
}
EOF
)"
exit 0
