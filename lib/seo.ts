import type { Metadata } from "next";
import { SITE } from "./site";

type SeoParams = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  image = SITE.ogImage,
}: SeoParams): Metadata {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  return {
    title: fullTitle,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

/* ---------- JSON-LD generators ---------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    description: SITE.description,
    foundingDate: String(SITE.foundingYear),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: [SITE.social.linkedin, SITE.social.twitter, SITE.social.github],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: { title: string; overview: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "Global",
    description: s.overview,
    url: `${SITE.url}${s.path}`,
  };
}

export function softwareApplicationSchema(p: { name: string; description: string; category: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: p.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: p.description,
    url: `${SITE.url}${p.path}`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Request a demo" },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

export function articleSchema(a: { title: string; description: string; date: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo.png` } },
    mainEntityOfPage: `${SITE.url}${a.path}`,
  };
}
