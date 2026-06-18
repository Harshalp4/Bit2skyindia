"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV, SITE } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled ? "glass border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-royal to-sky text-white">
            <Sparkles className="h-5 w-5" />
          </span>
          <span>
            Bit2<span className="text-gradient">Sky</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-royal dark:text-sky" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
            Book Consultation
          </ButtonLink>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <ul className="container flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-3">
              <ButtonLink href="/contact" className="w-full">Book Consultation</ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-muted"
    >
      {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
