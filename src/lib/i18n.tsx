import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { META, type SiteLang } from "./meta";

export type Lang = SiteLang;

type Ctx = {
  lang: Lang;
  isAr: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** pick a value by active language */
  t: <A, B>(en: A, ar: B) => A | B;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "eslamx-lang";
const COOKIE_KEY = "eslamx-lang";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Persist the language choice so share-card crawlers and reloads keep it. */
function persistLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  try {
    document.cookie = `${COOKIE_KEY}=${lang};path=/;max-age=31536000;samesite=lax`;
  } catch {
    /* ignore */
  }
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== lang) {
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  } catch {
    /* ignore */
  }
}

/** Resolve the initial language: URL param wins, then saved choice, then browser locale. */
function resolveInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const q = new URLSearchParams(window.location.search).get("lang");
  if (q === "ar" || q === "en") return q;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "ar" || stored === "en") return stored;
  if (navigator.language?.toLowerCase().startsWith("ar")) return "ar";
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(resolveInitialLang());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.dataset["lang"] = lang;

    const m = META[lang];
    document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("name", "keywords", m.keywords);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    setMeta("property", "og:locale", m.locale);
    setMeta("property", "og:image:alt", m.ogAlt);
    setMeta("name", "twitter:title", m.title);
    setMeta("name", "twitter:description", m.description);
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    persistLang(l);
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      isAr: lang === "ar",
      setLang,
      toggle: () => setLang(lang === "ar" ? "en" : "ar"),
      t: (en, ar) => (lang === "ar" ? ar : en),
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (ctx) return ctx;
  // Safe fallback (e.g. isolated rendering) — English, no persistence.
  return {
    lang: "en",
    isAr: false,
    setLang: () => {},
    toggle: () => {},
    t: (en) => en,
  };
}

/** Opens external links reliably, even inside embedded preview frames. */
export function openExternal(href: string) {
  if (typeof window === "undefined") return;
  try {
    const a = document.createElement("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    return;
  } catch {
    /* fall through */
  }
  const w = window.open(href, "_blank", "noopener,noreferrer");
  if (!w) {
    try {
      (window.top ?? window).location.href = href;
    } catch {
      window.location.href = href;
    }
  }
}

