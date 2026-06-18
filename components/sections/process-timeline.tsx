import { PROCESS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/badge";
import { RevealGroup, Reveal } from "@/components/animated/reveal";

export function ProcessTimeline() {
  return (
    <section className="container py-20 md:py-28">
      <SectionHeading
        eyebrow="How We Work"
        title="A proven process from discovery to impact"
        subtitle="Predictable delivery, continuous demos and measurable outcomes at every stage."
      />
      <RevealGroup className="relative mt-14 grid gap-6 md:grid-cols-5">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-royal/40 to-transparent md:block" />
        {PROCESS.map((p) => (
          <Reveal key={p.step} className="relative">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card text-lg font-bold text-royal dark:text-sky shadow-sm">
                {p.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
