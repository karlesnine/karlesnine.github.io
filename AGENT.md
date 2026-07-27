# AGENT.md — www.karlesnine.com

## Description

Site vitrine one-page statique — CV et page personnelle de Charles-Christian Croix (Karles).
Aucun runtime serveur, tout est statique. Hébergé sur GitHub Pages.

## Structure

```
www.karlesnine.com/
├── index.html                    ← One-page : CV, À propos, Contact
├── 404.md                        ← Page 404 personnalisée (frontmatter Jekyll)
├── CNAME                         ← www.karlesnine.com
├── robots.txt                    ← Allow: /
├── Charles-Christian.Croix.curriculum.vitae.pdf
├── assets/
│   ├── css/                      ← main.css, noscript.css, fontawesome-all.min.css
│   ├── js/                       ← jquery, browser, breakpoints, util, main
│   ├── sass/                     ← Sources SCSS du template Dimension
│   └── webfonts/                 ← Font Awesome (brands, regular, solid)
├── images/
│   ├── bg.jpg / overlay.png      ← Fond
│   ├── Charles-Christian.Croix_*.jpg  ← Photos CV, À propos, Contact
│   └── pic01-03.jpg              ← Placeholders template
├── favicon.ico, favicon-*.png,
│   apple-touch-icon.png,          ← Favicons multiformats
│   android-chrome-*.png,
│   mstile-*.png,
│   safari-pinned-tab.svg,
│   site.webmanifest,
│   browserconfig.xml
└── assets/                       ← CSS/JS/SASS/Webfonts
```

## Template

- **Dimension** par HTML5 UP (html5up.net)
- CSS custom dans `assets/css/`
- Sources SASS dans `assets/sass/` (compilation manuelle)
- Navigation par ancres CSS (`#work`, `#about`, `#contact`)

## Workflow

1. Éditer `index.html` (contenu) ou `assets/css/main.css` (style)
2. Commiter : `git add -A && git commit -m "message"`
3. Déployer : `git push origin master` → GitHub Pages publie automatiquement

## Déploiement

- **Remote :** `git@github.com:karlesnine/karlesnine.github.io.git`
- **Branche :** `master` (GitHub Pages)
- **Domaine :** www.karlesnine.com (CNAME)
- **HTTPS :** automatique via GitHub Pages

## Règles

- Langue : français (`<html lang="fr">`)
- Le CV PDF est à la racine (pas dans assets/)
- Les assets CSS/JS sont en local (pas de CDN), sauf Google Analytics (UA-6509175-1)
- Les sources SASS sont présentes — compiler après modification : `sass assets/sass/main.scss assets/css/main.css`
- Pas de meta og:/twitter: ni d'image de preview sociale

## Notes

- Article "Elements" (`#elements`) = démo du template, inutilisé, commenté dans la nav
- Article "Russie" (`#russie`) = frise Timeline3 embed (Knightlab), en construction
- Google Analytics Universal Analytics (UA-6509175-1) — pensez à migrer vers GA4
