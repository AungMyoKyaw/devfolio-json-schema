import { z } from "zod";

/**
 * Publication schema
 */
export const PublicationSchema = z.object({
  /** Publication name/title */
  name: z.string(),

  /** Publisher */
  publisher: z.string().optional(),

  /** Release/publication date */
  releaseDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Publication URL */
  url: z.string().url().optional(),

  /** DOI (Digital Object Identifier) */
  doi: z.string().optional(),

  /** Publication summary/abstract */
  summary: z.string().optional(),

  /** Publication type */
  type: z
    .enum([
      "journal-article",
      "conference-paper",
      "book",
      "book-chapter",
      "thesis",
      "patent",
      "blog-post",
      "white-paper",
      "case-study",
      "technical-report",
      "other"
    ])
    .optional(),

  /** Co-authors */
  authors: z.array(z.string()).optional(),

  /** Keywords/tags */
  keywords: z.array(z.string()).optional(),

  /** Citation count */
  citations: z.number().min(0).optional(),

  /** Journal/conference name */
  venue: z.string().optional(),

  /** Volume/issue information */
  volume: z.string().optional(),

  /** Page numbers */
  pages: z.string().optional()
});

/**
 * Speaking engagement schema
 */
export const SpeakingSchema = z.object({
  /** Event/talk title */
  title: z.string(),

  /** Event name */
  event: z.string().optional(),

  /** Event organizer */
  organizer: z.string().optional(),

  /** Date of speaking engagement */
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Event location */
  location: z.string().optional(),

  /** Event URL */
  url: z.string().url().optional(),

  /** Presentation/video URL */
  presentationUrl: z.string().url().optional(),

  /** Slides URL */
  slidesUrl: z.string().url().optional(),

  /** Video recording URL */
  videoUrl: z.string().url().optional(),

  /** Talk description */
  description: z.string().optional(),

  /** Audience size */
  audienceSize: z.number().min(0).optional(),

  /** Speaking type */
  type: z
    .enum([
      "keynote",
      "conference-talk",
      "workshop",
      "panel",
      "webinar",
      "podcast",
      "interview",
      "meetup",
      "internal-presentation",
      "other"
    ])
    .optional(),

  /** Topics covered */
  topics: z.array(z.string()).optional()
});

/**
 * Media appearance schema
 */
export const MediaSchema = z.object({
  /** Media title/headline */
  title: z.string(),

  /** Media outlet/publication */
  outlet: z.string().optional(),

  /** Publication date */
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Article/media URL */
  url: z.string().url().optional(),

  /** Description/summary */
  description: z.string().optional(),

  /** Media type */
  type: z
    .enum([
      "interview",
      "article",
      "podcast",
      "video",
      "tv-appearance",
      "radio",
      "quote",
      "feature",
      "profile",
      "other"
    ])
    .optional(),

  /** Topics discussed */
  topics: z.array(z.string()).optional()
});

/**
 * Patent schema
 */
export const PatentSchema = z.object({
  /** Patent title */
  title: z.string(),

  /** Patent number */
  patentNumber: z.string().optional(),

  /** Filing date */
  filingDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Grant date */
  grantDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Patent office */
  office: z.string().optional(),

  /** Patent URL */
  url: z.string().url().optional(),

  /** Patent summary */
  summary: z.string().optional(),

  /** Co-inventors */
  inventors: z.array(z.string()).optional(),

  /** Patent status */
  status: z.enum(["pending", "granted", "expired", "abandoned"]).optional(),

  /** Application number */
  applicationNumber: z.string().optional()
});

/**
 * Reference/testimonial schema
 */
export const ReferenceSchema = z.object({
  /** Reference name */
  name: z.string(),

  /** Reference text/testimonial */
  reference: z.string().optional(),

  /** Reference position/title */
  position: z.string().optional(),

  /** Reference company */
  company: z.string().optional(),

  /** Relationship to the person */
  relationship: z
    .enum([
      "manager",
      "colleague",
      "direct-report",
      "client",
      "mentor",
      "professor",
      "peer",
      "other"
    ])
    .optional(),

  /** Contact information */
  contact: z
    .object({
      email: z.string().email().optional(),
      phone: z.string().optional(),
      linkedin: z.string().url().optional()
    })
    .optional(),

  /** Reference date */
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),

  /** Reference URL (e.g., LinkedIn recommendation) */
  url: z.string().url().optional()
});

export type Publication = z.infer<typeof PublicationSchema>;
export type Speaking = z.infer<typeof SpeakingSchema>;
export type Media = z.infer<typeof MediaSchema>;
export type Patent = z.infer<typeof PatentSchema>;
export type Reference = z.infer<typeof ReferenceSchema>;
