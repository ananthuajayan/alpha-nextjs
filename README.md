# Alpha2Omega.ai

The marketing site for **Alpha2Omega** — AI automation for regulated industries. Built with Next.js 16 (App Router), React 19, TypeScript and a hand-built CSS design system.

The content follows the Oct 2026 content pack: seven core pages, six anonymised case studies, measured numbers only, and British English throughout. The visual direction is restrained and editorial — white paper, navy ink, one blue signal colour, serif italic accents and generous white space. No dark “AI aesthetic”, no particle effects, no client logos.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript only
```

Node 20+ recommended. The project is a standard Next.js app — deploy to Vercel, Netlify or any Node host.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, proof strip, value props, services, selected work, process, data residency, FAQ, CTA |
| `/services` | The four service lines in detail, plus both delivery models |
| `/case-studies` | Filterable index of the six studies, plus selected other work |
| `/case-studies/[slug]` | Case-study template: profile → challenge → what we built → results → technology notes |
| `/how-we-work` | Audit → proof of concept → production, delivery models and the residency promise |
| `/about` | Positioning, difference, team shape, data stance |
| `/contact` | Enquiry form, what happens next, direct email, phone and address |
| `/privacy`, `/accessibility` | Legal and accessibility statements |
| `/api/contact` | Form endpoint (JSON, validated) |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | SEO and PWA metadata |

## Where things live

```
src/app/                 routes, layout, metadata, API route, sitemap, robots
src/app/globals.css      the whole design system — tokens, layout, components, responsive rules
src/components/          header, footer, case cards, filters, form, illustrations, icons
src/content/             all copy and data: site, services, case studies, FAQs
public/og-image.png      1200×630 social card
```

**Edit content in `src/content/`.** Case studies, metrics, FAQs and service copy all live there; pages render from the data. Keeping numbers and claims in one place makes sign-off and verification easier.

Brand tokens (colours, fonts, spacing, container width) are the custom properties at the top of `src/app/globals.css`.

## Contact form

`POST /api/contact` validates the enquiry, drops honeypot spam and then:

- **with `CONTACT_WEBHOOK_URL` set** — forwards the JSON payload to your CRM, helpdesk, form service or automation, and fails loudly if delivery fails;
- **without it** — logs the enquiry on the server so the demo still works and nothing is silently lost.

Copy `.env.example` to `.env.local` and set the webhook before launch. You can also swap in Resend/Postmark inside `src/app/api/contact/route.ts`.

The public contact details used across the site are `bijesh.babu@alpha2omega.ai`, `+44 7718 998946` and Bartle House, Oxford Court, Manchester, England, M2 3WQ (defined in `src/content/site.ts`). Change them there if they differ.

## Content and launch rules

The site follows the pack’s restrictions:

- No client names, place names tied to a single client, or staff names. Case studies use sector descriptions only.
- No third-party vendor names in solutions. Capability is described, not branded.
- No invented figures, quotes, logos or certification badges. Every metric comes from the pack and is marked for sign-off.
- The call-scoring study keeps its **proof of concept, in live evaluation** label.
- Product visuals are illustrations with sample data and are labelled and described for screen readers.
- “From 10p per page” pricing is **not** published, because the pack flags it for confirmation.

Metrics that still need Bijesh’s sign-off are listed in the original content pack. Verify them before launch.

## Accessibility

- Target: WCAG 2.2 AA.
- Semantic landmarks, one `h1` per page, skip link, visible focus, labelled form errors.
- Keyboard-operable menu, filters, disclosure panels and form.
- `prefers-reduced-motion` respected; reveal animations are CSS-driven and content stays visible without JavaScript.
- No horizontal scroll at 375px (checked at 390px and 900px during QA).
- All text tokens are checked to at least 4.5:1 against the paper backgrounds (`--muted`, `--muted-2`, `--accent`, `--green`); the oversized footer wordmark is decorative generated content, not text.
- Audited with axe-core (WCAG 2.0/2.1/2.2 A and AA) on every route at 1440px and 390px, and with Lighthouse: Accessibility 100 on `/`, `/services`, `/case-studies`, `/about` and `/contact`.

## Design notes

- **Type:** Inter Tight (UI/display), Instrument Serif italic (one accent phrase per headline), IBM Plex Mono (labels and metadata).
- **Palette:** white `#ffffff`, ink `#0b1a33`, signal blue `#1d5bd6`, deep navy `#0a2447`, ice blue `#a9ccff`.
- **Pattern:** mono `//` section labels, hairline rules, numbered sections, big measured numbers, editorial case-study cards, one dark data-residency band.
- **Anti-patterns avoided:** glowing gradients, particle fields, generic “AI” stock imagery, logo walls, invented testimonials.

