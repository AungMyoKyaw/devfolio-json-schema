import { ZodError } from 'zod';
import DevFolioSchema, { type DevFolio } from '../schema';

/**
 * Validation result interface
 */
export interface ValidationResult {
  success: boolean;
  data?: DevFolio;
  errors?: string[];
}

/**
 * Validates a DevFolio object against the schema
 * @param data - The data to validate
 * @returns Validation result with success status and errors if any
 */
export function validateDevFolio(data: unknown): ValidationResult {
  try {
    const validatedData = DevFolioSchema.parse(data);
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.errors.map(
        (err) => `${err.path.join('.')}: ${err.message}`
      );
      return {
        success: false,
        errors,
      };
    }
    return {
      success: false,
      errors: ['Unknown validation error'],
    };
  }
}

/**
 * Safe validation that doesn't throw errors
 * @param data - The data to validate
 * @returns Validation result without throwing
 */
export function safeValidateDevFolio(data: unknown): ValidationResult {
  const result = DevFolioSchema.safeParse(data);
  
  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  } else {
    const errors = result.error.errors.map(
      (err) => `${err.path.join('.')}: ${err.message}`
    );
    return {
      success: false,
      errors,
    };
  }
}

/**
 * Formats validation errors for display
 * @param errors - Array of error messages
 * @returns Formatted error string
 */
export function formatValidationErrors(errors: string[]): string {
  return errors.map((error, index) => `${index + 1}. ${error}`).join('\n');
}

/**
 * Checks if the data is a valid DevFolio object
 * @param data - The data to check
 * @returns True if valid, false otherwise
 */
export function isValidDevFolio(data: unknown): data is DevFolio {
  return DevFolioSchema.safeParse(data).success;
}

/**
 * Creates a minimal valid DevFolio object
 * @param name - Person's name (required)
 * @returns Minimal DevFolio object
 */
export function createMinimalDevFolio(name: string): DevFolio {
  return {
    $schema: 'https://github.com/AungMyoKyaw/devfolio-json-schema/v1.0.0',
    basics: {
      name,
    },
  };
}
