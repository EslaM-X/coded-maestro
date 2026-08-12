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
  t: <A, B>(en: A, ar: B) => A | B;
};

const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "eslamx-lang";

const META: Record<Lang, { title: string; description: string; locale: string }> = {
  en: {
    title: "EslaM HeshAM (MR-X) — Lead Technical Architect & Web3 Engineer",
    description:
      "Portfolio of EslaM HeshAM (EslaM-X): Lead Technical Architect, Web3 & protocol engineer, cyber security researcher and Business Operations Manager.",
    locale: "en_US",
  },
  ar: {
    title: "إسلام هشام — السيد أكس | كبير المهندسين التقنيين ومهندس الويب 3",
    description:
      "الملف الاحترافي لإسلام هشام (السيد أكس): كبير المهندسين التقنيين، مهندس بروتوكولات الويب 3، باحث في الأمن السيبراني والأدلة الجنائية الرقمية، ومدير العمليات.",
    locale: "ar_EG",
  },
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

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

    const m = META[lang];
    document.title = m.title;
    setMeta("name", "description", m.description);
    setMeta("property", "og:title", m.title);
    setMeta("property", "og:description", m.description);
    setMeta("property", "og:locale", m.locale);
    setMeta("name", "twitter:title", m.title);
    setMeta("name", "twitter:description", m.description);
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
