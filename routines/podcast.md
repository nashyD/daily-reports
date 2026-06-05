# Scout routine — Daily podcast ("TSD Daily")

Daily job for the scout agent. Self-contained: assume no memory of previous runs.
Working directory is the root of the `daily-reports` repo. **Run this AFTER the day's
section briefings are filed** — it summarizes them into one audio episode.

## Goal
Turn the day's briefings into one short (~5–8 min) two-host audio episode, voiced by
Gemini multi-speaker TTS, and publish it to the podcast feed.

## Prereq
- `GEMINI_API_KEY` must be available. The repo's `.env` (gitignored) holds it — load it
  before running make-podcast (see step 5). ffmpeg + node must be on PATH.

## Steps
1. `git pull --rebase origin main`.
2. Today's date: `date -u +%F`. If `audio/<date>.mp3` already exists, STOP (already made).
3. Read today's report files: `reports/*/<date>.html` (claude-changelog, general-ai,
   general-tech, america — whichever exist for today). Pull out the top 2–3 items from each.
4. **Write the script** to a temp file (e.g. `/tmp/tsd-daily-<date>.txt`). Two hosts,
   **Alex** and **Sam**. Label EVERY line `Alex:` or `Sam:` — those labels map to voices.
   - ~900–1300 words (≈5–8 min). Cold open → AI → tech → America → 10-second sign-off.
   - Conversational and sharp, the way two smart people actually talk: hand off, react,
     occasionally disagree. No "as an AI", no hype, no reading headlines like a list.
   - Accurate: only say what's in the briefings. Keep the America segment a-political and
     neutral, same as the written section. Don't invent numbers.
   - Plain spoken text only (no markdown, no URLs, no stage directions in brackets).
5. **Make the audio:**
   ```
   cd /Users/nashdavis/Documents/daily-reports
   set -a && . ./.env && set +a
   node scripts/make-podcast.mjs --date <date> --script /tmp/tsd-daily-<date>.txt \
     --title "TSD Daily — <long date>" \
     --summary "<one-sentence rundown of what's in today's episode>"
   ```
   This writes `audio/<date>.mp3` + `audio/<date>.json` and prunes old episodes.
6. **Publish:**
   ```
   node scripts/build-podcast-feed.mjs
   git add -A
   git commit -m "podcast: TSD Daily for <date>"
   git pull --rebase origin main && git push origin main
   ```
   (If the push is rejected because the remote moved, `git pull --rebase origin main` and push again.)

## Notes
- Voices default to Puck (Alex) / Kore (Sam). Change via `PODCAST_VOICE_A` / `PODCAST_VOICE_B`
  in `.env` — full voice list is in the Gemini TTS docs (Zephyr, Charon, Fenrir, Leda, …).
- If TTS fails after retries (rare 500s), skip the episode for the day and report the error;
  the written briefings are already published, so a missed episode is not a blocker.
