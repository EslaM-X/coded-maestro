import { Reveal, SectionHeading, Counter } from "@/components/primitives";
import {
  CERTS,
  COPY,
  HORIZONS,
  SPOTLIGHT,
  EXPERIENCE,
  IMPACT,
  PROFILE,
  PROJECTS,
  RECOMMENDATIONS,
  SKILL_GROUPS,
  SOCIALS,
  STATS,
} from "@/lib/profile-data";
import { SocialIcon } from "@/components/icons";
import { openExternal, useLang } from "@/lib/i18n";
import {
  ExternalLink,
  Quote,
  ShieldCheck,
  Copy,
  Check,
  Cpu,
  FileCode2,
  Scale,
  Search,
  Bot,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import logo from "@/assets/x-crown-logo.jpg";

const shell = "mx-auto max-w-7xl px-6 sm:px-8";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-28">
      <div className={shell}>
        <SectionHeading index="01" title={t(COPY.sections.about.en, COPY.sections.about.ar)} />
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
              “{t(
                PROFILE.tagline,
                "معظم الناس يلعبون داخل القواعد. أنا أكتب الشيفرة التي تضعها.",
              )}”
            </p>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>{t(COPY.aboutP1.en, COPY.aboutP1.ar)}</p>
              <p>{t(COPY.aboutP2.en, COPY.aboutP2.ar)}</p>
              <p className="text-foreground">{t(COPY.aboutP3.en, COPY.aboutP3.ar)}</p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="surface-panel rounded-2xl p-7">
              <p className="text-[10px] uppercase tracking-[0.32em] text-primary">
                {t(COPY.creedTitle.en, COPY.creedTitle.ar)}
              </p>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                {COPY.creed.map((c) => {
                  const [title, desc] = t(c.en, c.ar);
                  return (
                    <li key={title} className="flex gap-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <span className="text-foreground">{title}</span> — {desc}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-y border-border/60 py-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <Counter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={t(s.label, s.labelAr)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="02"
          title={t(COPY.sections.skills.en, COPY.sections.skills.ar)}
          kicker={t(COPY.kickers.skills.en, COPY.kickers.skills.ar)}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <div className="surface-panel group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50">
                <h3 className="font-display text-lg text-foreground">{g.title}</h3>
                <span className="gold-rule mt-4 block w-full opacity-60" />
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="04"
          title={t(COPY.sections.experience.en, COPY.sections.experience.ar)}
        />
        <div className="timeline-rail relative ml-1 border-l border-border/70 ps-8 sm:ml-4 sm:ps-12">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 70}>
              <div className="relative pb-14">
                <span
                  className="absolute -start-[41px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background sm:-start-[57px]"
                  style={{ backgroundImage: "var(--gradient-gold)" }}
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
                  {e.period}
                </p>
                <h3 className="mt-2 font-display text-xl text-foreground sm:text-2xl">
                  {e.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.org} · {e.place}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  const { t } = useLang();
  return (
    <section id="impact" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="05"
          title={t(COPY.sections.impact.en, COPY.sections.impact.ar)}
          kicker={t(COPY.kickers.impact.en, COPY.kickers.impact.ar)}
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {IMPACT.map((m, i) => (
            <Reveal key={m.title} delay={i * 110}>
              <a
                href={m.href}
                target="_blank"
                rel="noreferrer noopener"
                className="surface-panel flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                    {m.org}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg text-foreground">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.summary}
                </p>
                {m.quote && (
                  <p className="mt-5 border-l-2 border-primary/60 pl-4 text-sm italic text-foreground/90">
                    {m.quote}
                  </p>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="06"
          title={t(COPY.sections.projects.en, COPY.sections.projects.ar)}
          kicker={t(COPY.kickers.projects.en, COPY.kickers.projects.ar)}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => {
            const inner = (
              <>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/30 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-primary">
                    {p.tag}
                  </span>
                  {p.href && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            );
            const cls =
              "surface-panel flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60";
            return (
              <Reveal key={p.name} delay={(i % 3) * 90}>
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer noopener" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/EslaM-X?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-all hover:bg-primary/10"
            >
              {t(COPY.exploreRepos.en, COPY.exploreRepos.ar)}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Recognition() {
  const { t } = useLang();
  return (
    <section className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="07"
          title={t(COPY.sections.recognition.en, COPY.sections.recognition.ar)}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {RECOMMENDATIONS.map((r, i) => (
            <Reveal key={r.author} delay={i * 120}>
              <figure className="surface-panel h-full rounded-2xl p-8">
                <Quote className="h-6 w-6 text-primary/70" />
                <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-display text-base text-foreground">{r.author}</div>
                  <div className="text-xs text-muted-foreground">{r.title}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <h3 className="mt-20 font-display text-lg text-foreground">
            {t(COPY.certifications.en, COPY.certifications.ar)}
          </h3>
          <span className="gold-rule mt-4 block w-full opacity-60" />
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 60}>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-border/70 bg-card/40 px-4 py-3">
                <span className="text-sm text-foreground">{c.name}</span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.issuer} · {c.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ backgroundImage: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-56 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className={`${shell} relative text-center`}>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.42em] text-primary">
            08 — {t(COPY.sections.contact.en, COPY.sections.contact.ar)}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] font-bold">
            <span className="text-gilded">
              {t(COPY.contactTitle.en, COPY.contactTitle.ar)}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t(COPY.contactBody.en, COPY.contactBody.ar)}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="keep-mono break-all rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground sm:px-8 sm:text-xs transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            >
              {PROFILE.email}
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-all hover:bg-primary/10"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? t(COPY.copied.en, COPY.copied.ar) : t(COPY.copy.en, COPY.copy.ar)}
            </button>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(ev) => {
                    ev.preventDefault();
                    openExternal(s.href);
                  }}
                  className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
                >
                  <SocialIcon name={s.icon} className="h-3.5 w-3.5" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/60 py-12">
      <div className={`${shell} flex flex-col items-center gap-5 text-center`}>
        <img
          src={logo}
          alt="EslaM-X emblem"
          className="h-16 w-16 rounded-2xl border border-primary/30 object-cover opacity-90"
        />
        <p className="keep-latin font-display text-sm tracking-[0.5em] text-gilded">ESLAM-X</p>
        <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
          {t(COPY.footerTag.en, COPY.footerTag.ar)}
        </p>
        <p className="text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} EslaM HeshAM. {t(COPY.footerRights.en, COPY.footerRights.ar)}
        </p>
      </div>
    </footer>
  );
}
