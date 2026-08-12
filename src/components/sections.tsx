import { Reveal, SectionHeading, Counter } from "@/components/primitives";
import {
  CERTS,
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
import { ExternalLink, Quote, ShieldCheck, Copy, Check } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/x-crown-logo.jpg";

const shell = "mx-auto max-w-7xl px-6 sm:px-8";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className={shell}>
        <SectionHeading index="01" title="The Architect" />
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
              “{PROFILE.tagline}”
            </p>
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                I am a Lead Technical Architect and Business Operations Executive
                operating at the intersection of Web3, artificial intelligence and
                cyber security. I do not merely inhabit technology — I shape it:
                designing decentralized ecosystems, hardening them with
                military-grade cryptography, and translating deep engineering into
                measurable business growth.
              </p>
              <p>
                On the engineering side I build high-scale MERN and Next.js systems,
                author protocol standards, audit smart contracts down to storage-slot
                collisions and invariant testing, and integrate neural intelligence
                into self-evolving products. On the business side I sit in the Office
                of the CEO &amp; Board, run operations for a live retail brand, and turn
                strategy into systems that people use every single day.
              </p>
              <p className="text-foreground">
                Excellence without compromise. My code is my law. My vision is my compass.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="surface-panel rounded-2xl p-7">
              <p className="text-[10px] uppercase tracking-[0.32em] text-primary">
                Creed
              </p>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                {[
                  ["Empire Architect", "Blockchain ecosystems and the foundations of trust."],
                  ["Shadow Guardian", "Anticipating threats before they emerge."],
                  ["Data Oracle", "Turning raw data into strategic power."],
                  ["Operator", "Systems that scale a business, not just a codebase."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="text-foreground">{t}</span> — {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-y border-border/60 py-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="02"
          title="Arsenal"
          kicker="The stack behind protocol design, enterprise systems and adversarial security work."
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
  return (
    <section id="experience" className="relative py-28">
      <div className={shell}>
        <SectionHeading index="03" title="Trajectory" />
        <div className="relative ml-1 border-l border-border/70 pl-8 sm:ml-4 sm:pl-12">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 70}>
              <div className="relative pb-14">
                <span
                  className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full ring-4 ring-background sm:-left-[57px]"
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
  return (
    <section id="impact" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="04"
          title="Open-Source Impact"
          kicker="Contributions to protocols used by millions — reviewed by the people who built them."
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
  return (
    <section id="projects" className="relative py-28">
      <div className={shell}>
        <SectionHeading
          index="05"
          title="Selected Works"
          kicker="Real systems in production — enterprise operations, robotics payments, protocol tooling and Web3 products."
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
              Explore all repositories
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Recognition() {
  return (
    <section className="relative py-28">
      <div className={shell}>
        <SectionHeading index="06" title="Recognition" />
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
          <h3 className="mt-20 font-display text-lg text-foreground">Certifications</h3>
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
            07 — Contact
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.05] font-bold">
            <span className="text-gilded">Build something legendary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            If you seek a worker, look elsewhere. If you seek a partner in greatness —
            you have arrived.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-transform hover:-translate-y-0.5"
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
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
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
  return (
    <footer className="border-t border-border/60 py-12">
      <div className={`${shell} flex flex-col items-center gap-5 text-center`}>
        <img
          src={logo}
          alt="EslaM-X emblem"
          className="h-16 w-16 rounded-2xl border border-primary/30 object-cover opacity-90"
        />
        <p className="font-display text-sm tracking-[0.5em] text-gilded">ESLAM-X</p>
        <p className="text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
          Sovereign Engineer · Blockchain Titan · Cyber Authority
        </p>
        <p className="text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} EslaM HeshAM. Rare. Unseen. Unstoppable.
        </p>
      </div>
    </footer>
  );
}
