import { DevFolioSchema } from '../schema';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { writeFileSync } from 'fs';
import path from 'path';

const jsonSchema = zodToJsonSchema(DevFolioSchema, 'DevFolio');
const outputPath = path.resolve(__dirname, '../../schema.json');
writeFileSync(outputPath, JSON.stringify(jsonSchema, null, 2));
console.log('JSON Schema generated at', outputPath);
