import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { Badge, SectionHeading } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal, RevealGroup } from "@/components/animated/reveal";
import { ProductVisual } from "@/components/mockups";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return buildMetadata({
    title: s.title,
    description: s.overview,
    path: `/services/${s.slug}`,
    keywords: s.keywords,
  });
}

function serviceFaqs(title: string) {
  return [
    { q: `How long does a ${title.toLowerCase()} project take?`, a: "Timelines depend on scope, but we work in milestones and typically deliver a usable first release within 6–12 weeks, then iterate." },
    { q: `How much does ${title.toLowerCase()} cost?`, a: "We scope each engagement to your goals and budget. Book a free consultation and we'll provide a transparent estimate." },
    { q: "Do you provide support after launch?", a: "Yes. We offer ongoing support, optimization and feature development as a long-term partner." },
    { q: "Can you work with our existing systems?", a: "Absolutely. We specialize in integrating with legacy systems, third-party APIs and existing data." },
  ];
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;
  const faqs = serviceFaqs(service.title);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ title: service.title, overview: service.overview, path: `/services/${service.slug}` }),
          faqSchema(faqs),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }]),
        ]}
      />

      <section className="relative overflow-hidden border-b border-border bg-hero-radial">
        <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
        <div className="container relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <nav className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link href="/services" className="hover:text-foreground">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{service.title}</span>
            </nav>
            <Badge><Icon className="h-3.5 w-3.5" /> {service.title}</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">Book Free Consultation <ArrowRight className="h-4 w-4" /></ButtonLink>
              <ButtonLink href="/case-studies" size="lg" variant="outline">View Case Studies</ButtonLink>
            </div>
          </div>
          <Reveal delay={1}><ProductVisual label={service.title} /></Reveal>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading center={false} eyebrow="Business Benefits" title="Outcomes you can measure" />
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600"><Check className="h-4 w-4" /></span>
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading center={false} eyebrow="Features" title="What's included" />
            <ul className="mt-6 grid gap-3">
              {service.features.map((f) => (
                <li key={f}><Card className="flex items-center gap-3 p-4"><Check className="h-5 w-5 shrink-0 text-royal dark:text-sky" /><span className="text-sm">{f}</span></Card></li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16">
          <SectionHeading center={false} eyebrow="Technology Stack" title="Built with modern, proven tools" />
          <div className="mt-6 flex flex-wrap gap-3">
            {service.stack.map((t) => (
              <span key={t} className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="border-y border-border bg-muted/30 py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <RevealGroup className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group rounded-2xl border border-border bg-card p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {f.q}
                    <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
