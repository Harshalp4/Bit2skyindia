import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup } from "@/components/animated/reveal";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog — Software, AI, Cloud & Healthcare Tech Insights",
  description: "Insights on software development, AI, healthcare technology, cloud, digital transformation and mobile apps from the Bit2Sky engineering team.",
  path: "/blog",
  keywords: ["Software Development Blog", "AI Blog", "Cloud Computing", "Digital Transformation"],
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero
        eyebrow="Blog"
        title="Ideas worth shipping"
        subtitle="Practical insights on building software, deploying AI, scaling on the cloud and transforming healthcare."
      />

      <section className="container py-16 md:py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          <span className="rounded-full bg-royal px-4 py-1.5 text-sm font-medium text-white">All</span>
          {BLOG_CATEGORIES.map((c) => (
            <span key={c} className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">{c}</span>
          ))}
        </div>

        <Reveal>
          <Link href={`/blog/${featured.slug}`} className="group grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:border-royal/40 hover:shadow-xl md:grid-cols-2 md:p-8">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-royal/40 to-sky/30" />
            <div className="flex flex-col justify-center">
              <Badge>{featured.category}</Badge>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {fmt(featured.date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {featured.readTime}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal dark:text-sky transition-all group-hover:gap-2.5">Read article <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Link>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Reveal key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg">
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-900 via-royal/30 to-sky/25" />
                <div className="flex flex-1 flex-col p-6">
                  <Badge className="self-start">{p.category}</Badge>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {fmt(p.date)}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.readTime}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <CTASection title="Have a project in mind?" subtitle="Let's turn these ideas into your next product." />
    </>
  );
}
