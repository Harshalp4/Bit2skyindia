"use client";
import { motion } from "framer-motion";
import { Cloud, Code2, Database, Smartphone, BrainCircuit, Globe } from "lucide-react";

const ICONS = [Code2, Globe, Smartphone, Cloud, BrainCircuit, Database];

export function TechOrbit() {
  const rings = [
    { radius: 70, count: 3, duration: 24 },
    { radius: 120, count: 3, duration: 36, reverse: true },
  ];
  let iconIndex = 0;
  return (
    <div className="relative mx-auto h-[300px] w-[300px]">
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-sky text-white shadow-xl shadow-royal/30">
        <span className="text-center text-xs font-bold leading-tight">Bit2Sky<br/>Core</span>
      </div>
      {rings.map((ring, ri) => (
        <div key={ri} className="absolute inset-0">
          <div
            className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-border"
            style={{ width: ring.radius * 2, height: ring.radius * 2, transform: "translate(-50%,-50%)" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-0 w-0"
            animate={{ rotate: ring.reverse ? -360 : 360 }}
            transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: ring.count }).map((_, i) => {
              const Icon = ICONS[iconIndex++ % ICONS.length];
              const angle = (i / ring.count) * 2 * Math.PI;
              const x = Math.cos(angle) * ring.radius;
              const y = Math.sin(angle) * ring.radius;
              return (
                <motion.div
                  key={i}
                  className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card shadow-lg"
                  style={{ left: x - 22, top: y - 22 }}
                  animate={{ rotate: ring.reverse ? 360 : -360 }}
                  transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className="h-5 w-5 text-royal dark:text-sky" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
