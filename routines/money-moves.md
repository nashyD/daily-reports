# Scout routine — Money Moves

Daily job for the scout agent. Self-contained: assume no memory of previous runs.
Working directory is the root of the `daily-reports` repo. **Run AFTER the day's other
section reports are filed** — this one builds on them.

## Goal
Turn the way the world is changing into concrete, ranked **money-making opportunities Nash
can actually act on**. Not generic news — moves matched to his skills, assets, time, and capital.

## Source
- `money-moves` · Label `Money Moves` · Color `#22c55e`
- **READ `profile.local.md` FIRST** (repo root, gitignored). It's the full owner profile —
  who Nash is, his superpowers, assets, economics, constraints, and what a great opportunity
  looks like for him. Match everything to it. If it's missing, fall back to: solo technical
  founder/UNC student in Charlotte building custom websites + AI products for SMBs (Next.js /
  Supabase / Vercel / Claude), time- and capital-constrained, with a commissioned sales arm.

## Where the "shifts" come from
1. Today's other briefings in this repo: `reports/general-ai/<date>.html`,
   `reports/general-tech/<date>.html`, `reports/america/<date>.html`,
   `reports/claude-changelog/<date>.html` — read them; many opportunities fall straight out
   of those shifts.
2. Then broaden with WebSearch/WebFetch: new model capabilities and price drops, tool/platform
   booms, funding signals, regulations, local Charlotte/NC economic news, SMB-buying trends.

## How to think (the core of this report)
For each candidate, ask: *what changed in the world, and does it open a door Nash specifically
can walk through cheaply and fast?* Prefer, in order:
- **New productized service TSD can sell** (rides a capability jump; Grant/Bishop can pitch it).
- **Build & sell** a small paid product/SaaS from tooling he already has.
- **Service/gig** that monetizes his skills against a hot trend.
- **Content/audience** that compounds into inbound leads.
- **Local arbitrage** (a Charlotte/NC-specific demand he can serve).
Lead with build/sell/serve over passive investing (a light markets angle is fine). Every move
must name a **first customer or first action he can take this week**.

## Steps
1. `git pull --rebase origin main`.
2. Today's date: `date -u +%F` (filename/report date), `date -u "+%A, %B %-d, %Y"` (long date).
   If `reports/money-moves/<date>.html` exists, STOP.
3. Read `profile.local.md` and today's other reports; run several web searches to widen.
4. Pick **5–7 opportunities**, ranked by FIT to the profile. Choose the single best as the
   "Best bet". Each opportunity needs: the shift (with a real source link), "Why you", a
   concrete "First move", and honest Effort / Upfront-cost / Time-to-first-$ tags. Add 2–4
   slower/speculative ideas to the Watch list.
5. Copy `templates/money-template.html` → `reports/money-moves/<date>.html`. Fill every
   `{{TOKEN}}` and all `<meta name="report:*">` tags (source=money-moves, label "Money Moves",
   color #22c55e). Never invent a "shift" you can't source; never overpromise returns.
6. Voice: blunt, specific, lead with the move. No hype, no "X, not Y", no get-rich-quick tone.
   These are ideas, not financial advice — say so. A thin day → 2–3 honest moves, not filler.
7. Publish:
   ```
   node scripts/build-manifest.mjs
   git add -A
   git commit -m "report(money-moves): opportunities for <date>"
   git pull --rebase origin main && git push origin main
   ```

## Guardrails
- No MLM, get-rich-quick, or anything that risks Nash's brand.
- No specific securities/crypto trade calls. Markets context is fine; "buy X" is not.
- Be concrete and honest about effort and odds. A great pick he can start this week beats ten
  vague ones.
