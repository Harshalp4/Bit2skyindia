import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, breadcrumbSchema, organizationSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact — Book a Free Consultation",
  description: "Get in touch with Bit2Sky Technologies in Navi Mumbai. Book a free consultation for custom software, cloud, AI and mobile app development.",
  path: "/contact",
  keywords: ["Contact Bit2Sky", "Software Development Consultation", "Navi Mumbai"],
});

const INFO = [
  { icon: MapPin, label: "Location", value: "Navi Mumbai, Maharashtra, India" },
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: "Available on request" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <PageHero
        eyebrow="Contact"
        title="Let's build your next digital product"
        subtitle="Tell us about your project. We'll get back within one business day to schedule a free consultation."
      />
      <section className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold">Talk to a specialist</h2>
            <p className="mt-3 text-muted-foreground">Whether you have a detailed spec or just an idea, we'll help you find the fastest path to a great product.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {INFO.map((i) => {
                const Icon = i.icon;
                return (
                  <div key={i.label} className="rounded-2xl border border-border bg-card p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 to-sky/15 text-royal dark:text-sky"><Icon className="h-5 w-5" /></span>
                    <p className="mt-4 text-sm text-muted-foreground">{i.label}</p>
                    <p className="font-medium">{i.value}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Bit2Sky location — Navi Mumbai"
                src="https://www.google.com/maps?q=Navi+Mumbai,Maharashtra,India&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
