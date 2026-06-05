# Scout routine — General AI

Daily job for the scout agent. Self-contained: assume no memory of previous runs.
Working directory is the root of the `daily-reports` repo.

## Goal
Survey the AI landscape, decide what actually matters, and file one briefing on the
most interesting developments since the last edition.

## Source
- **Not a single feed** — search broadly with WebSearch/WebFetch across: frontier model
  releases (Anthropic, OpenAI, Google, Meta, xAI, DeepSeek, Mistral, etc.), AI funding
  and business news, AI agents and coding tools, AI research breakthroughs, AI policy.
- **Slug:** `general-ai` · **Label:** `General AI` · **Color:** `#a78bfa`

## Who this is for (tailor the picks — but don't only pick these)
Nash runs **TSD Modernization Solutions**, a one-person studio building custom websites
+ AI products (an AI phone receptionist, a RAG website concierge, booking automation)
for established small/medium businesses. Stack: Next.js, Vite, Vercel, Supabase, and the
Anthropic/Claude ecosystem. Weight items that: (a) are frontier model releases or real
capability jumps, (b) change what a solo builder can ship or sell to SMB clients, (c) are
about AI agents / coding tools / dev infrastructure. **Also include anything that is just
cool, potentially profitable, or genuinely groundbreaking — even if it's unrelated to his
work.** He wants to not miss the big stuff.

## Steps
1. `git pull` to get the latest.
2. Find the newest existing file in `reports/general-ai/` (named YYYY-MM-DD). Cover what's
   new since that date. (Daily cadence — usually the last ~24h, but extend back to the last
   edition if a day was skipped.)
3. Run several distinct searches. Verify each item with a real, datable source URL inside
   the window. **Never include something you can't source; flag anything uncertain.**
4. Pick the **4–6 most interesting items** by the weighting above. Demote minor items to a
   quick-hits list.
5. Copy `templates/report-template.html` → `reports/general-ai/<date>.html`. Fill every
   `{{TOKEN}}` and all `<meta name="report:*">` tags (source=general-ai, label=General AI,
   color=#a78bfa). Every story gets a concrete **"So what for TSD"** line.
6. Voice: blunt, lead with the answer, no hype. No "X, not Y" construction. Never fabricate
   a model name, date, or benchmark. If it was a genuinely quiet day, file a short honest
   edition — that's fine.
7. `node scripts/build-manifest.mjs`, then `git add -A && git commit -m "report(general-ai): briefing for <date>" && git push origin main`.

## Quiet day
Few real AI stories in 24h is normal. File 1–3 items honestly rather than inflating noise.
