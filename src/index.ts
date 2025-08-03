/**
 * DevFolio JSON Schema
 * A comprehensive TypeScript-first schema for professional developer portfolios
 *
 * @version 1.0.0
 * @author Aung Myo Kyaw
 * @license MIT
 */

export { default as DevFolioSchema, DevFolio } from "./schema";
export * from "./schema";
export * from "./utils/validators";

// Version constant
export const VERSION = "1.0.0";

// Schema URL
export const SCHEMA_URL =
  "https://raw.githubusercontent.com/AungMyoKyaw/devfolio-json-schema/refs/heads/master/schema.json";
