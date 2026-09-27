"""Build the Neovate logo files from Geologica outlines.

Wordmark: lowercase "neovate", Geologica wght 800 / SHRP 100, tracking -28/1000 em.
Mark: the same "n" on a cobalt square.

Needs fonttools[woff], brotli and skia-pathops. The SVGs it writes need nothing.
Run from anywhere: python brand/logo/build.py
"""

from pathlib import Path
import pathops
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

OUT = Path(__file__).resolve().parent
FONT = OUT.parent.parent / 'node_modules/@fontsource-variable/geologica/files/geologica-latin-full-normal.woff2'

COBALT, PAPER, INK = '#2437D6', '#EEF1F5', '#15171F'
WEIGHT, SHARP, TRACKING = 800, 100, -28

font = instantiateVariableFont(TTFont(FONT), {'wght': WEIGHT, 'SHRP': SHARP, 'CRSV': 0, 'slnt': 0})
cmap, glyphs, hmtx = font.getBestCmap(), font.getGlyphSet(), font['hmtx']


def transformed(p, a, b, c, d, e, f):
    out = pathops.Path()
    p.draw(TransformPen(out.getPen(), (a, b, c, d, e, f)))
    return out


def text_path(text):
    """Outline text on a y-down canvas with the baseline at y=0."""
    out, cursor = pathops.Path(), 0
    for ch in text:
        name = cmap[ord(ch)]
        g = pathops.Path()
        glyphs[name].draw(g.getPen())
        transformed(g, 1, 0, 0, -1, cursor, 0).draw(out.getPen())
        cursor += hmtx[name][0] + TRACKING
    return pathops.simplify(out)


def fit(p, x, y, w, h):
    l, t, r, b = p.bounds
    s = min(w / (r - l), h / (b - t))
    return transformed(p, s, 0, 0, s, x + (w - (r - l) * s) / 2 - l * s, y + (h - (b - t) * s) / 2 - t * s)


def d(p):
    pen = SVGPathPen(None, ntos=lambda n: f'{n:.2f}'.rstrip('0').rstrip('.') if n else '0')
    p.draw(pen)
    return pen.getCommands()


def svg(w, h, title, body):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:g}" height="{h:g}" viewBox="0 0 {w:g} {h:g}" '
            f'role="img" aria-label="{title}">\n  <title>{title}</title>\n{body}\n</svg>\n')


word = text_path('neovate')
n = text_path('n')

# Tight wordmark, 100 units tall, for use in code and on any background.
l, t, r, b = word.bounds
tight = fit(word, 0, 0, (r - l) * 100 / (b - t), 100)
tw = tight.bounds[2]
for name, color in [('wordmark-ink', INK), ('wordmark-paper', PAPER), ('wordmark-cobalt', COBALT)]:
    (OUT / f'{name}.svg').write_text(svg(round(tw, 2), 100, 'Neovate', f'  <path fill="{color}" d="{d(tight)}"/>'))

# Presentation lockup with clear space, on cobalt.
lock = fit(word, 102, 89, 756, 142)
(OUT / 'logo-cobalt.svg').write_text(svg(960, 320, 'Neovate',
    f'  <path fill="{COBALT}" d="M0 0H960V320H0Z"/>\n  <path fill="{PAPER}" d="{d(lock)}"/>'))

# Marks: rounded (favicon, app icon) and full-bleed square (avatars that crop to a circle).
glyph = fit(n, 16, 16, 32, 32)
(OUT / 'mark.svg').write_text(svg(64, 64, 'Neovate',
    f'  <rect width="64" height="64" rx="14" fill="{COBALT}"/>\n  <path fill="{PAPER}" d="{d(glyph)}"/>'))
(OUT / 'mark-square.svg').write_text(svg(64, 64, 'Neovate',
    f'  <path fill="{COBALT}" d="M0 0H64V64H0Z"/>\n  <path fill="{PAPER}" d="{d(glyph)}"/>'))

print('wrote', sorted(p.name for p in OUT.glob('*.svg')), 'wordmark width', round(tw, 2))
