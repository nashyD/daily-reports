# Scout routine — Claude Code Changelog

This is the daily job for the scout agent. It is self-contained: assume no memory
of previous runs. Working directory is the root of the `daily-reports` repo.

## Goal
Read the Claude Code changelog, decide what actually matters, and file one polished
HTML briefing into the repo. CI handles indexing and deploy.

## Source
- **URL:** https://code.claude.com/docs/en/changelog
- **Slug:** `claude-changelog`  ·  **Label:** `Claude Code Changelog`  ·  **Color:** `#4cc4ff`

## Steps
1. `git pull` to get the latest.
2. Fetch the changelog. Identify every release since the date of the most recent
   existing report in `reports/claude-changelog/` (look at the newest filename).
   First run, cover roughly the last 10 releases.
3. Decide the **4–6 most interesting items** for Nash — a solo operator running all
   technical delivery at TSD (web + AI builds for SMB clients). Weight things that
   change build throughput, code quality, agent/automation capability, or what he can
   sell. Demote pure internal/infra fixes to the "smaller changes" list.
4. Copy `templates/report-template.html` to
   `reports/claude-changelog/<YYYY-MM-DD>.html` (today's date, LOCAL America/New_York —
   never UTC; an evening catch-up run files under today's local date).
5. Fill every `{{TOKEN}}`. Keep all `<meta name="report:*">` tags accurate — CI reads
   them. 4–6 top signals; group the rest into 2–4 story groups; minor items go in the
   quick-hits list.
6. (Optional) Run `node scripts/build-manifest.mjs` to preview the index locally.
7. Commit and push to `main`:
   ```
   git add -A
   git commit -m "report(claude-changelog): briefing for <YYYY-MM-DD>"
   git push origin main
   ```
   The Pages workflow rebuilds the manifest and deploys automatically.

## Voice & quality bar (Nash's standing prefs)
- Blunt. Lead with the answer. No flattery, no filler, no hype adjectives.
- Do **not** use the "X, not Y" contrastive construction — it reads as an AI tell.
- Every story needs a concrete **"So what for TSD"** line: what he should *do*, in his
  context (clients: Bisque, Studio C, Sonderwerks; stack: Next.js / Vite / Vercel).
- Never invent a fact, version number, or date you can't point at in the source. Link
  sources inline. If the changelog is unchanged since the last report, write a short
  "no material changes" briefing instead of padding.

## If nothing material shipped
Still file a short briefing noting the window was quiet, with any minor items as quick
hits. A daily cadence with honest empty days beats fabricated importance.
