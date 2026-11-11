# Krillion Guide — MVP

An independently branded, English-language guide website for the Krillion game.

## Important editorial / legal position

- This project links to `https://krillion.io`; it does not iframe, clone, scrape, or reproduce the game.
- The guide summarizes publicly available statements from the official Krillion FAQ and links to the source.
- Game modes are based on the official site's visible navigation.
- It does not claim to know private answer keys, hidden scoring formulas, or live daily answers.
- Replace the example domain, contact address, legal copy, and all placeholder configuration before launch.
- Do not publish official logos, game screenshots, artwork, question banks, or answer lists unless you have the necessary permission.

## Requirements

- Node.js 20.9+
- npm 10+

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Configure production domain

Set `NEXT_PUBLIC_SITE_URL` to your real canonical origin, for example:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The value is used for canonical URLs, Open Graph URLs, and `sitemap.xml`.

## Google Analytics

Set a GA4 measurement ID in `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Before enabling analytics for visitors, review applicable privacy and consent requirements and update the Privacy Policy.

## Google AdSense

Ads are intentionally disabled by default. After your site is approved and you have created real ad units:

```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ENABLED=true
```

Then add the real ad slot ID to each `<AdSlot slot="..."/>` call. Do not enable the placeholder with an invented publisher or slot ID. Configure consent management for regions where required. Check current AdSense policies before launch.

## Content

Articles live in `content/*.mdx`. Each file has YAML frontmatter:

- `title`
- `description`
- `slug`
- `category`
- `publishedAt`
- `updatedAt`
- `readingTime`
- `featured`

The article route is `/guides/[slug]`. Add a new MDX file and it will be included in static params, the guide listing, and the sitemap.

## Current routes

- `/`
- `/guides`
- `/guides/[slug]`
- `/strategy`
- `/modes`
- `/modes/[slug]`
- `/faq`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`
- `/robots.txt`
- `/sitemap.xml`

## Sources used for the initial factual content

- Official Krillion homepage: https://krillion.io/
- Official Krillion FAQ: https://krillion.io/faq
- Google Search Central — Search appearance: https://developers.google.com/search/docs/appearance
- Google Search Central — Article structured data: https://developers.google.com/search/docs/appearance/structured-data/article
- Google AdSense Publisher Policies: https://support.google.com/adsense/answer/10502938
- Google AdSense Program Policies: https://support.google.com/adsense/answer/48182

## Before production

1. Replace `example.com` and `hello@example.com`.
2. Review and customize Privacy Policy and Terms for your actual business, analytics, ads, and applicable jurisdictions.
3. Add original editorial content and verify every game-specific claim against the official game.
4. Add a real favicon / social share image that you own or are licensed to use.
5. Set up Search Console and submit `/sitemap.xml`.
6. Test mobile layout, accessibility, links, metadata and structured data.
7. Apply for AdSense only when the site contains substantial original publisher content and all policy requirements are met.
