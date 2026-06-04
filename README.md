# TSD Daily Reports

Automated daily intelligence briefings. A scout agent reads chosen sources, writes a
polished HTML briefing, and pushes it here. GitHub Pages serves the site; CI rebuilds
the index and deploys on every push.

**Live:** https://nashyd.github.io/daily-reports/ *(enable Pages → Source: GitHub Actions)*

## How it works

```
                 ┌─ scout agent (daily) ─┐
  source(s)  ──▶ │ read → judge → write  │ ──▶  reports/<source>/<date>.html  ──▶ git push
                 └───────────────────────┘                                            │
                                                                                       ▼
                                              GitHub Actions (.github/workflows/pages.yml)
                                              • node scripts/build-manifest.mjs  → data/manifest.json
                                              • deploy everything to GitHub Pages
                                                                                       │
                                                                                       ▼
                                              index.html  fetches  data/manifest.json  → cards
```

The agent's only job is to drop a well-formed HTML file into `reports/`. Indexing is
mechanical (CI reads each report's `<meta name="report:*">` tags), so a hand-edit can't
desync the manifest.

## Layout

| Path | What |
|------|------|
| `index.html` | The hub. Fetches `data/manifest.json`, renders report cards grouped by source. |
| `assets/theme.css` | Shared dark "briefing" theme. Edit tokens at the top to restyle everything. |
| `reports/<source>/<YYYY-MM-DD>.html` | One self-contained briefing. |
| `templates/report-template.html` | The skeleton the agent fills each day. |
| `data/manifest.json` | Generated index. Don't hand-edit — CI rewrites it. |
| `scripts/build-manifest.mjs` | Scans reports, rebuilds the manifest. |
| `routines/<source>.md` | The agent's job spec for each source. |
| `.github/workflows/pages.yml` | Build manifest + deploy to Pages on every push. |

## Add a new source
1. Pick a slug, label, and hex color (e.g. `anthropic-blog`, "Anthropic News", `#d97757`).
2. Write `routines/<slug>.md` (copy `routines/claude-changelog.md` and swap the source).
3. The agent writes to `reports/<slug>/<date>.html`. The hub picks up the new source
   automatically — no code change needed.

## Run the index build locally
```
node scripts/build-manifest.mjs
```

## First-time setup
- **Enable Pages:** repo Settings → Pages → Source = **GitHub Actions**. (Or it's set via API.)
- **Schedule the scout:** see the routine spec in `routines/`. The recurring runner
  (a Claude Code scheduled routine or a GitHub Action) executes that spec daily.
