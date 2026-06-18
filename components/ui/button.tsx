import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-royal text-white hover:bg-royal-700 shadow-lg shadow-royal/25 hover:shadow-royal/40",
  secondary:
    "bg-foreground text-background hover:opacity-90",
  outline:
    "border border-border bg-transparent hover:bg-muted text-foreground",
  ghost: "bg-transparent hover:bg-muted text-foreground",
};
const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

type CommonProps = { variant?: Variant; size?: Size; className?: string };

export function Button({
  variant = "primary", size = "md", className, ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

export function ButtonLink({
  variant = "primary", size = "md", className, href, ...props
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, "href">) {
  return <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
