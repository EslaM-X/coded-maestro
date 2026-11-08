import { z } from "zod";

export const contactBriefSchema = z.object({
  collaboration: z.enum(["employment", "project", "advisory", "partnership"]),
  budget: z.enum(["under-1000", "1000-5000", "5000-15000", "15000-plus", "discuss"]),
  timing: z.enum(["asap", "within-month", "one-to-three-months", "flexible"]),
});

export type ContactBrief = z.infer<typeof contactBriefSchema>;

const labels = {
  en: {
    subject: "Collaboration inquiry · EslaM-X",
    collaboration: {
      employment: "Full-time / contract role",
      project: "Project engagement",
      advisory: "Technical advisory",
      partnership: "Strategic partnership",
    },
    budget: {
      "under-1000": "Under $1,000",
      "1000-5000": "$1,000–$5,000",
      "5000-15000": "$5,000–$15,000",
      "15000-plus": "$15,000+",
      discuss: "Prefer to discuss",
    },
    timing: {
      asap: "As soon as possible",
      "within-month": "Within one month",
      "one-to-three-months": "Within 1–3 months",
      flexible: "Flexible",
    },
    greeting: "Hello EslaM,",
    introduction: "I would like to discuss a potential collaboration.",
    next: "Please let me know a suitable time to connect.",
  },
  ar: {
    subject: "استفسار تعاون · إسلام هشام",
    collaboration: {
      employment: "وظيفة بدوام كامل أو تعاقد",
      project: "تنفيذ مشروع",
      advisory: "استشارات تقنية",
      partnership: "شراكة استراتيجية",
    },
    budget: {
      "under-1000": "أقل من 1,000 دولار",
      "1000-5000": "من 1,000 إلى 5,000 دولار",
      "5000-15000": "من 5,000 إلى 15,000 دولار",
      "15000-plus": "أكثر من 15,000 دولار",
      discuss: "أفضل مناقشة الميزانية",
    },
    timing: {
      asap: "في أقرب وقت",
      "within-month": "خلال شهر",
      "one-to-three-months": "خلال شهر إلى 3 أشهر",
      flexible: "موعد مرن",
    },
    greeting: "مرحبًا إسلام،",
    introduction: "أرغب في مناقشة فرصة تعاون محتملة.",
    next: "يسعدني معرفة الوقت المناسب للتواصل.",
  },
} as const;

export function buildContactEmailDraft(
  value: ContactBrief,
  recipient: string,
  lang: "en" | "ar",
) {
  const brief = contactBriefSchema.parse(value);
  const copy = labels[lang];
  const body = [
    copy.greeting,
    "",
    copy.introduction,
    "",
    `${lang === "ar" ? "نوع التعاون" : "Collaboration type"}: ${copy.collaboration[brief.collaboration]}`,
    `${lang === "ar" ? "الميزانية" : "Budget"}: ${copy.budget[brief.budget]}`,
    `${lang === "ar" ? "الموعد المستهدف" : "Target timing"}: ${copy.timing[brief.timing]}`,
    "",
    copy.next,
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
}