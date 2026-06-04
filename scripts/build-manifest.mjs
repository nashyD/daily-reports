#!/usr/bin/env node
/**
 * build-manifest.mjs
 * --------------------------------------------------------------------------
 * Scans reports/<source>/*.html, reads each file's <meta name="report:*">
 * tags, and (re)writes data/manifest.json — the index the hub renders from.
 *
 * The scout agent only has to drop a well-formed HTML report into reports/.
 * Indexing is mechanical and happens here (run in CI on every push), so the
 * agent can never desync the manifest by hand-editing JSON.
 *
 * Run locally:  node scripts/build-manifest.mjs
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const REPORTS_DIR = join(ROOT, 'reports');
const OUT = join(ROOT, 'data', 'manifest.json');

function walk(dir) {
  let out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out = out.concat(walk(full));
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x2F;/g, '/');

function meta(html, key) {
  const re = new RegExp(`<meta\\s+name=["']report:${key}["']\\s+content=["']([\\s\\S]*?)["']\\s*/?>`, 'i');
  const m = html.match(re);
  return m ? decode(m[1].trim()) : '';
}

let files = [];
try { files = walk(REPORTS_DIR); } catch { files = []; }

const reports = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const date = meta(html, 'date');
  const title = meta(html, 'title');
  if (!date || !title) {
    console.warn(`  ! skipped (missing report:date or report:title): ${relative(ROOT, file)}`);
    continue;
  }
  reports.push({
    source: meta(html, 'source') || 'unknown',
    sourceLabel: meta(html, 'source-label') || meta(html, 'source') || 'Source',
    sourceColor: meta(html, 'source-color') || '#4cc4ff',
    date,
    title,
    summary: meta(html, 'summary'),
    highlights: Number(meta(html, 'highlights')) || 0,
    path: relative(ROOT, file).split('\\').join('/'),
  });
}

reports.sort((a, b) => b.date.localeCompare(a.date) || a.sourceLabel.localeCompare(b.sourceLabel));
writeFileSync(OUT, JSON.stringify(reports, null, 2) + '\n');
console.log(`✓ wrote ${relative(ROOT, OUT)} — ${reports.length} report(s)`);
