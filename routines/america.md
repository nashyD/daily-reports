# Scout routine — America (a-political)

Daily job for the scout agent. Self-contained: assume no memory of previous runs.
Working directory is the root of the `daily-reports` repo.

## Goal
File one neutral, **a-political** briefing on the biggest things happening in the United
States since the last edition.

## Source
- **Not a single feed** — search broadly with WebSearch/WebFetch across: the economy
  (markets, jobs, inflation, the Fed, major corporate news, big M&A), major weather and
  natural disasters, public-safety incidents, science & space, infrastructure &
  transportation, public health, energy, major sports, and notable culture/entertainment.
- **Slug:** `america` · **Label:** `America` · **Color:** `#f59e0b`

## THE RULE — keep it a-political and neutral
- Report big factual happenings **without partisan framing and without taking sides.**
- **Avoid** hot-button partisan fights, culture-war commentary, election horse-race, and
  any story whose substance is really a left-vs-right argument. When in doubt, prefer
  non-political national news.
- If a government/policy event is unavoidably major national news, report **only** the
  neutral facts — what happened, who, when, and the concrete real-world effect — with zero
  editorializing or spin. If a story has a politically charged *cause*, report the domestic
  effect neutrally and attribute the cause in a single neutral clause.

## Steps
1. `git pull`.
2. Find the newest existing file in `reports/america/` (YYYY-MM-DD). Cover what's new since
   that date.
3. Run several distinct searches across the focus areas. Verify each item with a real,
   datable source URL. Never include something you can't source.
4. Pick the **4–6 most nationally significant items**. Demote the rest to quick-hits.
5. Copy `templates/report-template.html` → `reports/america/<date>.html`. Fill every
   `{{TOKEN}}` and all `<meta name="report:*">` tags (source=america, label=America,
   color=#f59e0b). For this section, use the `.so-what` callout with the label
   **"Why it matters:"** (neutral) instead of "So what for TSD".
6. Voice: blunt and factual, lead with what happened. No "X, not Y" construction. No spin,
   no opinion, no fabrication.
7. `node scripts/build-manifest.mjs`, then `git add -A && git commit -m "report(america): briefing for <date>" && git push origin main`.

## Quiet day
File the 2–4 biggest neutral national items. Never reach for partisan controversy to fill space.
