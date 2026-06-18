import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProductVisual } from "@/components/mockups";
import { Reveal } from "@/components/animated/reveal";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, softwareApplicationSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products — Healthcare, Enterprise & AI Platforms",
  description: "Explore Bit2Sky products: Bit2EHR, eMAR, Document Management System, Authoring Studio, AI SOAP Note Generator, Workflow Automation Platform and Mobile App Solutions.",
  path: "/products",
  keywords: ["EHR Software", "eMAR", "Document Management System", "AI SOAP Notes", "Workflow Automation"],
});

export default function ProductsPage() {
  const productCardStyles = [
    "from-teal-500/10 via-transparent to-cyan-500/10",
    "from-emerald-500/10 via-transparent to-amber-500/10",
    "from-violet-500/10 via-transparent to-indigo-500/10",
    "from-fuchsia-500/10 via-transparent to-rose-500/10",
    "from-cyan-500/10 via-transparent to-emerald-500/10",
    "from-orange-500/10 via-transparent to-slate-500/10",
    "from-sky-500/10 via-transparent to-purple-500/10",
  ];

  return (
    <>
      <JsonLd
        data={[
          ...PRODUCTS.map((p) => softwareApplicationSchema({ name: p.name, description: p.description, category: p.category, path: `/products#${p.slug}` })),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]),
        ]}
      />
      <PageHero
        eyebrow="Products"
        title="Platforms engineered to run real operations"
        subtitle="Production-grade products across healthcare, enterprise and automation — deployable today, customizable to your workflows."
      >
        <ButtonLink href="/contact" size="lg">Request a Demo <ArrowRight className="h-4 w-4" /></ButtonLink>
      </PageHero>

      <section className="container py-20 md:py-28">
        <div className="space-y-10">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article id={p.slug} className={`scroll-mt-24 grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${productCardStyles[i % productCardStyles.length]} p-6 shadow-sm md:grid-cols-2 md:p-8`}>
                  <div className={flip ? "md:order-2" : ""}><ProductVisual product={p} /></div>
                  <div className={flip ? "md:order-1" : ""}>
                    <Badge><Icon className="h-3.5 w-3.5" /> {p.category}</Badge>
                    <h2 className="mt-4 text-2xl font-bold md:text-3xl">{p.name}</h2>
                    <p className="mt-1 font-medium text-royal dark:text-sky">{p.tagline}</p>
                    <p className="mt-3 text-muted-foreground">{p.description}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><span>{f}</span></li>
                      ))}
                    </ul>
                    <div className="mt-6 flex gap-3">
                      <ButtonLink href="/contact" size="sm">Request Demo</ButtonLink>
                      <Link href="/case-studies" className="inline-flex items-center gap-1.5 px-2 text-sm font-semibold text-royal dark:text-sky">Case studies <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection title="See it running on your data" subtitle="Book a personalized demo and we'll tailor the product to your workflows." primary={{ label: "Request a Demo", href: "/contact" }} />
    </>
  );
}
