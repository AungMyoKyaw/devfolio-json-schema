import { z } from "zod";

/**
 * Formal education schema
 */
export const EducationSchema = z.object({
  /** Institution name */
  institution: z.string(),

  /** Institution website */
  url: z.string().url().optional(),

  /** Area of study */
  area: z.string().optional(),

  /** Study type (degree level) */
  studyType: z.string().optional(),

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

  /** GPA or score */
  score: z.string().optional(),

  /** Relevant courses */
  courses: z.array(z.string()).optional(),

  /** Honors/distinctions */
  honors: z.array(z.string()).optional(),

  /** Activities and societies */
  activities: z.array(z.string()).optional(),

  /** Location */
  location: z.string().optional()
});

/**
 * Individual course within a MOOC bundle
 */
export const CourseItemSchema = z.object({
  /** Course title */
  title: z.string(),

  /** Certificate link */
  certificateLink: z.string().url().optional(),

  /** Completion date */
  completionDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Course description */
  description: z.string().optional(),

  /** Skills learned */
  skills: z.array(z.string()).optional()
});

/**
 * MOOC (Massive Open Online Course) schema
 * Based on the structure from the provided MOOCs data
 */
export const MOOCSchema = z.object({
  /** Course or specialization title */
  courseTitle: z.string(),

  /** Type: Course, Bundle, or Specialization */
  type: z.enum(["Course", "Bundle", "Specialization"]),

  /** Completion status */
  status: z.enum(["Completed", "In Progress", "Not Started"]),

  /** Main certificate link */
  certificateLink: z.string().url().optional(),

  /** Provider/platform (e.g., Coursera, edX, Udacity) */
  provider: z.string().optional(),

  /** Start date */
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Completion date */
  completionDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Individual courses (for bundles/specializations) */
  courses: z.array(CourseItemSchema).optional(),

  /** Skills acquired */
  skills: z.array(z.string()).optional(),

  /** Course duration in hours */
  duration: z.number().min(0).optional(),

  /** Instructor name(s) */
  instructors: z.array(z.string()).optional()
});

/**
 * Professional certification schema
 */
export const CertificationSchema = z.object({
  /** Certification name */
  name: z.string(),

  /** Issuing organization */
  issuer: z.string(),

  /** Issue date */
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Expiration date */
  expirationDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Certificate URL/link */
  url: z.string().url().optional(),

  /** Digital badge URL */
  badgeUrl: z.string().url().optional(),

  /** Certification ID/number */
  certificationId: z.string().optional(),

  /** Description */
  description: z.string().optional(),

  /** Skills validated */
  skills: z.array(z.string()).optional(),

  /** Certification level */
  level: z
    .enum(["foundation", "associate", "professional", "expert", "master"])
    .optional()
});

/**
 * Award schema
 */
export const AwardSchema = z.object({
  /** Award title */
  title: z.string(),

  /** Date received */
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Awarding organization */
  awarder: z.string().optional(),

  /** Award description */
  summary: z.string().optional(),

  /** Award category */
  category: z
    .enum([
      "academic",
      "professional",
      "community",
      "technical",
      "leadership",
      "innovation",
      "other"
    ])
    .optional(),

  /** Award level/scope */
  level: z
    .enum(["international", "national", "regional", "local", "organizational"])
    .optional(),

  /** Award URL/link */
  url: z.string().url().optional()
});

export type Education = z.infer<typeof EducationSchema>;
export type CourseItem = z.infer<typeof CourseItemSchema>;
export type MOOC = z.infer<typeof MOOCSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
export type Award = z.infer<typeof AwardSchema>;
