import { Check, X } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/badge";
import { RevealGroup, Reveal } from "@/components/animated/reveal";

export function WhyChoose() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why Bit2Sky"
          title="A technology partner, not just a vendor"
          subtitle="The difference between software that ships and software that scales with your business."
        />
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="hidden grid-cols-[1.4fr_1fr_1fr] gap-4 px-4 pb-3 text-sm font-semibold text-muted-foreground md:grid">
            <span></span>
            <span className="text-center">Typical Vendor</span>
            <span className="text-center text-royal dark:text-sky">Bit2Sky</span>
          </div>
          <RevealGroup className="space-y-3">
            {WHY_CHOOSE.map((row) => (
              <Reveal key={row.title}>
                <div className="grid items-center gap-4 rounded-2xl border border-border bg-card p-4 md:grid-cols-[1.4fr_1fr_1fr]">
                  <p className="font-semibold">{row.title}</p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground md:justify-center md:text-center">
                    <X className="h-4 w-4 shrink-0 text-red-400" /> {row.them}
                  </p>
                  <p className="flex items-center gap-2 text-sm font-medium md:justify-center md:text-center">
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" /> {row.us}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
