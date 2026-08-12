import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

type Ctx = {
  lang: Lang;
  isAr: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** pick a value by active language */
  t: <T>(en: T, ar: T) => T;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "eslamx-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") setLangState(stored);
    else if (navigator.language?.toLowerCase().startsWith("ar")) setLangState("ar");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.dataset["lang"] = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
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
  const w = window.open(href, "_blank", "noopener,noreferrer");
  if (!w) window.location.href = href;
}
