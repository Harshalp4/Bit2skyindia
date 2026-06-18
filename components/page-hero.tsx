import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animated/reveal";
import { Sparkles } from "lucide-react";

export function PageHero({
  eyebrow, title, subtitle, children,
}: { eyebrow?: string; title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-hero-radial">
      <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
      <div className="container relative py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Badge className="mb-5"><Sparkles className="h-3.5 w-3.5" /> {eyebrow}</Badge>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]">{title}</h1>
          {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>}
          {children && <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
