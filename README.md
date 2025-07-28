# DevFolio JSON Schema

A comprehensive TypeScript-first JSON schema for professional developer portfolios with Zod validation. This schema provides a standardized way to represent all aspects of a developer's professional profile, from basic information to complex project details and certifications.

## 🚀 Features

- **TypeScript-First**: Built with Zod for full type safety and inference
- **Comprehensive**: Covers all aspects of a professional developer portfolio
- **Extensible**: Easy to customize and extend with additional fields
- **Validation**: Built-in validation with detailed error reporting
- **Compatible**: Based on JSON Resume standard with significant enhancements
- **Modern**: Includes MOOCs, certifications, social profiles, and more

## 📦 Installation

```bash
npm install devfolio-json-schema
# or
yarn add devfolio-json-schema
# or
pnpm add devfolio-json-schema
```

## 🔧 Usage

### Basic Usage

```typescript
import {
  DevFolioSchema,
  DevFolio,
  validateDevFolio
} from "devfolio-json-schema";

// Your portfolio data
const portfolioData = {
  basics: {
    name: "John Doe",
    label: "Full-Stack Developer",
    email: "john@example.com"
    // ... more fields
  }
  // ... other sections
};

// Validate the data
const result = validateDevFolio(portfolioData);

if (result.success) {
  console.log("✅ Valid portfolio data!");
  // Use the validated data with full TypeScript support
  const portfolio: DevFolio = result.data;
} else {
  console.log("❌ Validation errors:", result.errors);
}
```

### Safe Validation (No Exceptions)

```typescript
import { safeValidateDevFolio } from "devfolio-json-schema";

const result = safeValidateDevFolio(portfolioData);
// Always returns { success: boolean, data?: DevFolio, errors?: string[] }
```

### Type Checking

```typescript
import { isValidDevFolio, DevFolio } from "devfolio-json-schema";

if (isValidDevFolio(data)) {
  // TypeScript now knows 'data' is of type DevFolio
  console.log(data.basics?.name);
}
```

### Creating a Minimal Portfolio

```typescript
import { createMinimalDevFolio } from "devfolio-json-schema";

const minimal = createMinimalDevFolio("Jane Doe");
// Returns a valid minimal DevFolio object
```

## 📋 Schema Sections

The DevFolio schema includes the following sections:

### Core Sections

- **basics**: Personal information, contact details, location, social profiles
- **work**: Professional work experience with detailed descriptions
- **projects**: Personal, professional, and open-source projects
- **education**: Formal education background
- **skills**: Technical and soft skills with proficiency levels

### Enhanced Sections

- **moocs**: Online courses and specializations (Coursera, edX, etc.)
- **certifications**: Professional certifications with expiry dates
- **awards**: Recognition and awards received
- **achievements**: Professional achievements and milestones
- **languages**: Spoken languages with proficiency levels
- **interests**: Personal interests and hobbies

### Advanced Sections

- **volunteer**: Volunteer experience and community involvement
- **publications**: Articles, papers, and technical writings
- **speaking**: Conference talks and presentations
- **media**: Media appearances and interviews
- **patents**: Patent applications and grants
- **references**: Professional references and testimonials

### Metadata

- **meta**: Portfolio metadata, versioning, and custom fields

## 🎯 Key Features

### 1. MOOC Integration

Based on real-world MOOC data structure, supporting:

- Course bundles and specializations
- Individual course certificates
- Progress tracking (Completed, In Progress)
- Multiple providers (Coursera, edX, Udacity, etc.)

```typescript
{
  "moocs": [
    {
      "courseTitle": "AWS Cloud Solutions Architect Specialization",
      "type": "Specialization",
      "status": "Completed",
      "certificateLink": "https://coursera.org/verify/...",
      "provider": "Coursera",
      "courses": [
        {
          "title": "AWS Cloud Technical Essentials",
          "certificateLink": "https://coursera.org/verify/...",
          "skills": ["AWS EC2", "AWS S3", "AWS IAM"]
        }
      ]
    }
  ]
}
```

### 2. Advanced Skills Management

- Categorized skills (programming languages, frameworks, tools, etc.)
- Proficiency levels (beginner to master)
- Years of experience tracking
- Last used dates
- Related certifications

```typescript
{
  "skills": [
    {
      "name": "TypeScript",
      "level": "expert",
      "category": "programming-languages",
      "yearsOfExperience": 5,
      "rating": 9,
      "lastUsed": "2024-07-28"
    }
  ]
}
```

### 3. Comprehensive Project Details

- Project types (personal, professional, open-source)
- Status tracking
- Technology stacks
- Team information
- Multiple URL types (demo, repository, documentation)

### 4. Professional Certifications

- Expiry date tracking
- Digital badge URLs
- Skill associations
- Certification levels

## 📖 Examples

### Complete Example

See `devfolio-sample.json` for a comprehensive example showcasing all schema features.

### Minimal Example

```json
{
  "$schema": "https://github.com/AungMyoKyaw/devfolio-json-schema/v1.0.0",
  "basics": {
    "name": "John Doe"
  }
}
```

## 🔍 Validation Features

### Built-in Validations

- Email format validation
- URL format validation
- Date format validation (YYYY-MM-DD)
- Enum value validation
- Required field validation
- String length limits

### Custom Validation Rules

- Certificate expiry date logic
- Skill level progression
- Date range validation
- URL accessibility checks

## 🛠 Development

### Building the Project

```bash
npm run build
```

### Running Tests

```bash
npm test
```

### Validating Sample Data

```bash
npm run validate
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run tests: `npm test`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- [JSON Resume](https://jsonresume.org/) - The original JSON-based resume standard
- [Zod](https://zod.dev/) - TypeScript-first schema validation library

## 🌟 Acknowledgments

- Inspired by JSON Resume for the foundational structure
- Built with Zod for robust TypeScript integration
- MOOC structure based on real-world data from professional developers

## 📈 Roadmap

- [ ] JSON Schema export for non-TypeScript projects
- [ ] Resume builder integration examples
- [ ] Portfolio website templates
- [ ] API integrations for popular platforms
- [ ] Migration tools from other resume formats
- [ ] Advanced analytics and insights

---

**Made with ❤️ by [Aung Myo Kyaw](https://github.com/AungMyoKyaw)**
