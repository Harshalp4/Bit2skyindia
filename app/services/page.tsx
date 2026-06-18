import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup } from "@/components/animated/reveal";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: "Services — Software, Cloud & AI Development",
  description: "Explore Bit2Sky's services: custom software development, web and mobile apps, Azure cloud, AI automation, healthcare software, document management and SaaS development.",
  path: "/services",
  keywords: ["Custom Software Development", "Web Application Development", "Mobile App Development", "AI Automation Solutions"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        title="Everything you need to build, scale and automate"
        subtitle="Full-stack software, cloud and AI services — delivered by senior engineers with a product mindset."
      >
        <ButtonLink href="/contact" size="lg">Book Free Consultation <ArrowRight className="h-4 w-4" /></ButtonLink>
      </PageHero>

      <section className="container py-20 md:py-28">
        <RevealGroup className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 to-sky/15 text-royal dark:text-sky"><Icon className="h-6 w-6" /></span>
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">{s.short}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.stack.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal dark:text-sky transition-all group-hover:gap-2.5">
                    Explore service <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </RevealGroup>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
