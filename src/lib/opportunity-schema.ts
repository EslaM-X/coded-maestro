import { z } from "zod";

export const opportunityInputSchema = z.object({
  description: z
    .string()
    .trim()
    .min(40, "Please add at least 40 characters.")
    .max(8000, "Please keep the description under 8,000 characters."),
  collaborationType: z.enum(["employment", "project", "partnership"]),
  lang: z.enum(["en", "ar"]),
});

export type OpportunityInput = z.infer<typeof opportunityInputSchema>;

export type OpportunityResult =
  | { ok: true; summary: string }
  | { ok: false; message: string };