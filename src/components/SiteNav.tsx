import { useEffect, useState } from "react";
import { COPY, NAV, NAV_AR, PROFILE } from "@/lib/profile-data";
import { useLang } from "@/lib/i18n";
import logo from "@/assets/x-crown-logo.jpg";
import { Menu, X, Languages } from "lucide-react";

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

  const label = (n: { id: string; label: string }) =>
    isAr ? (NAV_AR[n.id] ?? n.label) : n.label;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-8 lg:flex lg:justify-between">
        <a href="#top" className="group flex min-w-0 items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-primary/40 transition-transform duration-500 group-hover:rotate-12 sm:h-10 sm:w-10">
            <img
              src={logo}
              alt="EslaM-X crowned X emblem"
              className="h-full w-full scale-110 object-cover"
            />
          </span>
          <span className="keep-latin truncate font-display text-[11px] tracking-[0.42em] text-gilded sm:text-sm">
            ESLAM-X
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
                  active === n.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
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
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary/10"
          >
            <Languages className="h-3.5 w-3.5" />
            <span className="keep-latin">{isAr ? "EN" : "AR"}</span>
          </button>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden rounded-full border border-primary/40 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            {t(COPY.hire.en, COPY.hire.ar)}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border/60 bg-background/95 px-6 py-3 backdrop-blur-xl lg:hidden">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground"
              >
                {label(n)}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-2 block rounded-full border border-primary/40 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            >
              {t(COPY.hire.en, COPY.hire.ar)}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
