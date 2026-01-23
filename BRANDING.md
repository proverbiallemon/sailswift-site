# Sailswift Branding Guide

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Black | `#0a0a0a` | Backgrounds |
| Dark | `#1a1a2e` | Card/surface backgrounds |
| Red Light | `#f07070` | Sail mid-tone, accent text |
| Red | `#e05050` | Sail base, primary buttons |
| Red Dark | `#8b1a1a` | Hull top, mast, text shadows |
| Hull Dark | `#6b1010` | Hull bottom rectangle |
| Pink | `#f0a0a0` | Sail highlight edge |
| Blue | `#0099ff` | Water stripes, links, labels |
| Blue Light | `#66ccff` | Subtle stripe glow (35% opacity) |
| Blue Dark | `#0066cc` | Hover states, shadows |
| Orange | `#ff8c00` | Sweeping accents, headings, code |
| Orange Light | `#ffaa33` | Border highlights |
| White | `#f0f0f0` | Primary text |
| Gray | `#888888` | Secondary text |

## Icon Construction

The Sailswift icon is built from simple geometric shapes on a black background:

```
┌─────────────────────────┐
│  [orange corners]       │
│                         │
│      SWIFT (white)      │
│                         │
│   │╲                    │
│   │ ╲   ← sail triangle│
│   │  ╲    (red gradient)│
│   │   ╲                 │
│   │   ╱                 │
│   │  ╱                  │
│   │ ╱                   │
│   │╱                    │
│   ┌────────┐ ← top hull│
│   │ (narrow)│  overlaps │
│ ══╪════════╪══← 1st blue│
│ ┌─┼────────┼─┐  stripe  │
│ │ └────────┘ │← bottom  │
│ └────────────┘  (wider) │
│ ════════════════ ← 3    │
│ ════════════════  more   │
│ ════════════════  stripes│
│  [orange corners]       │
└─────────────────────────┘
```

### Sail
- Right-pointing triangle, left edge is the mast
- 3-tone gradient: base `#e04040` → mid `#f07070` → edge highlight `#f0a0a0`
- Mast/pole color: `#8b1a1a` (same as hull top)

### Hull
- **Two stacked rectangles** that intersect (not a trapezoid)
- Top: narrower, `#8b1a1a`, pushed down to overlap into bottom
- Bottom: wider, `#6b1010`
- Creates a slight depth/angle perspective

### Water Stripes
- Exactly **4 horizontal blue lines** (`#0099ff`)
- Evenly spaced with black gaps between them
- Span nearly full width
- **First stripe goes behind the hull** (halfway up the bottom rectangle, hull drawn on top)
- Remaining 3 stripes sit below the hull
- Subtle radial glow (`#66ccff` at 35% opacity) centered on the 3 lower stripes only (not the gaps, not the hull)

### Orange Accents
- **L-shaped sweeping brackets** at corners of blue stripe sections
- Small horizontal bar + vertical bar forming a corner bracket
- Applied to all 4 corners of each stripe divider
- Also on the bottom corners of the nav bar (where the blue border is)
- Gives a dynamic "framing" effect rather than static squares

## Typography

| Font | Usage |
|------|-------|
| Press Start 2P | Headings, nav, labels, buttons |
| VT323 | Body text, descriptions |

## Design Elements

- **Scanline overlay**: Subtle repeating horizontal lines over entire page
- **Pixel borders**: Raised (light top-left, dark bottom-right) for cards/buttons
- **Orange cartridge frame**: Border around featured content (app mockup, install box)
- **Blue stripes with orange brackets**: Section dividers matching the 4-line water pattern from the icon, with L-shaped orange accents at corners
- **Text shadows**: Red-dark (`#8b1a1a`) behind headings for depth
- **Blue stripe glow**: Subtle lighter radial gradient on stripes only (not gaps), centered

## Icon Sizes

| Context | Size | Format |
|---------|------|--------|
| App Icon | 1024x1024 | PNG (AppIcon.png) |
| GameBanana | 32x32 | PNG (gamebanana-icon.png) |
| Nav/Favicon | 32x32 | Inline SVG |
| Hero | 32x32 canvas → 160x160 display | Canvas (pixelated rendering) |
