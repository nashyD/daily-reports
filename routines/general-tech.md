# Scout routine — Technology

Daily job for the scout agent. Self-contained: assume no memory of previous runs.
Working directory is the root of the `daily-reports` repo.

## Goal
Survey technology *beyond pure AI models*, decide what matters, and file one briefing on
the most interesting developments since the last edition.

## Source
- **Not a single feed** — search broadly with WebSearch/WebFetch across: consumer hardware
  & gadgets, chips/semiconductors, software platforms & developer tools, programming
  frameworks, big-tech company moves, startups & funding/IPOs, cybersecurity & major
  breaches, space & deep tech, robotics, transportation/EV tech, and fintech/crypto infra.
- Include an AI item **only** if it's a huge *business/hardware* event, not a model release
  (the General AI briefing covers models).
- **Slug:** `general-tech` · **Label:** `Technology` · **Color:** `#2dd4bf`

## Who this is for (tailor the picks — but don't only pick these)
Nash runs **TSD Modernization Solutions**, a one-person studio building custom websites +
AI products for small/medium businesses. Stack: Next.js, Vite, Vercel, Supabase. Weight
items that: (a) are developer-tools / web-platform / framework changes affecting what he
ships (**always surface Next.js, Vercel, React, Tailwind, and Supabase news, including
security advisories he must patch**), (b) change what a solo builder can build or sell.
**Also include anything just cool, potentially profitable, or genuinely groundbreaking.**

## Steps
1. `git pull`, then read `profile.local.md` (gitignored, local) for Nash's interest weighting.
   Hard rule: **never** cover sports or entertainment (shows, box office, celebrity); a major
   chip/hardware/business story stands on its own merits. Skip partisan horse-race.
2. Find the newest existing file in `reports/general-tech/` (YYYY-MM-DD). Cover what's new
   since that date.
3. Run several distinct searches. Verify each item with a real, datable source URL. Never
   include something you can't source.
4. Pick the **4–6 most interesting items**. Demote minor items to quick-hits. If there's a
   security advisory on Nash's stack (Next.js/Vercel/etc.), lead with it and make the
   "So what for TSD" an explicit patch instruction.
5. Copy `templates/report-template.html` → `reports/general-tech/<date>.html`. Fill every
   `{{TOKEN}}` and all `<meta name="report:*">` tags (source=general-tech, label=Technology,
   color=#2dd4bf). Every story gets a concrete **"So what for TSD"** line.
6. Voice: blunt, lead with the answer, no hype. No "X, not Y" construction. Never fabricate.
7. `node scripts/build-manifest.mjs`, then `git add -A && git commit -m "report(general-tech): briefing for <date>" && git push origin main`.

## Quiet day
File 1–3 honest items rather than padding.
