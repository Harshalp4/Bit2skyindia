import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card text-card-foreground p-6 transition-all duration-300",
        className
      )}
      {...props}
    />
  );
}
