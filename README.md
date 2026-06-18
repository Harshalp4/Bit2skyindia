# Bit2Sky Technologies — Corporate Website

A premium, SEO-optimized corporate website for **Bit2Sky Technologies** —
_Transforming Businesses Through Software, Cloud & AI._

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide**.

---

## ✨ Features

- **8 pages**: Home, About, Services, Products, Industries, Case Studies, Blog, Contact
- **Dynamic routes**: `/services/[slug]`, `/case-studies/[slug]`, `/blog/[slug]` (statically generated)
- **Premium design system**: deep navy / royal blue / sky blue palette, subtle gradients, glassmorphism, dark + light mode
- **Animations**: hero reveal, scroll reveal, animated counters, process timeline, technology orbit, card hovers, parallax-style floats (Framer Motion)
- **Full SEO**: dynamic metadata, canonical URLs, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`
- **Structured data (JSON-LD)**: Organization, WebSite, BreadcrumbList, Service, SoftwareApplication, FAQPage, Article
- **Coded placeholder visuals** so it looks polished with zero image assets — see `IMAGE-PROMPTS.md` to swap in real images
- **Contact form** posting to `/api/contact` (ready to wire to Resend / SendGrid / HubSpot)
- **Fully responsive** and accessible

---

## 🚀 Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve production build
npm run typecheck    # tsc --noEmit
```

> Requires Node.js 18.18+ (Node 20/22 recommended).

---

## 🗂 Project structure

```
app/
  layout.tsx              # root layout, global metadata, Org + WebSite JSON-LD
  page.tsx                # Home (hero, trust, services, products, industries, why, process, CTA)
  about/                  # About (story, mission, vision, values, expertise)
  services/page.tsx       # Services index
  services/[slug]/        # Service detail (benefits, features, stack, process, FAQ schema)
  products/page.tsx       # Products showcase + SoftwareApplication schema
  industries/page.tsx
  case-studies/page.tsx
  case-studies/[slug]/    # Challenge / Solution / Impact
  blog/page.tsx           # Blog index (20 SEO posts, 6 categories)
  blog/[slug]/            # Article + Article schema
  contact/page.tsx        # Contact form + map
  api/contact/route.ts    # Form endpoint (wire to your provider)
  sitemap.ts  robots.ts  not-found.tsx
components/
  navbar, footer, page-hero, tech-orbit, mockups, contact-form, json-ld, theme-provider
  ui/        button, card, badge + SectionHeading
  sections/  hero, trust-bar, services-overview, products-showcase, industries, why-choose, process-timeline, cta
  animated/  reveal, counter
lib/
  site.ts    # 🔧 single source of truth: domain, contact, social, address
  data.ts    # services, products, industries, technologies, case studies, blog
  seo.ts     # metadata builder + JSON-LD generators
  utils.ts
```

---

## 🔧 Configuration

Edit **`lib/site.ts`** — domain (`bit2skyindia.com`), email, phone, address, social links
propagate everywhere (metadata, sitemap, footer, schema).

Content lives in **`lib/data.ts`** — add/edit services, products, case studies and blog posts;
sitemap and dynamic routes update automatically.

Brand colors and theme tokens: **`tailwind.config.ts`** + **`app/globals.css`**.

### Fonts
Inter is loaded via a `<link>` in `app/layout.tsx` (builds offline, no build-time network).
Prefer self-hosting? Swap to `next/font/google` — it's the canonical approach and works on Vercel/local.

### Images
Placeholder visuals are coded (no assets needed). To use real images:
1. Generate them from the prompts in `IMAGE-PROMPTS.md`
2. Save to `public/images/`
3. Replace `<ProductVisual />` / hero `<DashboardMockup />` with `next/image`
4. Add `public/images/og-cover.png` (1200×630) and `public/favicon.ico`

### Contact form
`app/api/contact/route.ts` validates and returns success. Wire it to your provider, e.g. Resend:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ from: "site@bit2skyindia.com", to: process.env.CONTACT_TO_EMAIL!, subject: `New enquiry: ${name}`, html });
```

---

## ☁️ Deployment

### Vercel (recommended)
1. Push to GitHub/GitLab.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — framework auto-detected.
3. Add env vars (see `.env.example`).
4. Add domain **bit2skyindia.com** in Project → Settings → Domains and point DNS as instructed.
5. Deploy. `sitemap.xml` and `robots.txt` are generated automatically.

```bash
npm i -g vercel && vercel --prod
```

### Microsoft Azure
**Option A — Azure Static Web Apps** (great for Next.js):
1. Create a Static Web App, connect the repo (GitHub Actions is scaffolded for you).
2. Build preset: **Next.js**. App location `/`, output handled by the SWA Next.js adapter.
3. Add app settings (env vars) in the portal.

**Option B — Azure App Service (Node)**:
```bash
npm run build
# Deploy via GitHub Actions or: az webapp up --runtime "NODE:20-lts" --name bit2sky-web --resource-group bit2sky-rg
```
Set the startup command to `npm start` and configure env vars under
App Service → Configuration. Bind the custom domain + managed certificate under
Custom domains.

**Option C — Container (AKS / App Service for Containers)**: add a Dockerfile using
`output: "standalone"` in `next.config.mjs`, build the image and push to Azure Container Registry.

---

## 🔍 SEO checklist (post-deploy)
- [ ] Update `SITE.url` / domain in `lib/site.ts`
- [ ] Add `public/images/og-cover.png` and `favicon.ico`
- [ ] Submit `https://bit2skyindia.com/sitemap.xml` in Google Search Console
- [ ] Verify rich results with Google's Rich Results Test (FAQ, Org, Article schema)
- [ ] Set real phone, address and social URLs

---

## 📈 Primary keywords targeted
Software Development Company · Software Development Company in Mumbai · Custom Software Development ·
Enterprise Software Development · Web Application Development · Mobile App Development ·
AI Development Company · Azure Cloud Solutions · Healthcare Software Development ·
SaaS Development Company · Document Management System · AI Automation Solutions

---

© Bit2Sky Technologies. All rights reserved.
