import { z } from "zod";

/**
 * Skill proficiency levels
 */
export const SkillLevelEnum = z.enum([
  "beginner",
  "novice",
  "intermediate",
  "advanced",
  "expert",
  "master"
]);

/**
 * Skill categories
 */
export const SkillCategoryEnum = z.enum([
  "programming-languages",
  "frameworks",
  "libraries",
  "databases",
  "tools",
  "platforms",
  "methodologies",
  "soft-skills",
  "design",
  "testing",
  "devops",
  "mobile",
  "web",
  "data-science",
  "machine-learning",
  "blockchain",
  "security",
  "cloud",
  "other"
]);

/**
 * Individual skill schema
 */
export const SkillSchema = z.object({
  /** Skill name */
  name: z.string(),

  /** Proficiency level */
  level: SkillLevelEnum.optional(),

  /** Skill category */
  category: SkillCategoryEnum.optional(),

  /** Years of experience */
  yearsOfExperience: z.number().min(0).optional(),

  /** Keywords/related technologies */
  keywords: z.array(z.string()).optional(),

  /** Last used date */
  lastUsed: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Certifications related to this skill */
  certifications: z.array(z.string()).optional(),

  /** Self-assessed rating (1-10) */
  rating: z.number().min(1).max(10).optional()
});

/**
 * Language proficiency levels based on CEFR
 */
export const LanguageFluencyEnum = z.enum([
  "elementary",
  "limited-working",
  "professional-working",
  "full-professional",
  "native-bilingual",
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2" // CEFR levels
]);

/**
 * Language schema
 */
export const LanguageSchema = z.object({
  /** Language name */
  language: z.string(),

  /** Fluency level */
  fluency: LanguageFluencyEnum.optional(),

  /** Speaking proficiency */
  speaking: LanguageFluencyEnum.optional(),

  /** Writing proficiency */
  writing: LanguageFluencyEnum.optional(),

  /** Reading proficiency */
  reading: LanguageFluencyEnum.optional(),

  /** Listening proficiency */
  listening: LanguageFluencyEnum.optional(),

  /** Language certifications */
  certifications: z
    .array(
      z.object({
        /** Certification name (e.g., TOEFL, IELTS, HSK) */
        name: z.string(),
        /** Score achieved */
        score: z.string().optional(),
        /** Date taken */
        date: z
          .string()
          .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
          .optional(),
        /** Certificate URL */
        url: z.string().url().optional()
      })
    )
    .optional(),

  /** Native language indicator */
  native: z.boolean().optional()
});

/**
 * Interest/hobby schema
 */
export const InterestSchema = z.object({
  /** Interest name */
  name: z.string(),

  /** Related keywords */
  keywords: z.array(z.string()).optional(),

  /** Interest category */
  category: z
    .enum([
      "technology",
      "sports",
      "arts",
      "music",
      "travel",
      "reading",
      "gaming",
      "photography",
      "cooking",
      "fitness",
      "volunteering",
      "education",
      "science",
      "business",
      "other"
    ])
    .optional(),

  /** Level of involvement */
  level: z.enum(["casual", "hobby", "passionate", "professional"]).optional(),

  /** Description */
  description: z.string().optional()
});

export type Skill = z.infer<typeof SkillSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type Interest = z.infer<typeof InterestSchema>;
export type SkillLevel = z.infer<typeof SkillLevelEnum>;
export type SkillCategory = z.infer<typeof SkillCategoryEnum>;
export type LanguageFluency = z.infer<typeof LanguageFluencyEnum>;
