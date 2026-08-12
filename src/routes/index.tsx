import { createFileRoute } from "@tanstack/react-router";
import SiteNav from "@/components/SiteNav";
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

const title = "EslaM HeshAM (MR-X) — Lead Technical Architect & Web3 Engineer";
const description =
  "Portfolio of EslaM HeshAM (EslaM-X): Lead Technical Architect, Web3 & protocol engineer, cyber security specialist and business operations executive. Full-stack MERN, AI systems, smart contracts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        <Hero />
        <About />
        <Research />
        <Skills />
        <Horizons />
        <Experience />
        <Spotlight />
        <Impact />
        <Projects />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
