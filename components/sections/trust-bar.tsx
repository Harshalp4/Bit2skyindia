import { TRUST } from "@/lib/data";
import { Counter } from "@/components/animated/counter";
import { RevealGroup, Reveal } from "@/components/animated/reveal";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container py-12">
        <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {TRUST.map((t) => (
            <Reveal key={t.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-gradient md:text-5xl">
                <Counter value={t.value} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t.label}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
