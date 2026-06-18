import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/badge";
import { RevealGroup, Reveal } from "@/components/animated/reveal";

export function ServicesOverview() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="What We Do"
        title="End-to-end software, cloud & AI services"
        subtitle="From a single product to a full digital transformation, we cover the entire stack — strategy, design, engineering and operations."
      />
      <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-xl hover:shadow-royal/10"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-royal/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 to-sky/15 text-royal dark:text-sky">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-5 flex items-center gap-1 text-lg font-semibold">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 -translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.short}</p>
              </Link>
            </Reveal>
          );
        })}
      </RevealGroup>
    </section>
  );
}
