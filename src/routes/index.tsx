import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
import SafeSection from "@/components/SafeSection";
import Hero from "@/components/Hero";
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

const SITE = "https://project--959d682e-3677-4575-9a84-f86b30c36ef5.lovable.app";
const OG_IMAGE = `${SITE}/og-image.jpg`;
const title = "EslaM HeshAM (MR-X) — Lead Technical Architect & Web3 Engineer";
const description =
  "Portfolio of EslaM HeshAM (EslaM-X): Lead Technical Architect, Web3 & protocol engineer, cyber security specialist and Business Operations Manager. Full-stack MERN, AI systems, smart contracts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_EG" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "EslaM HeshAM — MR-X, Lead Technical Architect" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "keywords",
        content:
          "EslaM HeshAM, MR-X, EslaM-X, Web3 architect, blockchain researcher, smart contracts, cyber security, digital forensics, AI agents, Pi Network, إسلام هشام",
      },
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
          jobTitle: "Lead Technical Architect",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cairo",
            addressCountry: "EG",
          },
          knowsAbout: [
            "Web3",
            "Blockchain Architecture",
            "Smart Contracts",
            "Cyber Security",
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
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <SiteNav />
      <main>
        {[Hero, About, Research, Skills, Horizons, Experience, Spotlight, Impact, Projects, Recognition, Contact].map(
          (Section, i) => (
            <SafeSection key={i}>
              <Section />
            </SafeSection>
          ),
        )}
      </main>
      <Footer />
    </div>
  );
}
