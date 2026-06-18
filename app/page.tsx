import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { IndustriesSection } from "@/components/sections/industries";
import { WhyChoose } from "@/components/sections/why-choose";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { faqSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bit2Sky Technologies — Software Development Company in Mumbai",
  description:
    "Bit2Sky Technologies builds custom software, web & mobile apps, AI automation, Azure cloud and healthcare platforms. A premium software development company in Navi Mumbai driving digital transformation.",
  path: "/",
  keywords: [
    "Software Development Company", "Software Development Company in Mumbai",
    "Custom Software Development", "AI Development Company", "Azure Cloud Solutions",
  ],
});

const HOME_FAQS = [
  { q: "What does Bit2Sky Technologies do?", a: "Bit2Sky is a software development and digital transformation company specializing in custom software, web and mobile applications, AI automation, Azure cloud solutions, healthcare technology, document management and SaaS product development." },
  { q: "Where is Bit2Sky located?", a: "Bit2Sky Technologies is headquartered in Navi Mumbai, Maharashtra, India, and serves enterprise clients globally." },
  { q: "What industries does Bit2Sky serve?", a: "We serve healthcare, manufacturing, logistics, corporate, retail, education and the broader service industry with tailored software solutions." },
  { q: "What technologies does Bit2Sky use?", a: "Our stack includes .NET, ASP.NET Core, ABP.io, Angular, React, Next.js, Flutter, React Native, .NET MAUI, Azure, Azure OpenAI, AI Document Intelligence, SQL Server, PostgreSQL and MongoDB." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ProductsShowcase />
      <IndustriesSection />
      <WhyChoose />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}
