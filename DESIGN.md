# DESIGN — Fashion Sheffa

<!-- impeccable:design-schema 1 -->

## World
**Batik cloth loud.** Fabric, kawung grid, and giant display type at full strength. Refuses quiet centered editorial. Contemporary Indonesian fashion editorial, direction #7 (seed key `9a70df08`).

## Bolder amplification (2026-08-16, after user: "too boring/ordinary")
Amplified the system's own moves instead of adding primitives:
- Hero: full-bleed membatik.webp fabric under indigo scrim (was flat indigo) — cloth IS the brand.
- Type: display up to 14rem, cropped by viewport, PROFILE as 2px outlined transparent stroke.
- Marquee band: rust bar scrolling real product names (daster·babydoll·gamis·celana·craft) between hero and about.
- Kawung motif raised to visible strength (opacity 0.1) on Visi-Misi + Lokasi sections.
- Section index numbers (01–04) — sequence is real (page order), so numbering is earned.
- About gallery offset (2nd image pushed down 48px) — asymmetric rhythm.
- Rust offset frames (::before border) on vision image + map — batik border motif.
- Products: index numbers, zoom-scroll hover, ↗ affordance on name.
- Footer: giant outlined FASHION SHEFFA watermark.
- Vertical rail text on hero left edge (desktop only).
- Hero entrance: staggered lines solid+outline, fabric parallax via Motion.

## Swiss merge (2026-08-16, after user supplied Swiss Style system)
Batik world × Swiss discipline. Indigo = off-black, cream = beige, rust = single terracotta accent. Kawung geometry IS Swiss grid. Rules adopted:
- **0px corners** (buttons, FAB, cards, inputs) — sharp, geometric.
- **Hairlines over shadows**: 1px borders (`--line` on light, `--line-ink` on dark), `--shadow: none`.
- **Mono metadata**: JetBrains Mono for indices, rail, marquee, nav, footer, hero sub. Display = Clash Display.
- **Motion**: fade + translateY 16px→0, 420ms ease-out, stagger 80ms; transform/opacity only. Hero parallax 60px.
- **Grid**: 1280px container, 8px base unit, section gap clamp(4rem,8vw,8rem).
- Nav links mono uppercase with rust scaleX underline (active/hover), diamond brand mark.
- No pure black (kept off-blacks), no emojis, SVG icons only, WCAG AAA, full light/dark.
- Everything Indonesian kept verbatim; pricing dropped, products kept.
- Design-system source file: `design_minimalist.md` (designmd.app). References: awesome-design-md repo + useparallel.com.

## Strategy
- Refuses the cream + serif + terracotta template cluster.
- Batik identity carried by the design system (kawung grid, dye-bath indigo), not just imagery.
- Persuade mode: first-time visitor knows it's a batik house and taps WhatsApp within seconds.

## Palette
| Role | Token | Value |
|------|-------|-------|
| Off-black (dark surfaces) | --ink | #14203a |
| Footer deep | --ink-deep | #0d1526 |
| Beige (light surfaces) | --paper | #f2e8d5 |
| Beige soft | --paper-soft | #ece2cf |
| Terracotta accent (primary action) | --accent | #9c4a2f |
| Accent hover | --accent-hi | #b85c3a |
| Grey (muted/secondary) | --grey | #808080 |
| Hairline (light bg) | --line | rgba(20,32,58,0.18) |
| Hairline (dark bg) | --line-ink | rgba(242,232,213,0.22) |

## Type
- **Display:** Clash Display (Fontshare), weights 500/600/700. Hero up to 12.5rem, tight tracking, solid + outline lines.
- **Body:** Satoshi (Fontshare), 400/500/700.
- **Metadata:** JetBrains Mono (Google Fonts) 400/500 — indices, rail, marquee, nav, footer, captions.
- Intentional system, not the default serif faces.

## Signature
Kawung-geometry motif as inline-SVG data-URI (`.kawung` class): dark-section texture + footer field, scattered with air between motifs (one 280px tile, motifs at 80/80, 215/150 @0.7, 120/230 @0.5).

## Components
- **Nav:** fixed, transparent → solid indigo on scroll, mono uppercase links with rust scaleX underline, diamond mark, slide-in drawer on mobile.
- **Hero:** full-viewport fabric field, stacked BATIK/FASHION display lines (solid + 2px outline stroke), staggered 420ms rise entrance, mono rail meta-bar, paper square WhatsApp CTA (inverts to rust). No motif — kawung is the only motif in use, confined to Visi-Misi.
- **Sections:** paper for light, `--ink` for Visi-Misi + Lokasi with kawung motif at 0.07; mono index numbers 01–04; title with rust 2px underline.
- **Products:** 4-col staggered grid (2 on mobile), mono indices, hairline borders, 200ms hovers, lightbox (keyboard + swipe).
- **FAB:** fixed bottom-right square WhatsApp (thumb-reachable), 56px, sharp corners.
- **Footer:** near-black `#0d1526`, giant outlined watermark, mono social links, dynamic year.

## Motion
- Swiss spec: fade + translateY 16px→0 over 420ms ease-out; stagger 80ms between items.
- One authored moment: hero entrance sequence (lines stagger + rail + sub + CTA).
- Scroll parallax 60px on hero fabric; section reveals via Motion `inView`.
- `prefers-reduced-motion`: all animation/transition disabled.

## Rules
- Content (Indonesian copy) is sacred — never removed.
- Lite-first: webp images, lazy loading, ~27KB gzip JS, no heavy libs beyond Motion.
- CTA language: "Chat WhatsApp" (action names the action).