import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup } from "@/components/animated/reveal";
import { Counter } from "@/components/animated/counter";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies — Real Results",
  description: "See how Bit2Sky delivered measurable impact across healthcare automation, enterprise DMS, AI documentation, mobile workforce apps and SaaS platforms.",
  path: "/case-studies",
  keywords: ["Software Case Studies", "Healthcare Automation", "Enterprise DMS"],
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies" }])} />
      <PageHero
        eyebrow="Case Studies"
        title="Outcomes, not just output"
        subtitle="A look at how we've helped organizations automate, scale and transform — with the numbers to prove it."
      />
      <section className="container py-20 md:py-28">
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          {CASE_STUDIES.map((c) => (
            <Reveal key={c.slug}>
              <Link href={`/case-studies/${c.slug}`} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-royal/40 hover:shadow-xl">
                <Badge>{c.industry}</Badge>
                <h2 className="mt-4 text-xl font-semibold">{c.title}</h2>
                <p className="mt-3 text-muted-foreground">{c.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {c.impact.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl font-bold text-gradient"><Counter value={m.metric} /></p>
                      <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal dark:text-sky transition-all group-hover:gap-2.5">Read case study <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>
      <CTASection title="Be our next success story" />
    </>
  );
}
