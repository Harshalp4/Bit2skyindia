import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { SectionHeading, Badge } from "@/components/ui/badge";
import { ProductVisual } from "@/components/mockups";
import { Reveal } from "@/components/animated/reveal";

export function ProductsShowcase() {
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
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our Products"
          title="Platforms we've built — ready to power your business"
          subtitle="Production-grade products across healthcare, enterprise and automation, each deployable and customizable to your operations."
        />
        <div className="mt-14 space-y-8">
          {PRODUCTS.map((p, i) => {
            const Icon = p.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.slug}>
                <article
                  id={p.slug}
                  className={`grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${productCardStyles[i % productCardStyles.length]} p-6 shadow-sm md:grid-cols-2 md:p-8`}
                >
                  <div className={flip ? "md:order-2" : ""}>
                    <ProductVisual product={p} />
                  </div>
                  <div className={flip ? "md:order-1" : ""}>
                    <Badge>
                      <Icon className="h-3.5 w-3.5" /> {p.category}
                    </Badge>
                    <h3 className="mt-4 text-2xl font-bold md:text-3xl">{p.name}</h3>
                    <p className="mt-1 text-base font-medium text-royal dark:text-sky">{p.tagline}</p>
                    <p className="mt-3 text-muted-foreground">{p.description}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products#${p.slug}`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:gap-2.5 dark:text-sky transition-all"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
