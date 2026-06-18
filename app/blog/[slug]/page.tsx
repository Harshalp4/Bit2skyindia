import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animated/reveal";
import { CTASection } from "@/components/sections/cta";
import { JsonLd } from "@/components/json-ld";
import { buildMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = BLOG_POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return buildMetadata({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, type: "article", keywords: [p.category] });
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((x) => x.slug === slug);
  if (!post) notFound();
  const related = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: post.title, description: post.excerpt, date: post.date, path: `/blog/${post.slug}` }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
        ]}
      />
      <article>
        <header className="relative overflow-hidden border-b border-border bg-hero-radial">
          <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
          <div className="container relative max-w-3xl py-16 md:py-20">
            <nav className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground">Blog</Link>
              <ChevronRight className="h-3.5 w-3.5" /><span className="text-foreground">{post.category}</span>
            </nav>
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.1]">{post.title}</h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {fmt(post.date)}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="container max-w-3xl py-16">
          <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-navy-900 via-royal/40 to-sky/30" />
          <div className="prose-custom mt-10 space-y-6">
            <p className="text-xl font-medium text-foreground">{post.excerpt}</p>
            {post.body.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">{para}</p>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">Related articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Reveal key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg">
                    <Badge className="self-start">{r.category}</Badge>
                    <h3 className="mt-3 text-lg font-semibold">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal dark:text-sky">Read <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
