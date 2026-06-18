import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES, PRODUCTS, CASE_STUDIES, BLOG_POSTS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "", "/about", "/services", "/products", "/industries",
    "/case-studies", "/blog", "/contact",
  ].map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseRoutes = CASE_STUDIES.map((c) => ({
    url: `${SITE.url}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${SITE.url}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // products are anchored on the products page; include if you split them out
  void PRODUCTS;

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...blogRoutes];
}
