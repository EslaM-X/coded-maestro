/** Single source of truth for the live domain, share-card meta and SSR lang detection. */
export type SiteLang = "en" | "ar";

export const SITE = "https://eslamx.vercel.app";

/** Separate share image per language — rendered at 1200x630, optimized for WhatsApp/X/LinkedIn previews. */
export const OG_IMAGE_EN = `${SITE}/og-image.jpg`;
export const OG_IMAGE_AR = `${SITE}/og-image-ar.jpg`;

export const META: Record<
  SiteLang,
  {
    title: string;
    description: string;
    locale: string;
    ogAlt: string;
    keywords: string;
    ogImage: string;
  }
> = {
  en: {
    title: "EslaM HeshAM (MR-X) — Architect of Web3, AI & the Machine Economy",
    description:
      "I design the systems other companies call impossible: governed AI agent ecosystems, machine-payable robotics and Web3 protocols — where agents plan, humans approve, and every action is audited. Founder-endorsed protocol standards. 22 offline tests. Evidence, not estimates.",
    locale: "en_US",
    ogAlt: "EslaM HeshAM (MR-X) — Architect of Web3, AI & the Machine Economy",
    keywords:
      "EslaM HeshAM, MR-X, EslaM-X, Web3 architect, blockchain, smart contracts, AI agents, machine economy, machine-payable robotics, RoboPay, governed orchestration, cyber security, Pi Network, Stellar",
    ogImage: OG_IMAGE_EN,
  },
  ar: {
    title: "إسلام هشام (السيد أكس) — مهندس الويب 3 والذكاء الاصطناعي واقتصاد الآلات",
    description:
      "أُصمّم المنظومات التي تسمّيها الشركات مستحيلة: منظومات وكلاء ذكاء اصطناعي محكومة، وروبوتات تدفع وتُدفع آليًا، وبروتوكولات ويب 3 — حيث يخطط الوكلاء، ويوافق البشر، ويُدوَّن كل إجراء. معايير بروتوكولات بمصادقة المؤسس. 22 اختبارًا أوفلاين. أدلة، لا تخمينات.",
    locale: "ar_EG",
    ogAlt: "إسلام هشام (السيد أكس) — مهندس الويب 3 واقتصاد الآلات",
    keywords:
      "إسلام هشام, السيد أكس, EslaM-X, مهندس ويب 3, بلوك تشين, عقود ذكية, وكلاء الذكاء الاصطناعي, اقتصاد الآلات, مدفوعات الروبوتات, RoboPay, أمن سيبراني, Pi Network, Stellar",
    ogImage: OG_IMAGE_AR,
  },
};

/** Extract the desired share language from a ?lang= query (ar/en), defaulting to English. */
export function langFromUrl(url?: string): SiteLang {
  const m = url?.match(/[?&]lang=(ar|en)(?:&|$)/);
  return m?.[1] === "ar" ? "ar" : "en";
}

/** Read the lang chosen by the SSR request (set in server.ts from the request URL). */
export function getSsrLang(): SiteLang {
  const g = globalThis as unknown as { __ESLAMX_LANG__?: string };
  return g.__ESLAMX_LANG__ === "ar" ? "ar" : "en";
}

/** Stash the request lang for head()/shell rendering during SSR. */
export function setSsrLang(url: string) {
  (globalThis as unknown as { __ESLAMX_LANG__?: string }).__ESLAMX_LANG__ = langFromUrl(url);
}
