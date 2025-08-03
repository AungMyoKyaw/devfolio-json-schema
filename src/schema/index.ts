import { z } from "zod";
import { BasicsSchema } from "./basics";
import {
  WorkSchema,
  ProjectSchema,
  AchievementSchema,
  VolunteerSchema
} from "./professional";
import {
  EducationSchema,
  MOOCSchema,
  CertificationSchema,
  AwardSchema
} from "./education";
import { SkillSchema, LanguageSchema, InterestSchema } from "./skills";
import {
  PublicationSchema,
  SpeakingSchema,
  MediaSchema,
  PatentSchema,
  ReferenceSchema
} from "./social";

/**
 * Main DevFolio JSON Schema
 * A comprehensive schema for professional developer portfolios
 */
export const DevFolioSchema = z.object({
  /** Schema version for future compatibility */
  $schema: z
    .string()
    .default(
      "https://raw.githubusercontent.com/AungMyoKyaw/devfolio-json-schema/refs/heads/master/schema.json"
    ),

  /** Basic personal information */
  basics: BasicsSchema.optional(),

  /** Professional work experience */
  work: z.array(WorkSchema).optional(),

  /** Projects (personal, professional, open source) */
  projects: z.array(ProjectSchema).optional(),

  /** Formal education */
  education: z.array(EducationSchema).optional(),

  /** Online courses and MOOCs */
  moocs: z.array(MOOCSchema).optional(),

  /** Professional certifications */
  certifications: z.array(CertificationSchema).optional(),

  /** Awards and recognition */
  awards: z.array(AwardSchema).optional(),

  /** Professional achievements */
  achievements: z.array(AchievementSchema).optional(),

  /** Skills and technologies */
  skills: z.array(SkillSchema).optional(),

  /** Languages spoken */
  languages: z.array(LanguageSchema).optional(),

  /** Interests and hobbies */
  interests: z.array(InterestSchema).optional(),

  /** Volunteer experience */
  volunteer: z.array(VolunteerSchema).optional(),

  /** Publications and writings */
  publications: z.array(PublicationSchema).optional(),

  /** Speaking engagements */
  speaking: z.array(SpeakingSchema).optional(),

  /** Media appearances */
  media: z.array(MediaSchema).optional(),

  /** Patents */
  patents: z.array(PatentSchema).optional(),

  /** References and testimonials */
  references: z.array(ReferenceSchema).optional(),

  /** Custom metadata */
  meta: z
    .object({
      /** When the portfolio was last updated */
      lastModified: z.string().datetime().optional(),
      /** Portfolio version */
      version: z.string().optional(),
      /** Custom theme or styling preferences */
      theme: z.string().optional(),
      /** Portfolio visibility settings */
      visibility: z.enum(["public", "private", "unlisted"]).optional(),
      /** Custom fields for extensibility */
      custom: z.record(z.any()).optional()
    })
    .optional()
});

// Export the inferred type
export type DevFolio = z.infer<typeof DevFolioSchema>;

// Re-export all component types for convenience
export * from "./basics";
export * from "./professional";
export * from "./education";
export * from "./skills";
export * from "./social";

// Export the main schema as default
export default DevFolioSchema;
