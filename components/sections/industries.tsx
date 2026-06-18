import Link from "next/link";
import { INDUSTRIES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/badge";
import { RevealGroup, Reveal } from "@/components/animated/reveal";

export function IndustriesSection() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="Industries"
        title="Deep expertise across regulated and complex sectors"
        subtitle="We pair engineering with domain knowledge, so we speak your language from day one."
      />
      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((ind) => {
          const Icon = ind.icon;
          return (
            <Reveal key={ind.slug}>
              <Link
                href="/industries"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 to-sky/15 text-royal dark:text-sky transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.blurb}</p>
              </Link>
            </Reveal>
          );
        })}
      </RevealGroup>
    </section>
  );
}
