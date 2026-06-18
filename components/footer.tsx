import Link from "next/link";
import { Sparkles, Linkedin, Twitter, Github, MapPin, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { SERVICES, PRODUCTS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              Bit2<span className="text-gradient">Sky</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{SITE.tagline}. {SITE.description}</p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-royal dark:text-sky" /> Navi Mumbai, Maharashtra, India</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-royal dark:text-sky" /> {SITE.email}</p>
            </div>
            <div className="mt-5 flex gap-3">
              <a href={SITE.social.linkedin} aria-label="LinkedIn" className="rounded-lg border border-border p-2 hover:bg-muted"><Linkedin className="h-4 w-4" /></a>
              <a href={SITE.social.twitter} aria-label="Twitter" className="rounded-lg border border-border p-2 hover:bg-muted"><Twitter className="h-4 w-4" /></a>
              <a href={SITE.social.github} aria-label="GitHub" className="rounded-lg border border-border p-2 hover:bg-muted"><Github className="h-4 w-4" /></a>
            </div>
          </div>

          <FooterCol title="Services" links={SERVICES.slice(0, 6).map((s) => ({ label: s.title, href: `/services/${s.slug}` }))} />
          <FooterCol title="Products" links={PRODUCTS.slice(0, 6).map((p) => ({ label: p.name, href: `/products#${p.slug}` }))} />
          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Industries", href: "/industries" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <p>Software Development Company in Navi Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-sm text-muted-foreground hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
