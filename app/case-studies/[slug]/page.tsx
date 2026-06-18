import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Target, Lightbulb, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";
import { Badge, SectionHeading } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/animated/reveal";
import { Counter } from "@/components/animated/counter";
import { ProductVisual } from "@/components/mockups";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) return {};
  return buildMetadata({ title: c.title, description: c.summary, path: `/case-studies/${c.slug}`, keywords: [c.industry, "Case Study"] });
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }, { name: c.title, path: `/case-studies/${c.slug}` }])} />
      <section className="relative overflow-hidden border-b border-border bg-hero-radial">
        <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
        <div className="container relative py-16 md:py-24">
          <nav className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link>
            <ChevronRight className="h-3.5 w-3.5" /><span className="text-foreground">{c.industry}</span>
          </nav>
          <Badge>{c.industry}</Badge>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{c.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{c.summary}</p>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <Reveal><ProductVisual label={c.title} className="mx-auto max-w-4xl" /></Reveal>

        <div className="mx-auto mt-16 max-w-3xl space-y-10">
          <Reveal>
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-500"><Target className="h-5 w-5" /></span><h2 className="text-2xl font-bold">The Challenge</h2></div>
            <p className="mt-4 text-muted-foreground">{c.challenge}</p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal/15 text-royal dark:text-sky"><Lightbulb className="h-5 w-5" /></span><h2 className="text-2xl font-bold">The Solution</h2></div>
            <p className="mt-4 text-muted-foreground">{c.solution}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {c.stack.map((t) => <span key={t} className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium">{t}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-10 flex items-center justify-center gap-3"><TrendingUp className="h-6 w-6 text-emerald-500" /><h2 className="text-2xl font-bold">The Impact</h2></div>
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {c.impact.map((m) => (
              <Card key={m.label} className="text-center">
                <p className="text-4xl font-bold text-gradient md:text-5xl"><Counter value={m.metric} /></p>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want results like these?" />
    </>
  );
}
