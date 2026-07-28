#!/usr/bin/env zsh
# Script de déploiement karlesnine.com
# Usage: ./deploy.zsh "Message de commit"
# Si pas de message, utilise "Mise à jour du site"

set -e

cd "$(dirname "$0")"

MSG="${1:-Mise à jour du site}"

echo "→ Build 11ty..."
npx @11ty/eleventy

echo "→ Copie des fichiers vers la racine..."
cp .nojekyll _site/
cp -r _site/* .
cp Charles-Christian.Croix.curriculum.vitae.pdf . 2>/dev/null || true

echo "→ Git add + commit..."
git add -A
git commit -m "$MSG"

echo "→ Git push..."
git push origin master

echo ""
echo "✅ Site déployé : $(git rev-parse --short HEAD)"
