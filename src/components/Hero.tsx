import { lazy, Suspense } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { PROFILE, SOCIALS } from "@/lib/profile-data";
import { SocialIcon } from "@/components/icons";
import { useHydrated, useTypewriter } from "@/hooks/use-motion";
import portrait from "@/assets/eslam-portrait.png";
import logo from "@/assets/x-crown-logo.jpg";

const EmberField = lazy(() => import("@/components/EmberField"));

export default function Hero() {
  const hydrated = useHydrated();
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="hairline-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0">
        {hydrated && (
          <Suspense fallback={null}>
            <EmberField />
          </Suspense>
        )}
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-primary">
              Available for elite engagements
            </span>
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.5em] text-muted-foreground">
            {PROFILE.location}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.95] font-bold tracking-tight">
            <span className="block text-foreground">EslaM</span>
            <span className="block text-gilded">HeshAM</span>
            <span className="mt-3 block font-sans text-[clamp(0.7rem,1.6vw,1rem)] font-light tracking-[0.6em] text-muted-foreground">
              &mdash; MR-X &mdash;
            </span>
          </h1>

          <p className="mt-7 min-h-[2.2rem] font-mono text-sm tracking-[0.22em] text-primary sm:text-base">
            {typed}
            <span className="ml-0.5 inline-block animate-[caret-blink_1s_steps(1)_infinite]">
              _
            </span>
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {PROFILE.headline}. I architect decentralized systems, harden them against
            the worst adversaries, and turn engineering depth into business outcomes.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ backgroundImage: "var(--gradient-gold)", backgroundSize: "200% auto" }}
            >
              View the Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-primary/40 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-all hover:bg-primary/10"
            >
              Start a Conversation
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
                >
                  <SocialIcon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            className="absolute inset-x-6 top-10 bottom-0 rounded-[50%] opacity-70 blur-3xl animate-[halo-pulse_6s_ease-in-out_infinite]"
            style={{ background: "var(--gradient-gold)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 rounded-full border border-primary/20 animate-[spin-slow_38s_linear_infinite]"
            aria-hidden="true"
          />
          <img
            src={portrait}
            alt="Portrait of EslaM HeshAM, Lead Technical Architect"
            className="relative z-10 w-full animate-[float-slow_7s_ease-in-out_infinite] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 82%, transparent 99%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 82%, transparent 99%)",
            }}
            loading="eager"
          />
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="absolute -bottom-2 -left-2 z-20 h-24 w-24 rounded-2xl border border-primary/30 object-cover opacity-90 shadow-2xl"
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-primary/70"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
