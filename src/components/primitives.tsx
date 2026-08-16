import type { ReactNode } from "react";
import { useReveal, useCountUp } from "@/hooks/use-motion";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.4em] text-primary/70">{index}</span>
        <span className="gold-rule w-16" />
      </div>
      <h2 className="mt-4 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-tight font-bold">
        <span className="text-gilded">{title}</span>
      </h2>
      {kicker && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{kicker}</p>
      )}
    </Reveal>
  );
}

export function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, visible } = useReveal();
  const n = useCountUp(value, visible);
  return (
    <div ref={ref} className="text-center">
      <div dir="ltr" className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-gilded">
        {n.toLocaleString("en-US")}
        {suffix}
      </div>

      <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
