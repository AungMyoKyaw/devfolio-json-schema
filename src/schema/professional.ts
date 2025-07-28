import { z } from "zod";

/**
 * Work experience schema
 */
export const WorkSchema = z.object({
  /** Company/Organization name */
  name: z.string(),

  /** Job position/title */
  position: z.string(),

  /** Company website URL */
  url: z.string().url().optional(),

  /** Start date in ISO 8601 format */
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),

  /** End date in ISO 8601 format (optional for current positions) */
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Job description summary */
  summary: z.string().optional(),

  /** Key achievements and responsibilities */
  highlights: z.array(z.string()).optional(),

  /** Employment type */
  type: z
    .enum([
      "full-time",
      "part-time",
      "contract",
      "freelance",
      "internship",
      "volunteer"
    ])
    .optional(),

  /** Remote work status */
  remote: z.boolean().optional(),

  /** Technologies and tools used */
  technologies: z.array(z.string()).optional(),

  /** Team size (if applicable) */
  teamSize: z.number().min(1).optional(),

  /** Location of work */
  location: z.string().optional()
});

/**
 * Project schema
 */
export const ProjectSchema = z.object({
  /** Project name */
  name: z.string(),

  /** Project description */
  description: z.string().optional(),

  /** Key highlights and achievements */
  highlights: z.array(z.string()).optional(),

  /** Keywords/tags */
  keywords: z.array(z.string()).optional(),

  /** Start date */
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** End date */
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Project URL */
  url: z.string().url().optional(),

  /** Repository URL */
  repository: z.string().url().optional(),

  /** Live demo URL */
  demo: z.string().url().optional(),

  /** Project type */
  type: z
    .enum(["personal", "professional", "open-source", "academic", "freelance"])
    .optional(),

  /** Project status */
  status: z
    .enum(["completed", "in-progress", "on-hold", "cancelled"])
    .optional(),

  /** Technologies used */
  technologies: z.array(z.string()).optional(),

  /** Role in the project */
  role: z.string().optional(),

  /** Team size */
  teamSize: z.number().min(1).optional(),

  /** Associated organization */
  organization: z.string().optional()
});

/**
 * Achievement schema
 */
export const AchievementSchema = z.object({
  /** Achievement title */
  title: z.string(),

  /** Date achieved */
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Issuing organization */
  issuer: z.string().optional(),

  /** Achievement description */
  summary: z.string().optional(),

  /** Category of achievement */
  category: z
    .enum([
      "technical",
      "leadership",
      "innovation",
      "performance",
      "recognition",
      "other"
    ])
    .optional(),

  /** Verification URL */
  url: z.string().url().optional()
});

/**
 * Volunteer experience schema
 */
export const VolunteerSchema = z.object({
  /** Organization name */
  organization: z.string(),

  /** Position/role */
  position: z.string().optional(),

  /** Organization website */
  url: z.string().url().optional(),

  /** Start date */
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** End date */
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Description of volunteer work */
  summary: z.string().optional(),

  /** Key contributions */
  highlights: z.array(z.string()).optional(),

  /** Cause/area of work */
  cause: z.string().optional()
});

export type Work = z.infer<typeof WorkSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Achievement = z.infer<typeof AchievementSchema>;
export type Volunteer = z.infer<typeof VolunteerSchema>;
