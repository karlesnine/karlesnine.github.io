# AGENT.md — www.karlesnine.com

## Description

Site vitrine statique avec blog — CV, formation et articles de Charles-Christian Croix (Karles).
Généré par **11ty** (Eleventy v3). Hébergé sur GitHub Pages.

## Architecture

```
www.karlesnine.com/
├── src/                         ← Sources 11ty
│   ├── _data/
│   │   └── activities.json      ← 3 activités (icônes FA7, slugs, descriptions)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk         ← Squelette HTML (meta, GA, og:image, twitter:card)
│   │   │   ├── home.njk         ← Dashboard 3 cartes + preview articles
│   │   │   ├── page.njk         ← Pages statiques (CV, À propos, Contact)
│   │   │   ├── article.njk      ← Article individuel (date, activité, tags)
│   │   │   └── listing.njk      ← Liste d'articles par activité
│   │   └── partials/
│   │       ├── header.njk       ← Header Dimension (cercle + nom + tagline)
│   │       ├── nav.njk          ← Navigation (Accueil, CV, À propos, Contact)
│   │       ├── footer.njk
│   │       └── dash-card.njk    ← Carte activité (Font Awesome 7)
│   ├── assets/                  ← CSS, JS, images, webfonts, favicons
│   ├── formation-facteurs-humains/  ← Articles Facteurs humains IT
│   ├── formation-ia/                ← Articles IA
│   ├── formation-cybersecurite/     ← Articles Cybersécurité
│   ├── index.njk                ← Page d'accueil (dashboard)
│   ├── cv.md, a-propos.md, contact.md, 404.md
│   └── tous-les-articles.njk
├── .eleventy.js                 ← Config 11ty (collections, filtres dateFr/limit)
├── package.json
├── CNAME                        ← www.karlesnine.com
├── robots.txt
└── Charles-Christian.Croix.curriculum.vitae.pdf
```

## Template

- **Dimension** par HTML5 UP (html5up.net) — adapté en multi-pages
- **Font Awesome 7.3.0** Free (au lieu de FA 5.14 original)
- CSS custom dans `assets/css/`
- Design A1 : Dashboard 3 cartes activités

## Workflow

1. Créer un article : `src/formation-*/AAAA-MM-titre.md` avec frontmatter (title, description, date, tags, activity, layout)
2. Publier (build + commit + push) : `./publish.zsh` depuis la racine du dépôt. Message de commit par défaut : « Mise à jour site — <date> ». Message personnalisé : `./publish.zsh <message>`.
3. Pour ne builder qu'en local (vérification, sans publier) : `npm run build` (si `npm` est introuvable, préfixer par `export PATH=$HOME/.hermes/node/bin:$PATH`).

Les listings se mettent à jour **automatiquement** au build (collections 11ty par tag).

## Déploiement

- **Remote :** `git@github.com:karlesnine/karlesnine.github.io.git`
- **Branche :** `master` (GitHub Pages)
- **Domaine :** www.karlesnine.com (CNAME)
- **HTTPS :** automatique via GitHub Pages

## Règles

- Langue : français
- Les articles sont en Markdown avec frontmatter YAML
- Tags de collection : `facteurs-humains`, `ia`, `cybersecurite`
- Og:image + twitter:card générés automatiquement (`/assets/images/social-card.png`)
- Google Analytics UA-6509175-1 (migration GA4 à prévoir)
- Rollback : `git checkout tags/v1-html5up` (état avant migration)

## Notes

- Contenu Lorem Ipsum dans les 3 articles exemples (à remplacer par du vrai contenu)
- `npm run build` → régénère les pages HTML (sources `src/` vers HTML à la racine du dépôt)
- `./publish.zsh` → build + commit + push GitHub Pages (script officiel depuis le 06/09/2026 ; `npm run deploy` obsolète)
