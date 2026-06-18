import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/animated/reveal";

export function CTASection({
  title = "Let's Build Your Next Digital Product",
  subtitle = "Tell us where you want your business to be. We'll architect the software, cloud and AI to get you there.",
  primary = { label: "Book Free Consultation", href: "/contact" },
  secondary = { label: "Explore Solutions", href: "/services" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="container py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-navy-900 px-6 py-16 text-center text-white md:px-16 md:py-20">
          <div className="absolute inset-0 bg-hero-radial opacity-90" />
          <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-30" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-white/80">{subtitle}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primary.href} size="lg">{primary.label}<ArrowRight className="h-4 w-4" /></ButtonLink>
              <ButtonLink href={secondary.href} size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">{secondary.label}</ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
