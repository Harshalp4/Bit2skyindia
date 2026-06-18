"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  // Split numeric portion from suffix/prefix (e.g. "11+", "-70%", "1M+")
  const match = value.match(/^([^\d-]*)(-?\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!inView || !match) {
      if (!match) setDisplay(value);
      return;
    }
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      const rounded = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
      setDisplay(`${prefix}${rounded}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, match, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
