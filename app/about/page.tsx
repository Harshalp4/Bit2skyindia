import { Target, Eye, Heart, Rocket, ShieldCheck, Users, Cpu, Globe } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal, RevealGroup } from "@/components/animated/reveal";
import { CTASection } from "@/components/sections/cta";
import { TrustBar } from "@/components/sections/trust-bar";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const metadata = buildMetadata({
  title: "About Bit2Sky Technologies",
  description: "Learn about Bit2Sky Technologies — a software development and digital transformation company in Navi Mumbai with 11+ years of engineering excellence across software, cloud and AI.",
  path: "/about",
  keywords: ["About Bit2Sky", "Software Development Company in Mumbai"],
});

const VALUES = [
  { icon: ShieldCheck, title: "Engineering Excellence", desc: "We hold ourselves to enterprise-grade standards in security, quality and reliability." },
  { icon: Heart, title: "Client Partnership", desc: "We measure our success by your outcomes, not by hours billed." },
  { icon: Cpu, title: "Innovation by Default", desc: "Cloud-native and AI-first thinking is woven into everything we build." },
  { icon: Users, title: "Ownership & Integrity", desc: "We own problems end to end and communicate with radical transparency." },
];

const EXPERTISE = [
  { icon: Cpu, label: "AI & Automation", value: "Azure OpenAI, RAG, Document Intelligence" },
  { icon: Globe, label: "Web & Mobile", value: "Next.js, Angular, Flutter, React Native" },
  { icon: ShieldCheck, label: "Enterprise & Healthcare", value: "EHR, eMAR, DMS, compliance-ready" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About Us"
        title="Engineering the software backbone of modern businesses"
        subtitle="For over a decade, Bit2Sky has helped organizations digitize, automate and scale through software, cloud and AI."
      />

      <TrustBar />

      <section className="container py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading center={false} eyebrow="Our Story" title="From bits to the sky — a decade of building" />
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Bit2Sky Technologies began with a simple conviction: that well-engineered software is the single biggest lever a business has to grow, automate and outpace competitors.</p>
              <p>Over 11+ years we've grown from a small team of engineers into a digital transformation partner trusted across healthcare, enterprise and high-growth startups — shipping platforms that handle real scale, real compliance and real outcomes.</p>
              <p>Today we combine deep domain expertise with cloud-native and AI-first engineering to help organizations move faster than they thought possible.</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-navy-900 text-white">
                <Target className="h-7 w-7 text-sky" />
                <h3 className="mt-4 text-lg font-semibold">Our Mission</h3>
                <p className="mt-2 text-sm text-white/75">To help businesses digitize, automate, optimize and scale through modern, intelligent technology.</p>
              </Card>
              <Card>
                <Eye className="h-7 w-7 text-royal dark:text-sky" />
                <h3 className="mt-4 text-lg font-semibold">Our Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">To be the most trusted software, cloud and AI partner for ambitious organizations worldwide.</p>
              </Card>
              <Card>
                <Rocket className="h-7 w-7 text-royal dark:text-sky" />
                <h3 className="mt-4 text-lg font-semibold">Future Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">An AI-augmented enterprise where every workflow is intelligent, automated and continuously improving.</p>
              </Card>
              <Card className="bg-gradient-to-br from-royal to-sky text-white">
                <Heart className="h-7 w-7" />
                <h3 className="mt-4 text-lg font-semibold">Why Bit2Sky</h3>
                <p className="mt-2 text-sm text-white/85">Product mindset, enterprise engineering and domain depth — a partner that scales with you.</p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20 md:py-28">
        <div className="container">
          <SectionHeading eyebrow="Core Values" title="The principles behind every engagement" />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title}>
                  <Card className="h-full hover:border-royal/40 hover:shadow-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 to-sky/15 text-royal dark:text-sky"><Icon className="h-6 w-6" /></span>
                    <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                  </Card>
                </Reveal>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <SectionHeading eyebrow="Technology Expertise" title="Depth across the modern enterprise stack" />
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {EXPERTISE.map((e) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.label}>
                <Card className="h-full">
                  <Icon className="h-7 w-7 text-royal dark:text-sky" />
                  <h3 className="mt-4 text-lg font-semibold">{e.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.value}</p>
                </Card>
              </Reveal>
            );
          })}
        </RevealGroup>
      </section>

      <CTASection title="Let's build something that lasts" subtitle="Partner with a team that treats your product like its own." />
    </>
  );
}
