import { z } from 'zod';

/**
 * Basic personal information schema
 */
export const BasicsSchema = z.object({
  /** Full name of the person */
  name: z.string().min(1, 'Name is required'),
  
  /** Professional label/title */
  label: z.string().optional(),
  
  /** Profile image URL */
  image: z.string().url().optional(),
  
  /** Email address */
  email: z.string().email().optional(),
  
  /** Phone number */
  phone: z.string().optional(),
  
  /** Personal website or portfolio URL */
  url: z.string().url().optional(),
  
  /** Professional summary */
  summary: z.string().optional(),
  
  /** Location information */
  location: z.object({
    address: z.string().optional(),
    postalCode: z.string().optional(),
    city: z.string().optional(),
    countryCode: z.string().length(2).optional(),
    region: z.string().optional(),
  }).optional(),
  
  /** Social media profiles */
  profiles: z.array(z.object({
    /** Platform name (e.g., GitHub, LinkedIn, Twitter) */
    network: z.string(),
    /** Username on the platform */
    username: z.string().optional(),
    /** Full profile URL */
    url: z.string().url(),
    /** Additional platform-specific identifier */
    id: z.string().optional(),
  })).optional(),
});

export type Basics = z.infer<typeof BasicsSchema>;
