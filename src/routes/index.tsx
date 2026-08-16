import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SafeSection from "@/components/SafeSection";
import Hero from "@/components/Hero";
import { Arsenal, Architecture, Evidence } from "@/components/arsenal";
import {
  About,
  Contact,
  Experience,
  Footer,
  Horizons,
  Impact,
  Projects,
  Spotlight,
  Recognition,
  Research,
  Skills,
} from "@/components/sections";
import { META, OG_IMAGE, SITE, getSsrLang, langFromUrl } from "@/lib/meta";

const LOCALE_SITE_NAME: Record<string, string> = {
  en: "EslaM-X",
  ar: "إسلام هشام — السيد أكس",
};

export const Route = createFileRoute("/")({
  head: () => {
    const query = typeof window !== "undefined" ? window.location.search : "";
    const lang = typeof window !== "undefined" ? langFromUrl(query) : getSsrLang();
    const m = META[lang];
    const title = m.title;
    const description = m.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: m.keywords },
        { property: "og:site_name", content: LOCALE_SITE_NAME[lang] },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: SITE },
        { property: "og:locale", content: m.locale },
        { property: "og:locale:alternate", content: lang === "ar" ? "en_US" : "ar_EG" },
        { property: "og:image", content: OG_IMAGE },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: m.ogAlt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [
        { rel: "canonical", href: SITE },
        { rel: "alternate", hrefLang: "en", href: SITE },
        { rel: "alternate", hrefLang: "ar", href: SITE },
        { rel: "alternate", hrefLang: "x-default", href: SITE },
      ],

      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "EslaM HeshAM",
            alternateName: "EslaM-X",
            jobTitle: lang === "ar" ? "كبير المهندسين التقنيين" : "Lead Technical Architect",
            description,
            address: {
              "@type": "PostalAddress",
              addressLocality: lang === "ar" ? "القاهرة" : "Cairo",
              addressCountry: "EG",
            },
            knowsAbout: [
              "Web3",
              "Blockchain Architecture",
              "Smart Contracts",
              "Cyber Security",
              "AI Agents",
              "Machine-Payable Robotics",
              "Full-Stack Development",
              "Artificial Intelligence",
            ],
            sameAs: [
              "https://github.com/EslaM-X",
              "https://www.linkedin.com/in/eslam-hesham-359964192",
              "https://x.com/EslaM_HeshAM_X",
              "https://instagram.com/eslam_hesham_x_",
            ],
          }),
        },
      ],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteNav />
      <main>
        {[
          Hero,
          About,
          Research,
          Skills,
          Horizons,
          Experience,
          Spotlight,
          Impact,
          Projects,
          Arsenal,
          Evidence,
          Architecture,
          Recognition,
          Contact,
        ].map((Section, i) => (
          <SafeSection key={i}>
            <Section />
          </SafeSection>
        ))}
      </main>
      <Footer />
    </div>
  );
}
