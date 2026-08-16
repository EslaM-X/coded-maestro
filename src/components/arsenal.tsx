import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/primitives";
import { ARCH_FLOWS, COPY, EVIDENCE, PROFILE } from "@/lib/profile-data";
import { useLang } from "@/lib/i18n";
import { ExternalLink, Bot, BrainCircuit, ArrowRight, CheckCircle2 } from "lucide-react";

const shell = "mx-auto max-w-7xl px-6 sm:px-8";

const FLOW_ICONS = {
  bot: Bot,
  brain: BrainCircuit,
} as const;

/** Command-center telemetry — live GitHub assets served from this site. */
export function Arsenal() {
  const { t } = useLang();
  const panels = [
    {
      src: "/arsenal/arsenal.svg",
      alt: "GitHub Arsenal — engineering telemetry",
    },
    {
      src: "/arsenal/activity.svg",
      alt: "Engineering velocity — 52-week contribution telemetry",
    },
    {
      src: "/arsenal/tech-matrix.svg",
      alt: "Technology matrix",
    },
    {
      src: "/arsenal/engineering-evidence.svg",
      alt: "Engineering evidence flows",
    },
  ];
  return (
    <section id="arsenal" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="07"
          title={t(COPY.sections.arsenal.en, COPY.sections.arsenal.ar)}
          kicker={t(COPY.kickers.arsenal.en, COPY.kickers.arsenal.ar)}
        />
        <div className="space-y-8">
          {panels.map((p, i) => (
            <Reveal key={p.src} delay={(i % 2) * 110}>
              <div className="overflow-hidden rounded-2xl border border-border/70 shadow-[var(--shadow-gold)]">
                <img
                  src={p.src}
                  alt={t(p.alt, p.alt)}
                  loading="lazy"
                  width={920}
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 text-center font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
            {t(COPY.arsenalNote.en, COPY.arsenalNote.ar)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Engineering Evidence — every claim opens to a public artifact. */
export function Evidence() {
  const { t } = useLang();
  return (
    <section id="evidence" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="08"
          title={t(COPY.sections.evidence.en, COPY.sections.evidence.ar)}
          kicker={t(COPY.kickers.evidence.en, COPY.kickers.evidence.ar)}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {EVIDENCE.map((e, i) => (
            <Reveal key={e.href} delay={(i % 2) * 90}>
              <a
                href={e.href}
                target="_blank"
                rel="noreferrer noopener"
                className="surface-panel group flex h-full items-start gap-4 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                      {t(e.org.en, e.org.ar)}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-foreground">
                    {t(e.claim.en, e.claim.ar)}
                  </span>
                  <span className="mt-3 inline-block rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
                    {t(e.metric.en, e.metric.ar)}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Interactive Architecture — click a domain to walk its pipeline. */
export function Architecture() {
  const { t, isAr } = useLang();
  const [flowId, setFlowId] = useState<string>(ARCH_FLOWS[0].id);
  const flow = ARCH_FLOWS.find((f) => f.id === flowId) ?? ARCH_FLOWS[0];
  const Icon = FLOW_ICONS[flow.icon as keyof typeof FLOW_ICONS] ?? Bot;

  return (
    <section id="architecture" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="09"
          title={t(COPY.sections.architecture.en, COPY.sections.architecture.ar)}
          kicker={t(COPY.kickers.architecture.en, COPY.kickers.architecture.ar)}
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {ARCH_FLOWS.map((f) => {
              const active = f.id === flowId;
              const FIcon = FLOW_ICONS[f.icon as keyof typeof FLOW_ICONS] ?? Bot;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFlowId(f.id)}
                  aria-pressed={active}
                  className={
                    active
                      ? "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-all"
                      : "inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all hover:border-primary/60 hover:text-primary"
                  }
                  style={active ? { backgroundImage: "var(--gradient-gold)" } : undefined}
                >
                  <FIcon className="h-3.5 w-3.5" />
                  {t(f.title.en, f.title.ar)}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal key={flowId}>
          <div className="surface-panel relative overflow-hidden rounded-3xl p-7 sm:p-10">
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-[100px]"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    {t(flow.title.en, flow.title.ar)}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] tracking-wide text-primary">
                    {t(flow.tagline.en, flow.tagline.ar)}
                  </p>
                </div>
              </div>

              <ol className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-stretch">
                {flow.stages.map((s, i) => (
                  <li key={i} className="relative flex flex-1 items-center gap-4 lg:block">
                    <div className="h-full w-px bg-primary/30 lg:hidden" aria-hidden="true" />
                    <div className="min-w-0 flex-1 rounded-xl border border-border/70 bg-background/40 p-4">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-primary/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-1 font-display text-sm text-foreground">
                        {t(s.en, s.ar)}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {t(s.descEn, s.descAr)}
                      </p>
                    </div>
                    {i < flow.stages.length - 1 && (
                      <span className="hidden shrink-0 text-primary/60 lg:block" aria-hidden="true">
                        <ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                      </span>
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-8 border-s-2 border-primary/60 ps-4 text-sm italic text-foreground/90">
                {t(flow.note.en, flow.note.ar)}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 text-center">
            <a
              href={`https://github.com/${PROFILE.handle}`}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-all hover:bg-primary/10"
            >
              {t(COPY.evidenceCta.en, COPY.evidenceCta.ar)}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
