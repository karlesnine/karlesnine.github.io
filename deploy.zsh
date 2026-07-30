#!/usr/bin/env zsh
# Script de déploiement karlesnine.com
# Usage: ./deploy.zsh "Message de commit"

set -e

cd "$(dirname "$0")"

MSG="${1:-deploy}"

echo "→ Build 11ty..."
npx @11ty/eleventy

echo "→ Assets: copie vers assets/..."
cp .nojekyll .
cp Charles-Christian.Croix.curriculum.vitae.pdf . 2>/dev/null || true

echo "→ Git add + commit..."
git add -A
git commit -m "$MSG"

echo "→ Git push..."
git push origin master

echo ""
echo "✅ Déployé : $(git rev-parse --short HEAD)"
