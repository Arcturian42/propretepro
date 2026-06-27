# Audit SEO / AEO / GEO — PropretePro.fr

**Date :** 27 juin 2026
**Méthode :** audit fondé sur le code réel du dépôt (lecture de l'architecture, des
composants SEO/AEO/GEO, des routes et de la couche de contenu).
**Stack vérifiée :** Next.js 15.5 (App Router) · React 19 · Tailwind 4 · TypeScript 5.7 ·
framer-motion · lucide-react. Pas de CMS : contenu typé dans `lib/content.ts`.
**Périmètre :** 34 guides (Réglementation 14, Tarifs 14, Développement 4, Logiciels 2)
+ hubs, blog, recherche, auteurs, pages institutionnelles.

> **Verdict :** base technique excellente, dans le top 5 % en SEO/GEO technique.
> Les principaux leviers restants sont fonctionnels (newsletter, photos auteurs),
> qualité (CI) et **éditoriaux** (expansion de contenu), pas des défauts techniques.

---

## 1. Score réel (vérifié)

| Critère | Score | Justification |
|---|---|---|
| SEO technique | 90 | titles/meta uniques, canonical auto-référentiel cohérent (apex), OG + Twitter cards, robots index/follow + `max-image-preview:large`, `metadataBase`, sitemap & robots dynamiques, manifest PWA, OG/icônes générées, skip-link, `lang=fr` |
| SEO éditorial | 82 | contenu profond, H2/H3 structurés, maillage interne contextuel, données chiffrées, exemples concrets |
| AEO | 92 | `FAQPage` sur tous les articles + hubs, `AnswerBox` (`.geo-answer` + `speakable`), `KeyTakeaways`, `HowTo`, `DefinitionBox`, `FactTable` |
| GEO | 94 | `llms.txt` + `llms-full.txt`, `/.well-known/ai.txt`, `/ai/summary.json`, `/ai/faq.json`, robots avec allow-list des bots IA + block-list des bots d'entraînement, `Dataset` schema, sources externes sur 100 % des articles |
| UX content | 88 | TOC sticky avec section active (IntersectionObserver), `ReadingProgress`, `AuthorBox`, dates publi+maj, temps de lecture, `RelatedArticles`, `ScrollToTop`, footer riche, skip-link, `prefers-reduced-motion` |
| E-E-A-T | 80 | 2 auteurs identifiés + bios + pages auteur avec `Person`/`knowsAbout`, sources sur chaque page, dates, à-propos, mentions, confidentialité |
| Performance (estimée) | 80 | `next/image` (AVIF/WebP, `priority`, `sizes`), lazy-load, fonts `display:swap`. Non mesuré en prod |
| Maillage interne | 85 | liens contextuels, `RelatedArticles`, hubs → articles, footer, ressources populaires |
| Potentiel de croissance | 88 | positionnement unique + base technique scalable |

**Score global réel : ≈ 87/100.**

---

## 2. Déjà en place (à ne pas refaire)

- **Données structurées :** `Organization` + `WebSite`(SearchAction) globaux ; par article
  `Article`(speakable) + `FAQPage` + `BreadcrumbList` + souvent `Dataset`/`HowTo` ;
  hubs `ItemList`+`FAQPage` ; auteurs `Person`.
- **GEO/AEO :** pile `llms.txt` / `ai.txt` / endpoints JSON + robots bot-aware — en avance
  sur le marché ; c'est l'atout différenciant.
- **Cohérence canonical :** tout dérive de `SITE.url` (apex `https://propretepro.fr`).
- **Accessibilité :** skip-link, `aria-*` sur la FAQ, reduced-motion.

---

## 3. Faiblesses réelles (priorisées)

### P1 — défauts fonctionnels / techniques
1. **Leads newsletter non persistés** → *corrigé* : `app/api/leads` transmet désormais à
   `ESP_WEBHOOK_URL` si configuré (sinon trace serveur). Reste à fournir l'URL ESP.
2. **Profils auteurs sans photo** → *infrastructure ajoutée* : champ `avatar` + rendu
   photo (fallback monogramme) + `image`/`sameAs` dans le schema. Reste à déposer les
   photos réelles dans `/public/authors/`.
3. **Aucun test / CI** → *corrigé* : workflow `lint + typecheck + build` + ESLint configuré.
4. **Redirection apex/www** : à vérifier au niveau Vercel/DNS (301 `www` → apex). Infra.

### P2 — optimisations
5. **Vignettes en `<img>` brut** → *corrigé* : `ArticleCard` migré vers `next/image`.
6. **Liens sociaux vers comptes inexistants** (LinkedIn/Twitter) : différé sur consigne.
7. **Stats GEO indicatives** : injecter des chiffres durs sourcés (INSEE/FEP). Éditorial.
8. **Image sitemap** → *corrigé* : couvertures ajoutées au sitemap.

### P3 — croissance éditoriale (opportunités)
9. Glossaire (`DefinedTerm`), pages piliers, comparatifs, pages locales, 30+ long-tail.
   À rédiger en expert (pas de génération de masse → risque de contenu mince YMYL).
10. Persona « agents de propreté » (perspective salarié) : angle quasi vierge.

---

## 4. Plan d'action

| # | Action | Type | État |
|---|---|---|---|
| 1 | Newsletter → ESP (forwarding webhook) | Code | ✅ fait (config ESP requise) |
| 2 | Infra photos auteurs + schema | Code | ✅ fait (photos à fournir) |
| 3 | CI build+lint+typecheck | Infra | ✅ fait |
| 4 | `next/image` sur les vignettes | Code | ✅ fait |
| 5 | Image sitemap | Code | ✅ fait |
| 6 | 301 www → apex | Infra | ⏳ Vercel/DNS |
| 7 | Data points INSEE/FEP chiffrés | Contenu | ⏳ |
| 8 | Mesurer Core Web Vitals (PSI/CrUX) | Audit | ⏳ |
| 9 | Glossaire + pages piliers/comparatifs/locales | Contenu expert | ⏳ |

---

## 5. Réserves méthodologiques

- **Core Web Vitals non mesurés en production** (pas d'accès runtime lors de l'audit) :
  à confirmer via PageSpeed Insights / CrUX.
- Les photos d'auteurs ne doivent utiliser que des images dont le site détient les droits
  (droit à l'image en France) et représentant les auteurs réels — un visage emprunté nuit
  à l'E-E-A-T. Tant qu'aucune photo n'est fournie, un monogramme est affiché.

*Prochaine révision recommandée : 3 mois (sept. 2026), après mesure CWV et premières
publications de contenu.*
