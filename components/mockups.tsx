import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";
import type { ReactNode } from "react";

/**
 * Premium coded placeholder visuals (no external images required).
 * Swap these for <Image> with the AI-generated assets in IMAGE-PROMPTS.md
 * by replacing the component usage; the prompts map 1:1 to product/hero slots.
 */

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div className={cn("ring-glow overflow-hidden rounded-2xl border border-border bg-card", className)}>
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-amber-400/70" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 h-4 w-40 rounded bg-foreground/10" />
      </div>
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="col-span-1 space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-royal/15" />
              <span className="h-3 flex-1 rounded bg-foreground/10" />
            </div>
          ))}
        </div>
        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {["bg-royal/15", "bg-sky/15", "bg-emerald-400/15"].map((c, i) => (
              <div key={i} className={cn("rounded-xl p-3", c)}>
                <div className="h-2 w-10 rounded bg-foreground/20" />
                <div className="mt-2 h-5 w-14 rounded bg-foreground/30" />
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border p-4">
            <div className="flex items-end gap-2">
              {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-royal to-sky" style={{ height: `${h}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-[180px] rounded-[2rem] border-[6px] border-foreground/80 bg-card p-2 shadow-2xl", className)}>
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-foreground/30" />
      <div className="mt-5 space-y-3 rounded-2xl bg-gradient-to-b from-royal/10 to-transparent p-3">
        <div className="h-3 w-20 rounded bg-foreground/15" />
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-royal/15 p-3">
              <span className="block h-6 w-6 rounded-lg bg-royal/40" />
              <span className="mt-2 block h-2 w-10 rounded bg-foreground/20" />
            </div>
          ))}
        </div>
        <div className="h-16 rounded-xl bg-gradient-to-r from-royal/30 to-sky/30" />
      </div>
    </div>
  );
}

const visualThemes: Record<string, { bg: string; accent: string; glow: string }> = {
  bit2ehr: {
    bg: "from-teal-950 via-slate-900 to-cyan-700",
    accent: "bg-teal-300",
    glow: "shadow-teal-500/35",
  },
  emar: {
    bg: "from-emerald-950 via-slate-900 to-amber-700",
    accent: "bg-amber-300",
    glow: "shadow-amber-500/30",
  },
  "document-management-system": {
    bg: "from-slate-950 via-indigo-950 to-violet-700",
    accent: "bg-violet-300",
    glow: "shadow-violet-500/30",
  },
  "authoring-studio": {
    bg: "from-zinc-950 via-fuchsia-950 to-rose-700",
    accent: "bg-fuchsia-300",
    glow: "shadow-fuchsia-500/30",
  },
  "ai-soap-note-generator": {
    bg: "from-slate-950 via-cyan-950 to-emerald-700",
    accent: "bg-cyan-300",
    glow: "shadow-cyan-500/30",
  },
  "workflow-automation-platform": {
    bg: "from-stone-950 via-slate-900 to-orange-700",
    accent: "bg-orange-300",
    glow: "shadow-orange-500/25",
  },
  "mobile-app-solutions": {
    bg: "from-slate-950 via-purple-950 to-sky-700",
    accent: "bg-sky-300",
    glow: "shadow-sky-500/30",
  },
};

function WindowChrome({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-white/15 bg-white/92 text-slate-950 shadow-2xl backdrop-blur", className)}>
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 h-2.5 w-24 rounded-full bg-slate-200" />
      </div>
      {children}
    </div>
  );
}

function MetricCard({ label, value, tone = "bg-slate-100" }: { label: string; value: string; tone?: string }) {
  return (
    <div className={cn("rounded-xl p-3", tone)}>
      <div className="h-1.5 w-12 rounded-full bg-slate-300/80" />
      <div className="mt-2 text-lg font-bold leading-none">{value}</div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function Bit2EhrVisual() {
  return (
    <WindowChrome className="w-[84%] rotate-[-1.5deg]">
      <div className="grid grid-cols-[0.9fr_1.5fr] gap-4 p-4">
        <div className="space-y-3">
          <div className="rounded-2xl bg-teal-50 p-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal-200" />
              <div className="space-y-1.5">
                <div className="h-2.5 w-20 rounded-full bg-slate-300" />
                <div className="h-2 w-14 rounded-full bg-teal-300" />
              </div>
            </div>
          </div>
          {["Vitals", "Labs", "Medication", "Visits"].map((item, index) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 p-2">
              <span className={cn("h-7 w-7 rounded-lg", index === 1 ? "bg-cyan-100" : "bg-teal-100")} />
              <span className="text-xs font-semibold text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <MetricCard label="Visits" value="42" tone="bg-teal-50" />
            <MetricCard label="Vitals" value="98%" tone="bg-cyan-50" />
            <MetricCard label="Alerts" value="03" tone="bg-rose-50" />
          </div>
          <div className="rounded-2xl border border-slate-200 p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Patient Timeline</span>
              <span className="rounded-full bg-teal-100 px-2 py-1 text-[10px] font-bold text-teal-700">FHIR ready</span>
            </div>
            <div className="relative h-24">
              <div className="absolute left-2 top-3 h-16 w-1 rounded-full bg-teal-200" />
              {[8, 30, 56].map((top, index) => (
                <div key={top} className="absolute left-0 right-0 flex items-center gap-3" style={{ top }}>
                  <span className="h-4 w-4 rounded-full border-2 border-white bg-teal-400 shadow" />
                  <span className={cn("h-7 rounded-lg", index === 1 ? "w-3/4 bg-cyan-100" : "w-2/3 bg-slate-100")} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

function EmarVisual() {
  return (
    <div className="relative flex w-[82%] items-center justify-center">
      <div className="relative w-[74%] rounded-[1.8rem] border-[8px] border-slate-950 bg-white p-3 shadow-2xl">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-300" />
        <div className="rounded-2xl bg-emerald-50 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 w-24 rounded-full bg-emerald-300" />
              <div className="mt-2 h-2 w-16 rounded-full bg-slate-300" />
            </div>
            <div className="rounded-full bg-amber-200 px-2 py-1 text-[10px] font-bold text-amber-800">08:00</div>
          </div>
          <div className="mt-4 space-y-2">
            {["Donepezil", "Metformin", "Atorvastatin", "PRN Check"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm">
                <span className={cn("h-7 w-7 rounded-full", index === 0 ? "bg-emerald-400" : index === 3 ? "bg-amber-300" : "bg-slate-200")} />
                <span className="flex-1 text-xs font-semibold text-slate-700">{item}</span>
                <span className={cn("h-5 w-5 rounded-full border", index === 0 ? "border-emerald-500 bg-emerald-100" : "border-slate-300")} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="animate-pulse-soft absolute right-0 top-8 rounded-2xl bg-amber-300 px-3 py-2 text-xs font-bold text-amber-950 shadow-xl">
        Dose due
      </div>
    </div>
  );
}

function DmsVisual() {
  return (
    <div className="relative h-[76%] w-[86%]">
      <WindowChrome className="absolute inset-x-6 top-0">
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-3 p-4">
          <div className="space-y-2">
            {["Contracts", "Invoices", "Policies", "Archive"].map((item, index) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-slate-100 p-2">
                <span className={cn("h-7 w-6 rounded-md", index === 1 ? "bg-violet-200" : "bg-indigo-100")} />
                <span className="text-xs font-semibold text-slate-600">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 p-3">
            <div className="h-2.5 w-24 rounded-full bg-slate-300" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="rounded-xl bg-violet-50 p-2">
                  <div className="h-10 rounded-lg bg-white shadow-sm" />
                  <div className="mt-2 h-1.5 rounded-full bg-violet-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </WindowChrome>
      <div className="animate-scan-line absolute left-1/2 top-6 h-36 w-0.5 bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,.9)]" />
      <div className="animate-float-slow absolute bottom-0 left-2 rounded-2xl bg-white/95 p-3 text-xs font-bold text-slate-700 shadow-xl">
        OCR 96% complete
      </div>
      <div className="animate-float-delayed absolute bottom-4 right-0 rounded-2xl bg-emerald-300 px-3 py-2 text-xs font-bold text-emerald-950 shadow-xl">
        Approved
      </div>
    </div>
  );
}

function AuthoringVisual() {
  return (
    <WindowChrome className="w-[86%] rotate-[1deg]">
      <div className="grid grid-cols-[0.75fr_1.3fr_0.8fr] gap-3 p-4">
        <div className="space-y-2">
          {["Input", "Select", "Table", "Button"].map((item) => (
            <div key={item} className="rounded-xl border border-fuchsia-100 bg-fuchsia-50 p-2 text-[10px] font-bold text-fuchsia-700">{item}</div>
          ))}
        </div>
        <div className="rounded-2xl border-2 border-dashed border-fuchsia-200 bg-slate-50 p-3">
          <div className="h-3 w-24 rounded-full bg-slate-300" />
          <div className="mt-4 space-y-2">
            <div className="h-8 rounded-xl bg-white shadow-sm" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-8 rounded-xl bg-white shadow-sm" />
              <div className="h-8 rounded-xl bg-white shadow-sm" />
            </div>
            <div className="h-14 rounded-xl bg-fuchsia-100" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-xl bg-slate-100 p-2">
            <div className="h-2 w-16 rounded-full bg-slate-300" />
            <div className="mt-3 h-16 rounded-lg bg-white" />
          </div>
          <div className="animate-float-slow rounded-xl bg-rose-200 px-3 py-2 text-[10px] font-bold text-rose-900 shadow-lg">Publish</div>
        </div>
      </div>
    </WindowChrome>
  );
}

function SoapVisual() {
  return (
    <WindowChrome className="w-[86%]">
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="rounded-2xl bg-cyan-50 p-3">
          <div className="text-xs font-bold text-cyan-800">Live Transcript</div>
          <div className="mt-4 flex h-16 items-center gap-1">
            {[18, 35, 24, 48, 30, 58, 22, 42, 26, 50].map((height, index) => (
              <span key={index} className="animate-wave flex-1 rounded-full bg-cyan-400" style={{ height, animationDelay: `${index * 80}ms` }} />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 rounded-full bg-cyan-200" />
            <div className="h-2 w-4/5 rounded-full bg-cyan-200" />
            <div className="h-2 w-3/5 rounded-full bg-cyan-200" />
          </div>
        </div>
        <div className="space-y-2">
          {["Subjective", "Objective", "Assessment", "Plan"].map((item, index) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-white p-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase text-emerald-700">{item}</span>
                {index === 1 && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </WindowChrome>
  );
}

function WorkflowVisual() {
  return (
    <div className="relative h-[76%] w-[86%]">
      <WindowChrome className="absolute inset-0">
        <div className="p-5">
          <div className="mb-4 grid grid-cols-3 gap-2">
            <MetricCard label="SLA" value="99%" tone="bg-orange-50" />
            <MetricCard label="Open" value="18" tone="bg-slate-100" />
            <MetricCard label="Done" value="76" tone="bg-emerald-50" />
          </div>
          <div className="relative h-32">
            <div className="absolute left-[14%] top-1/2 h-0.5 w-[72%] bg-orange-200" />
            {[
              ["Start", "left-[2%] top-8 bg-orange-100"],
              ["Review", "left-[31%] top-4 bg-white"],
              ["Approve", "left-[58%] top-12 bg-white"],
              ["Notify", "right-[2%] top-7 bg-emerald-100"],
            ].map(([label, cls], index) => (
              <div key={label} className={cn("absolute rounded-2xl border border-slate-200 px-3 py-2 text-xs font-bold shadow-sm", cls, index === 2 && "animate-pulse-soft")}>
                {label}
              </div>
            ))}
          </div>
        </div>
      </WindowChrome>
      <span className="animate-flow-dot absolute left-[18%] top-[55%] h-3 w-3 rounded-full bg-orange-300 shadow-[0_0_16px_rgba(253,186,116,.9)]" />
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative flex h-[84%] w-[86%] items-end justify-center gap-3">
      {[
        ["bg-teal-50", "rotate-[-8deg]", "Care"],
        ["bg-sky-50", "z-10 -translate-y-5", "Route"],
        ["bg-violet-50", "rotate-[8deg]", "AI"],
      ].map(([bg, transform, label], index) => (
        <div key={label} className={cn("w-[30%] rounded-[1.6rem] border-[6px] border-slate-950 bg-white p-2 shadow-2xl", transform)}>
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-slate-300" />
          <div className={cn("rounded-2xl p-3", bg)}>
            <div className="text-xs font-bold text-slate-700">{label}</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((item) => (
                <span key={item} className="h-9 rounded-xl bg-white shadow-sm" />
              ))}
            </div>
            <div className="mt-3 h-16 rounded-xl bg-white/80" />
          </div>
        </div>
      ))}
      <span className="animate-float-slow absolute right-2 top-4 rounded-full bg-sky-300 px-3 py-1 text-xs font-bold text-sky-950 shadow-xl">Offline sync</span>
    </div>
  );
}

function ProductScene({ slug }: { slug: string }) {
  switch (slug) {
    case "bit2ehr":
      return <Bit2EhrVisual />;
    case "emar":
      return <EmarVisual />;
    case "document-management-system":
      return <DmsVisual />;
    case "authoring-studio":
      return <AuthoringVisual />;
    case "ai-soap-note-generator":
      return <SoapVisual />;
    case "workflow-automation-platform":
      return <WorkflowVisual />;
    case "mobile-app-solutions":
      return <MobileVisual />;
    default:
      return <DashboardMockup className="w-[78%] -rotate-1" />;
  }
}

/** Product-specific visual scenes for product hero/screenshot slots. */
export function ProductVisual({ label, product, className }: { label?: string; product?: Product; className?: string }) {
  const theme = product ? visualThemes[product.slug] : undefined;
  const visualLabel = label ?? (product ? `${product.name} · ${product.category}` : "Product platform");

  return (
    <div className={cn("ring-glow group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-950", theme?.glow, className)}>
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme?.bg ?? "from-navy-900 via-royal/40 to-sky/30")} />
      <div className="absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-40" />
      <div className={cn("absolute -left-16 top-10 h-40 w-40 rounded-full blur-3xl opacity-25", theme?.accent ?? "bg-sky")} />
      <div className="absolute right-8 top-7 flex gap-2">
        {[0, 1, 2].map((item) => (
          <span key={item} className={cn("h-2 w-2 rounded-full opacity-80", theme?.accent ?? "bg-sky")} />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <ProductScene slug={product?.slug ?? ""} />
      </div>
      <span className="absolute bottom-3 left-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur">
        {visualLabel}
      </span>
    </div>
  );
}
