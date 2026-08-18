# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Vite + TypeScript, vanilla DOM (no component framework). Deploy: GitHub Pages (static build → dist). User chose this stack explicitly (2026-08-16).

## Users
Local Indonesian customers (Surabaya area) on phones, browsing batik clothing + craft on mobile data. Jobs: see what the store sells, confirm it's a real shop (map, contact), and get in touch via WhatsApp. Secondary: craft buyers (gantungan kunci, telenan hias, tas kain perca).

## Product Purpose
One-page storefront for Fashion Sheffa, a family batik fashion & craft business. Success = visitor trusts the store and contacts via WhatsApp/socials. Content is Indonesian and MUST never be removed.

## Positioning
Family-origin batik store that bridges traditional (batik tulis) to modern (batik cetak) methods. Real local shop in Surabaya, sells daster, babydoll, oneset gamis, aneka celana + craft items.

## Operating Context
Visitors reach the site via WhatsApp/social media share links (link-preview matters → OG tags). Browsed mostly on Android phones. Primary conversion is a WhatsApp tap. Physical shop location shown via embedded Google Map.

## Capabilities and Constraints
- One page, 6 sections: Home hero, Tentang, Visi & Misi, Produk (8 items + lightbox), Lokasi (map), Kontak footer.
- Working links: WhatsApp wa.me/6281329416361, TikTok/Shopee/Instagram @fashion_sheffa.
- Constraint: lite for mobile — no heavy CDN JS. Current: Motion lib (~27KB gzip JS), webp images.
- Images: originals public/*.jpeg + optimized *.webp.
- Content language: Indonesian, kept verbatim. Golden rule: NEVER remove content.

## Brand Commitments
- Name: Fashion Sheffa.
- Contact: WA +62 813 2941 6361 (Yulia).
- Product types: daster, babydoll, oneset gamis, aneka celana, gantungan kunci, telenan hias, tas dari kain perca.
- User wants design to look PRO and "not AI slop" — distinctive batik identity, not template look.

## Evidence on Hand
- 9 product images + hero membatik.jpg (public/*.jpeg + *.webp).
- Verbatim Indonesian about/vision/mission copy in index.html.
- Real Google Maps embed URL for shop location.
- Critique snapshot: .impeccable/critique/2026-08-16T11-17-37Z__index-html.md (score 21/32).
- No testimonials, prices, or customer data — must NOT fabricate.

## Product Principles
1. Content is sacred — never remove or translate the Indonesian copy.
2. Lite-first: mobile data friendly, small JS, small images.
3. WhatsApp is the action — make contact reachable, not buried.
4. Batik heritage is the identity — design should feel like batik's world, not a generic template.
5. Trust through proof: real shop, real map, real socials.

## Accessibility & Inclusion
Mobile-first, thumb-reachable controls, keyboard support for lightbox, reduced-motion respected (prefers-reduced-motion).