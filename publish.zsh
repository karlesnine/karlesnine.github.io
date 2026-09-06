#!/usr/bin/env zsh
# publish.zsh — build 11ty, commit et push
set -e

cd "$(dirname "$0")"

echo "→ Build 11ty…"
npm run build

echo "→ Git add…"
git add -A

echo "→ Commit…"
if [ $# -ge 1 ]; then
  git commit -m "$*"
else
  date=$(date "+%Y-%m-%d %H:%M")
  git commit -m "Mise à jour site — $date"
fi

echo "→ Push…"
git push origin master

echo "✓ Site publié"
