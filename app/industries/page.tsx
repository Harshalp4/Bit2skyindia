import { Check } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Reveal, RevealGroup } from "@/components/animated/reveal";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries We Serve",
  description: "Bit2Sky delivers software solutions for healthcare, manufacturing, logistics, corporate, retail, education and the service industry.",
  path: "/industries",
  keywords: ["Healthcare Software", "Manufacturing Software", "Logistics Software"],
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHero
        eyebrow="Industries"
        title="Software shaped by the realities of your sector"
        subtitle="We combine engineering with domain knowledge to deliver solutions that fit how your industry actually works."
      />
      <section className="container py-20 md:py-28">
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.slug}>
                <Card className="h-full hover:border-royal/40 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 to-sky/15 text-royal dark:text-sky"><Icon className="h-6 w-6" /></span>
                    <h2 className="text-xl font-semibold">{ind.name}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground">{ind.blurb}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {ind.solutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" /><span>{sol}</span></li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </RevealGroup>
      </section>
      <CTASection title="Don't see your industry?" subtitle="Our patterns transfer. Tell us your challenge and we'll architect a fit." />
    </>
  );
}
