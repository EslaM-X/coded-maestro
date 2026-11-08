import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { opportunityInputSchema } from "@/lib/opportunity-schema";
import { analyzeOpportunity } from "@/lib/opportunity-analysis.server";

export const analyzeOpportunityFn = createServerFn({ method: "POST" })
  .inputValidator((input) => opportunityInputSchema.parse(input))
  .handler(async ({ data }) => {
    const validated = opportunityInputSchema.parse(data);
    try {
      return await analyzeOpportunity(validated, getRequest());
    } catch (error) {
      const aborted = error instanceof Error && error.name === "AbortError";
      if (aborted) {
        return {
          ok: false as const,
          message: "Analysis stopped before it finished. You can start a fresh analysis when ready.",
        };
      }
      return {
        ok: false as const,
        message: "The analysis could not be completed. Please try again later.",
      };
    }
  });