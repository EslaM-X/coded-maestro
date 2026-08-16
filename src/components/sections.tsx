import { Reveal, SectionHeading, Counter } from "@/components/primitives";
import {
  CERTS,
  COPY,
  HORIZONS,
  RESEARCH_TRACKS,
  SPOTLIGHT,
  EXPERIENCE,
  IMPACT,
  PROFILE,
  PROJECTS,
  PROJECT_ORDER,
  PROJECT_GROUPS,
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
  RECOMMENDATIONS,
  SKILL_GROUPS,
  SOCIALS,
  STATS,
} from "@/lib/profile-data";
import { SocialIcon } from "@/components/icons";
import { openExternal, useLang } from "@/lib/i18n";
import {
  CERT_AR,
  IMPACT_AR,
  ISSUER_AR,
  PROJECT_AR,
  PROJECT_CATEGORY_AR,
  RECO_AR,
  SKILL_AR,
  SKILL_GROUP_AR,
} from "@/lib/i18n-content";
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
  Blocks,
  Bug,
  Lock,
  Sparkles,
  Coins,
  Zap,
  Globe,
  Layers,
  Vote,
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
              “{t(PROFILE.tagline, "معظم الناس يلعبون داخل القواعد. أنا أكتب الشيفرة التي تضعها.")}”
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
                <h3 className="font-display text-lg text-foreground">
                  {t(g.title, SKILL_GROUP_AR[g.title] ?? g.title)}
                </h3>
                <span className="gold-rule mt-4 block w-full opacity-60" />
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-[11px] tracking-wide text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {t(it, SKILL_AR[it] ?? it)}
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
                  {t(e.period, e.periodAr)}
                </p>
                <h3 className="mt-2 font-display text-xl text-foreground sm:text-2xl">
                  {t(e.role, e.roleAr)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(e.org, e.orgAr)} · {t(e.place, e.placeAr)}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {t(e.points, e.pointsAr).map((p) => (
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
          {IMPACT.map((m, i) => {
            const ar = IMPACT_AR[m.title];
            return (
              <Reveal key={m.title} delay={i * 110}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="surface-panel flex h-full flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                      {t(m.org, ar?.org ?? m.org)}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 font-display text-lg text-foreground">
                    {t(m.title, ar?.title ?? m.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(m.summary, ar?.summary ?? m.summary)}
                  </p>
                  {t(m.quote, ar?.quote ?? m.quote) && (
                    <p className="mt-5 border-s-2 border-primary/60 ps-4 text-sm italic text-foreground/90">
                      {t(m.quote, ar?.quote ?? m.quote)}
                    </p>
                  )}
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t } = useLang();
  const [cat, setCat] = useState<ProjectCategory>("ALL");
  const order = new Map(PROJECT_ORDER.map((n, i) => [n, i]));
  const filtered = (cat === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.category === cat))
    .slice()
    .sort((a, b) => (order.get(a.name) ?? 99) - (order.get(b.name) ?? 99));
  const card = (p: Project, i: number) => {
    const ar = PROJECT_AR[p.name];
    const inner = (
      <>
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-primary/30 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-primary">
            {t(p.tag, ar?.tag ?? p.tag)}
          </span>
          {p.href && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
        </div>
        <h3 className="mt-5 font-display text-xl text-foreground">{p.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {t(p.desc, ar?.desc ?? p.desc)}
        </p>
        {p.details && (
          <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-muted-foreground">
            {t(p.details.en, p.details.ar).map((d) => (
              <li key={d} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        )}
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
  };
  return (
    <section id="projects" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="06"
          title={t(COPY.sections.projects.en, COPY.sections.projects.ar)}
          kicker={t(COPY.kickers.projects.en, COPY.kickers.projects.ar)}
        />
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {PROJECT_CATEGORIES.map((c) => {
            const active = cat === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={active}
                className={
                  active
                    ? "rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground transition-all"
                    : "rounded-full border border-primary/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-all hover:border-primary/60 hover:text-primary"
                }
                style={active ? { backgroundImage: "var(--gradient-gold)" } : undefined}
              >
                {t(c, PROJECT_CATEGORY_AR[c] ?? c)}
              </button>
            );
          })}
        </div>
        {cat === "ALL" ? (
          <div className="space-y-16">
            {PROJECT_GROUPS.map((g) => {
              const items = g.names
                .map((n) => PROJECTS.find((p) => p.name === n))
                .filter((p): p is Project => Boolean(p));
              return (
                <div key={g.label.en}>
                  <div className="mb-6 flex items-center gap-4">
                    <h3 className="font-display text-xs uppercase tracking-[0.32em] text-gilded sm:text-sm">
                      {t(g.label.en, g.label.ar)}
                    </h3>
                    <span className="h-px flex-1 bg-border/60" />
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                      {String(items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((p, i) => card(p, i))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div key={cat} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => card(p, i))}
          </div>
        )}
        {cat !== "ALL" && filtered.length === 0 && (
          <div className="surface-panel rounded-2xl p-12 text-center">
            <p className="font-display text-xl text-foreground">
              {t("This lane is being forged right now.", "هذه الفئة تُشغَل عليها الآن.")}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(
                "When it ships, the evidence will be public here.",
                "عند الإطلاق، ستكون الأدلة عامة هنا.",
              )}
            </p>
          </div>
        )}
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
          index="10"
          title={t(COPY.sections.recognition.en, COPY.sections.recognition.ar)}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {RECOMMENDATIONS.map((r, i) => {
            const ar = RECO_AR[r.author];
            return (
              <Reveal key={r.author} delay={i * 120}>
                <figure className="surface-panel h-full rounded-2xl p-8">
                  <Quote className="h-6 w-6 text-primary/70" />
                  <blockquote className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {t(r.quote, ar?.quote ?? r.quote)}
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="font-display text-base text-foreground">
                      {t(r.author, ar?.author ?? r.author)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t(r.title, ar?.title ?? r.title)}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
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
                <span className="text-sm text-foreground">
                  {t(c.name, CERT_AR[c.name] ?? c.name)}
                </span>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t(c.issuer, ISSUER_AR[c.issuer] ?? c.issuer)} · {c.year}
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
    try {
      await navigator.clipboard?.writeText(PROFILE.email);
    } catch {
      /* clipboard unavailable (insecure context / preview frame) — ignore */
    }
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
            11 — {t(COPY.sections.contact.en, COPY.sections.contact.ar)}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] font-bold">
            <span className="text-gilded">{t(COPY.contactTitle.en, COPY.contactTitle.ar)}</span>
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
                  className="flex items-center gap-2.5 rounded-full border border-primary/25 bg-secondary/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
                >
                  <SocialIcon name={s.icon} className="h-5 w-5" />
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

const HORIZON_ICONS = {
  cpu: Cpu,
  file: FileCode2,
  scale: Scale,
  search: Search,
  bot: Bot,
  brain: BrainCircuit,
  coins: Coins,
  zap: Zap,
  globe: Globe,
  layers: Layers,
  vote: Vote,
} as const;

export function Horizons() {
  const { t } = useLang();
  return (
    <section id="horizons" className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="absolute inset-x-0 top-0 h-px opacity-70"
        style={{ backgroundImage: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className={shell}>
        <SectionHeading
          index="03"
          title={t(COPY.sections.horizons.en, COPY.sections.horizons.ar)}
          kicker={t(COPY.kickers.horizons.en, COPY.kickers.horizons.ar)}
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {HORIZONS.map((h, i) => {
            const Icon = HORIZON_ICONS[h.icon as keyof typeof HORIZON_ICONS] ?? Cpu;
            const c = t(h.en, h.ar);
            const bullets = (c as { bullets?: readonly string[] }).bullets ?? [];
            return (
              <Reveal key={c.title} delay={(i % 3) * 90}>
                <article className="surface-panel group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 sm:p-7">
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                    style={{ background: "var(--gradient-gold)" }}
                    aria-hidden="true"
                  />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 font-display text-lg leading-snug text-foreground">
                    {c.title}
                  </h3>
                  <span className="gold-rule mt-4 block w-full opacity-60" />
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                  {bullets.length > 0 && (
                    <ul className="relative mt-4 space-y-2 text-[13px] leading-relaxed text-muted-foreground">
                      {bullets.map((b) => (
                        <li key={b} className="flex gap-2.5">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Spotlight() {
  const { t } = useLang();
  const c = t(SPOTLIGHT.en, SPOTLIGHT.ar);
  return (
    <section className="relative py-16 sm:py-20">
      <div className={shell}>
        <Reveal>
          <div className="surface-panel relative overflow-hidden rounded-3xl p-7 sm:p-10">
            <div
              className="absolute -left-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-[100px]"
              style={{ background: "var(--gradient-gold)" }}
              aria-hidden="true"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  {c.kicker}
                </span>
                <h3 className="mt-5 font-display text-[clamp(1.5rem,3.6vw,2.4rem)] leading-tight font-bold">
                  <span className="text-gilded">{c.title}</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.body}
                </p>
                <p className="mt-6 border-s-2 border-primary/60 ps-4 text-sm italic text-foreground/90">
                  {c.quote}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={SPOTLIGHT.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(ev) => {
                      ev.preventDefault();
                      openExternal(SPOTLIGHT.href);
                    }}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                    style={{ backgroundImage: "var(--gradient-gold)" }}
                  >
                    <SocialIcon name="medium" className="h-3.5 w-3.5" />
                    {c.cta}
                  </a>
                  <a
                    href={SPOTLIGHT.prHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(ev) => {
                      ev.preventDefault();
                      openExternal(SPOTLIGHT.prHref);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary/10"
                  >
                    {c.cta2}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
              <div className="relative mx-auto hidden w-40 lg:block">
                <div
                  className="absolute inset-0 rounded-full opacity-40 blur-3xl animate-[halo-pulse_6s_ease-in-out_infinite]"
                  style={{ background: "var(--gradient-gold)" }}
                  aria-hidden="true"
                />
                <img
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="relative w-full rounded-3xl border border-primary/30 object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const RESEARCH_ICONS = {
  blocks: Blocks,
  file: FileCode2,
  shield: ShieldCheck,
  bug: Bug,
  lock: Lock,
  brain: BrainCircuit,
  cpu: Cpu,
  coins: Coins,
} as const;

export function Research() {
  const { t } = useLang();
  return (
    <section id="research" className="relative py-24 sm:py-28">
      <div className={shell}>
        <SectionHeading
          index="02"
          title={t(COPY.sections.research.en, COPY.sections.research.ar)}
          kicker={t(COPY.kickers.research.en, COPY.kickers.research.ar)}
        />
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {RESEARCH_TRACKS.map((r, i) => {
            const Icon = RESEARCH_ICONS[r.icon as keyof typeof RESEARCH_ICONS] ?? Blocks;
            const c = t(r.en, r.ar);
            return (
              <Reveal key={r.icon} delay={(i % 3) * 90}>
                <article className="surface-panel group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 sm:p-7">
                  <div
                    className="absolute -left-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
                    style={{ background: "var(--gradient-gold)" }}
                    aria-hidden="true"
                  />
                  <div className="relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-display text-3xl font-bold text-gilded" dir="ltr">
                        {r.years}+
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                        {c.unit}
                      </div>
                    </div>
                  </div>
                  <h3 className="relative mt-5 font-display text-lg leading-snug text-foreground">
                    {c.title}
                  </h3>
                  <span className="gold-rule mt-4 block w-full opacity-60" />
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                    {c.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
