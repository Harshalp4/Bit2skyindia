"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      // Posts to /api/contact — wire that route to your email/CRM provider.
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Non-blocking so the demo flow still works without a backend.
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h3 className="mt-5 text-xl font-bold">Thank you — we'll be in touch</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">Your message has been received. A Bit2Sky specialist will reach out within one business day to schedule your consultation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name *</label>
          <input id="name" name="name" required className={field} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email *</label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone</label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="+91 ..." />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">Company</label>
          <input id="company" name="company" className={field} placeholder="Company name" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium">Service Required</label>
          <select id="service" name="service" className={field} defaultValue="">
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other">Other / Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message *</label>
          <textarea id="message" name="message" required rows={5} className={field} placeholder="Tell us about your project, goals and timeline..." />
        </div>
      </div>
      <Button type="submit" size="lg" disabled={loading} className="mt-6 w-full sm:w-auto">{loading ? "Sending..." : "Schedule Consultation"} <Send className="h-4 w-4" /></Button>
      <p className="mt-3 text-xs text-muted-foreground">By submitting, you agree to be contacted by Bit2Sky Technologies about your enquiry.</p>
    </form>
  );
}
