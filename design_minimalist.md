---
version: "alpha"
name: "Minimalism & Swiss Style"
description: "Minimalist landing page. Ideal for b2b saas, enterprise apps, design saas, professional tools. AI-ready template."
colors:
  primary: "#000000"
  secondary: "#FFFFFF"
  tertiary: "#F5F1E8"
  neutral: "#808080"
  surface: "#B38B6D"

typography:
  h1:
    fontFamily: sans-serif
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: sans-serif
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: sans-serif
    fontSize: 0.75rem
    fontWeight: 500
rounded:
  sm: 2px
  md: 4px
  lg: 8px
spacing:
  sm: 2.0rem
  md: 4.0rem
  lg: 8.0rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 12px
---

## Overview

Minimalist landing page. Ideal for b2b saas, enterprise apps, design saas, professional tools. AI-ready template. The Swiss Style didn't emerge from nowhere. It came out of the Basel and Zurich schools in the 1950s, where designers like Josef Müller-Brockmann were obsessed with one thing: removing the arbitrary from design. They built systems. Mathematical grids. Typographic hierarchies that worked because they followed rules, not gut feelings. Helvetica came out of this movement — a typeface so neutral it became invisible, which was exactly the point.

What made it revolutionary wasn't minimalism for its own sake. It was the idea that design could be objective. That a grid system could solve layout problems the way engineering solves structural ones. Müller-Brockmann's concert posters proved you could be expressive within constraints — maybe more expressive because of them.

It dominates digital interfaces today for a boring but true reason: it scales. When you're designing systems that need to work across hundreds of screens, languages, and contexts, the Swiss approach isn't a style choice — it's infrastructure. The grid is the API of visual design.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Clean, Geometric, Functional, Grid-Based
- **Keywords:** Clean, simple, spacious, functional, white space, high contrast, geometric, sans-serif, grid-based, essential
- **Era:** 1950s Swiss
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Black** (#000000) — Dark surface, primary background
- **White** (#FFFFFF) — Light surface, card backgrounds
- **Beige** (#F5F1E8) — Extended palette, decorative use
- **Grey** (#808080) — Secondary text, borders, muted elements
- **Taupe** (#B38B6D) — Extended palette, decorative use


## Typography

- **Display / Hero:** sans-serif — Weight 700, tight tracking, used for headline impact
- **Body:** sans-serif — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** sans-serif — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem


## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).


## Elevation & Depth

Subtle hover (200-250ms), smooth transitions, sharp shadows if any, clear type hierarchy, fast loading

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.


## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.


## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.


## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Grid-based layout 12-16 columns
- Do Typography hierarchy clear
- Do No unnecessary decorations
- Do WCAG AAA contrast verified
- Do Mobile responsive grid


## Use Case

B2B SaaS, Enterprise apps, Design SaaS, Professional tools

<!-- Source: https://designmd.app/library/minimalism-swiss-style · designmd.app -->
