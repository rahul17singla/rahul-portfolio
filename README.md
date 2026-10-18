# Rahul Singla — Portfolio

Personal portfolio site. **All content lives in JSON files under `src/data/`** — you should never need to touch a React component to update your resume details, reorder sections, or change the accent colour.

Built with React 19, TypeScript, Vite 7, Tailwind CSS 4, Framer Motion, Lucide and React Icons.

## Quick start

```bash
npm install        # first time only
npm run dev        # http://127.0.0.1:5173 with hot reload
npm run build      # typecheck + production build into dist/
npm run preview    # serve dist/ locally at http://127.0.0.1:4173
```

Node 20.19+ is required (see `engines` in `package.json`).

> The `.npmrc` pins the public npm registry so this project is unaffected by any corporate registry configured in `~/.npmrc`.

## Editing content

| File | What it controls |
| --- | --- |
| `src/data/site.json` | Tab title, meta description, **accent colour**, default light/dark mode, **section order & visibility**, per-section eyebrow/description, footer text |
| `src/data/profile.json` | Name, title, company, tagline, location, email, phone, resume path, "open to work" badge, social links, hero stat cards, contact-card copy |
| `src/data/summary.json` | About paragraphs and focus-area chips |
| `src/data/experience.json` | Companies → roles → bullets (`title` + `text`), tech tags |
| `src/data/projects.json` | "Selected Work" case studies (context / what I did / impact / tech / links) |
| `src/data/skills.json` | Skill categories and chips |
| `src/data/education.json` | Degrees |
| `src/data/codingProfiles.json` | LeetCode / Codeforces / GitHub cards with stats and links |
| `src/data/achievements.json` | Awards and recognition |

Every file is typed in `src/types/index.ts`. The build runs `tsc`, so a missing required field or a typo'd key fails `npm run build` with a pointer to the offending file rather than rendering a broken page.

### Common tweaks

- **Hide a section** — set `"enabled": false` on it in `site.json`. Its nav link disappears too.
- **Reorder sections** — reorder the `sections` array in `site.json`.
- **Change the accent colour** — edit `theme.accent` in `site.json` (any CSS colour). Buttons, links, chips, timeline markers and the favicon's `theme-color` all follow it.
- **Turn off the "Open to SDE II opportunities" badge** — set `profile.json → status.show` to `false`.
- **Hide your phone number** — set `profile.json → phone` to `""` (the contact card omits it when empty).
- **Replace the resume** — drop the new PDF in `public/` and update `profile.json → resumeUrl`.
- **Add LeetCode / Codeforces links** — fill in `handle` and `url` in `codingProfiles.json`. Cards without a `url` show "Profile link coming soon".
- **Add a project link** — add `{ "label": "Source", "url": "https://…", "icon": "github" }` to a project's `links` array.

### Icons

Any `icon` field in the JSON is a name looked up in `src/lib/icons.tsx`. Available names include
`mail`, `linkedin`, `github`, `globe`, `phone`, `resume`, `download`, `external`, `pin`,
`code`, `terminal`, `database`, `cloud`, `layers`, `wrench`, `book`, `cpu`, `graduation`, `briefcase`, `sparkles`, `star`,
`trophy`, `award`, `medal`, `leetcode`, `codeforces`, `codechef`, `hackerrank`, `geeksforgeeks`, `github-brand`.

To add one, import it from `lucide-react` (general icons) or `react-icons/*` (brand logos) and register it in the `icons` map.

### Adding a brand-new section

1. Create `src/components/sections/MySection.tsx` accepting `SectionProps` and rendering inside `<Section …>`.
2. Add a data file under `src/data/` plus its type in `src/types/index.ts`, and export it from `src/data/index.ts`.
3. Register the component in `sectionRegistry` in `src/App.tsx`.
4. Add `{ "id": "my-section", "label": "…", "enabled": true }` to `site.json`.

## Project layout

```
├── index.html                 # Shell, fonts, OG tags, pre-mount theme script
├── netlify.toml               # Build + SPA redirect for Netlify
├── public/
│   ├── favicon.svg
│   └── Rahul_Singla_Resume.pdf
└── src/
    ├── App.tsx                # Section registry; renders sections in site.json order
    ├── index.css              # Tailwind import, dark variant, accent token
    ├── data/                  # ← all editable content (JSON) + typed index.ts
    ├── types/index.ts         # Shapes for every JSON file
    ├── hooks/                 # useTheme (light/dark), useActiveSection (nav highlight)
    ├── lib/                   # cn(), icons map, link helpers
    └── components/
        ├── layout/            # Navbar, Footer, Section wrapper
        ├── sections/          # Hero, About, Experience, SelectedWork, Skills, …
        └── ui/                # Card, Chip, ButtonLink, SectionHeading, SocialLinks
```

## Deploying

**Netlify (recommended, matches your existing site):** connect the repo or drag-and-drop the `dist/` folder after `npm run build`. `netlify.toml` already sets the build command, publish directory and SPA redirect. Rename the auto-generated `*.netlify.app` subdomain under *Site settings → Domain management*.

**GitHub Pages / any static host:** upload the contents of `dist/`. If the site is served from a sub-path (e.g. `/portfolio/`), set `base: '/portfolio/'` in `vite.config.ts` first.

## Accessibility & behaviour

- Semantic landmarks, skip-to-content link, `aria-current` on the active nav link, labelled icon-only buttons.
- Light/dark theme persists in `localStorage` and respects `prefers-color-scheme`; an inline script applies it before React mounts to avoid a flash.
- Animations respect `prefers-reduced-motion`.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Dev and preview servers bind to `127.0.0.1` only.
