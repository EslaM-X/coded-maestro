import { useEffect, useState } from "react";
import { COPY, NAV, NAV_AR, PROFILE } from "@/lib/profile-data";
import { useLang } from "@/lib/i18n";
import logo from "@/assets/x-crown-logo.jpg";
import { Mail } from "lucide-react";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { isAr, toggle, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  /* Lock body scroll while the overlay menu is open + close on Escape. */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const label = (n: { id: string; label: string }) => (isAr ? (NAV_AR[n.id] ?? n.label) : n.label);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-8 lg:flex lg:justify-between">
        <a href="#top" className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/40 transition-transform duration-500 group-hover:rotate-12 sm:h-10 sm:w-10">
            <img
              src={logo}
              alt="EslaM-X crowned X emblem"
              className="h-full w-full scale-110 object-cover"
            />
          </span>
          <span className="keep-latin shrink-0 whitespace-nowrap font-display text-[11px] tracking-[0.42em] text-gilded sm:text-sm">
            ESLAM-X
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                  active === n.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label(n)}
                {active === n.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary/70" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          {/* Language toggle — sliding gold indicator pill */}
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="relative flex h-9 items-center rounded-full border border-primary/40 bg-secondary/40 p-1 transition-all hover:border-primary/70"
          >
            <span
              aria-hidden="true"
              className="absolute top-1 h-7 w-9 rounded-full transition-all duration-300 ease-out"
              style={{
                backgroundImage: "var(--gradient-gold)",
                boxShadow: "var(--shadow-gold)",
                left: isAr ? "calc(100% - 2.5rem)" : "0.25rem",
              }}
            />
            <span
              className={`keep-latin relative z-10 w-9 text-center text-[11px] font-bold tracking-widest transition-colors duration-300 ${
                isAr ? "text-primary" : "text-primary-foreground"
              }`}
            >
              EN
            </span>
            <span
              className={`keep-latin relative z-10 w-9 text-center text-[11px] font-bold tracking-widest transition-colors duration-300 ${
                isAr ? "text-primary-foreground" : "text-primary"
              }`}
            >
              AR
            </span>
          </button>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-primary/40 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors duration-500 hover:text-primary-foreground sm:inline-flex"
          >
            <span className="relative z-10">{t(COPY.hire.en, COPY.hire.ar)}</span>
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
              style={{ backgroundImage: "var(--gradient-gold)" }}
            />
            <Mail className="relative z-10 h-3.5 w-3.5 transition-colors group-hover:text-primary-foreground" />
          </a>

          {/* Animated hamburger — morphs into a gold X */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-border transition-colors hover:border-primary/60 lg:hidden"
          >
            <span
              className="block h-[1.5px] w-4 rounded-full transition-all duration-300 ease-out"
              style={{
                background: "var(--gradient-gold)",
                transform: open ? "translateY(3.25px) rotate(45deg)" : "none",
                width: open ? "1rem" : "1rem",
              }}
            />
            <span
              className="block h-[1.5px] w-4 rounded-full transition-all duration-300 ease-out"
              style={{
                background: "var(--gradient-gold)",
                transform: open ? "translateY(-3.25px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen sovereign overlay menu (mobile) */}
      <div
        className={`fixed inset-0 top-[64px] z-40 flex flex-col overflow-y-auto border-t border-border/60 bg-background/97 px-6 pb-10 pt-6 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="gold-rule mb-6" aria-hidden="true" />
        <ul className="flex flex-col gap-1">
          {NAV.map((n, i) => (
            <li
              key={n.id}
              className="transition-all duration-500"
              style={{
                transitionDelay: `${60 + i * 45}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(14px)",
              }}
            >
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 py-3"
              >
                <span className="keep-mono font-mono text-[10px] tracking-[0.3em] text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-lg font-medium uppercase transition-colors duration-300 ${
                    active === n.id
                      ? "text-gilded"
                      : "text-foreground group-hover:text-gilded"
                  }`}
                >
                  {label(n)}
                </span>
                <span
                  aria-hidden="true"
                  className="ms-auto h-px flex-1 bg-border opacity-40 transition-opacity group-hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(to left, transparent, var(--color-border), transparent)",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="gold-rule my-7" aria-hidden="true" />
        <a
          href={`mailto:${PROFILE.email}`}
          onClick={() => setOpen(false)}
          className="relative overflow-hidden rounded-full py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          style={{ backgroundImage: "var(--gradient-gold)", backgroundSize: "200% auto" }}
        >
          {t(COPY.hire.en, COPY.hire.ar)}
        </a>
        <a
          href="https://github.com/EslaM-X"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => setOpen(false)}
          className="mt-3 rounded-full border border-primary/40 py-4 text-center text-xs font-semibold uppercase tracking-[0.26em] text-primary transition-colors hover:bg-primary/10"
        >
          {t(COPY.ctaGithub.en, COPY.ctaGithub.ar)}
        </a>
      </div>
    </header>
  );
}
