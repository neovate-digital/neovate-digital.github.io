// The wordmark as outlined paths (built by brand/logo/build.py), coloured by the parent's text colour.
import { readFileSync } from 'node:fs';
import { raw } from '../lib/html.ts';

const svg = readFileSync(new URL('../../brand/logo/wordmark-ink.svg', import.meta.url), 'utf8')
  .replace(/<title>.*?<\/title>\s*/, '')
  .replace(/ width="[^"]*" height="[^"]*"/, '')
  .replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true" focusable="false"')
  .replace(/fill="#[0-9A-Fa-f]{6}"/, 'fill="currentColor"');

export const logo = raw(svg.trim());
