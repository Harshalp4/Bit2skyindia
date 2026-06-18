"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Cloud, BrainCircuit } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardMockup, PhoneMockup } from "@/components/mockups";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-40" />
      <div className="container relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge><Sparkles className="h-3.5 w-3.5" /> Software · Cloud · AI</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-[1.05]"
          >
            Building Intelligent <span className="text-gradient">Software Solutions</span> That Drive Business Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
          >
            Custom software, mobile apps, cloud solutions, AI automation and enterprise platforms — built to accelerate your digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact" size="lg">Book Free Consultation <ArrowRight className="h-4 w-4" /></ButtonLink>
            <ButtonLink href="/services" size="lg" variant="outline">Explore Solutions</ButtonLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-royal dark:text-sky" /> Enterprise-grade</span>
            <span className="flex items-center gap-2"><Cloud className="h-4 w-4 text-royal dark:text-sky" /> Azure cloud-native</span>
            <span className="flex items-center gap-2"><BrainCircuit className="h-4 w-4 text-royal dark:text-sky" /> AI-powered</span>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <DashboardMockup />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="absolute -bottom-10 -left-6 hidden sm:block"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <PhoneMockup className="w-[140px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -right-3 top-6 glass rounded-2xl border border-border p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white"><BrainCircuit className="h-5 w-5" /></span>
              <div>
                <p className="text-xs text-muted-foreground">AI Automation</p>
                <p className="text-sm font-semibold">-70% manual work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
