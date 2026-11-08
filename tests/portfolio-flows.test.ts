import { describe, expect, test } from "bun:test";
import { buildContactEmailDraft } from "../src/lib/contact-draft";
import { opportunityInputSchema } from "../src/lib/opportunity-schema";
import { PROJECTS } from "../src/lib/profile-data";
import { projectSlug } from "../src/lib/project-case-studies";

describe("opportunity brief input", () => {
  test("accepts a bounded, supported description", () => {
    const parsed = opportunityInputSchema.safeParse({
      description: "A role to design secure smart contract systems and AI workflows for our team.",
      collaborationType: "employment",
      lang: "en",
    });
    expect(parsed.success).toBe(true);
  });

  test("rejects descriptions longer than 8,000 characters", () => {
    const parsed = opportunityInputSchema.safeParse({
      description: "a".repeat(8001),
      collaborationType: "project",
      lang: "en",
    });
    expect(parsed.success).toBe(false);
  });
});

describe("contact email draft", () => {
  test("encodes Arabic collaboration details before building a mailto link", () => {
    const draft = buildContactEmailDraft(
      { collaboration: "project", budget: "5000-15000", timing: "one-to-three-months" },
      "eslam.kora60@gmail.com",
      "ar",
    );
    expect(draft.startsWith("mailto:eslam.kora60@gmail.com?subject=")).toBe(true);
    expect(draft).toContain("%D9%85%D8%B4%D8%B1%D9%88%D8%B9");
    expect(draft).toContain("%0A");
  });
});

describe("project detail links", () => {
  test("every existing project has a unique stable detail slug", () => {
    const slugs = PROJECTS.map((project) => projectSlug(project.name));
    expect(new Set(slugs).size).toBe(PROJECTS.length);
  });
});