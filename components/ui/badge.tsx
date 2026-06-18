import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-royal/30 bg-royal/10 px-3 py-1 text-xs font-medium text-royal dark:text-sky",
        className
      )}
      {...props}
    />
  );
}

export function SectionHeading({
  eyebrow, title, subtitle, center = true, className,
}: { eyebrow?: string; title: string; subtitle?: string; center?: boolean; className?: string }) {
  return (
    <div className={cn(center && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-royal dark:text-sky">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
