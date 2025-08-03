# DevFolio JSON Schema Specification

> **Version:** 1.0.0
> **Date:** August 3, 2025
> **Author:** Aung Myo Kyaw

This document provides a comprehensive specification for the DevFolio JSON schema, a standard for creating professional developer portfolios. It is designed to be extensible, TypeScript-first, and easy to use.

## 🚀 Overview

The DevFolio schema is a comprehensive, TypeScript-first JSON schema for professional developer portfolios with Zod validation. This schema provides a standardized way to represent all aspects of a developer's professional profile, from basic information to complex project details and certifications.

### Key Features

- **TypeScript-First**: Built with Zod for full type safety and inference
- **Comprehensive**: Covers all aspects of a professional developer portfolio
- **Extensible**: Easy to customize and extend with additional fields
- **Validation**: Built-in validation with detailed error reporting
- **Modern**: Includes sections for MOOCs, certifications, social profiles, and more

## 📋 Schema Reference

The DevFolio JSON document is a single JSON object with the following top-level properties.

### `$schema`

The canonical URL for the DevFolio JSON Schema.

- **Type**: `string` (URL)
- **Required**: No (auto-generated if not provided)
- **Default**: `"https://github.com/AungMyoKyaw/devfolio-json-schema/v1.0.0"`
- **Example**: `"https://github.com/AungMyoKyaw/devfolio-json-schema/v1.0.0"`

### `basics`

Basic personal information for the developer.

**Type**: `object` (optional)

| Field      | Type             | Required | Description                                       |
| ---------- | ---------------- | -------- | ------------------------------------------------- |
| `name`     | `string`         | ✅       | Full name of the person. Minimum 1 character.     |
| `label`    | `string`         | ❌       | Professional title (e.g., "Full-Stack Developer") |
| `image`    | `string` (URL)   | ❌       | URL to a profile image                            |
| `email`    | `string` (email) | ❌       | Email address (validated format)                  |
| `phone`    | `string`         | ❌       | Phone number                                      |
| `url`      | `string` (URL)   | ❌       | URL to a personal website or portfolio            |
| `summary`  | `string`         | ❌       | A brief professional summary                      |
| `location` | `object`         | ❌       | Location information                              |
| `profiles` | `array`          | ❌       | An array of social media profiles                 |

#### Location Object

| Field         | Type     | Required | Description                                    |
| ------------- | -------- | -------- | ---------------------------------------------- |
| `address`     | `string` | ❌       | Street address                                 |
| `postalCode`  | `string` | ❌       | Postal code                                    |
| `city`        | `string` | ❌       | City name                                      |
| `countryCode` | `string` | ❌       | ISO 3166-1 alpha-2 country code (2 characters) |
| `region`      | `string` | ❌       | State or region                                |

#### Profiles Array Item

| Field      | Type           | Required | Description                                             |
| ---------- | -------------- | -------- | ------------------------------------------------------- |
| `network`  | `string`       | ✅       | Name of the social network (e.g., "GitHub", "LinkedIn") |
| `username` | `string`       | ❌       | Username on the network                                 |
| `url`      | `string` (URL) | ✅       | URL to the profile                                      |
| `id`       | `string`       | ❌       | Platform-specific identifier                            |

### `work`

An array of professional work experiences.

**Type**: `array` of `object` (optional)

| Field          | Type                  | Required | Description                                                                                |
| -------------- | --------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `name`         | `string`              | ✅       | Company or organization name                                                               |
| `position`     | `string`              | ✅       | Job title                                                                                  |
| `url`          | `string` (URL)        | ❌       | URL to the company website                                                                 |
| `startDate`    | `string` (YYYY-MM-DD) | ✅       | Start date in YYYY-MM-DD format                                                            |
| `endDate`      | `string` (YYYY-MM-DD) | ❌       | End date in YYYY-MM-DD format. Leave blank for current positions                           |
| `summary`      | `string`              | ❌       | A summary of the role                                                                      |
| `highlights`   | `array` of `string`   | ❌       | Key achievements and responsibilities                                                      |
| `type`         | `enum`                | ❌       | Employment type: `"full-time"`, `"part-time"`, `"contract"`, `"freelance"`, `"internship"` |
| `remote`       | `boolean`             | ❌       | Indicates if the work was remote                                                           |
| `technologies` | `array` of `string`   | ❌       | Technologies used                                                                          |
| `teamSize`     | `number`              | ❌       | The size of the team                                                                       |
| `location`     | `string`              | ❌       | The location of the work                                                                   |

### `projects`

An array of personal, professional, or open-source projects.

**Type**: `array` of `object` (optional)

| Field          | Type                  | Required | Description                                                                 |
| -------------- | --------------------- | -------- | --------------------------------------------------------------------------- |
| `name`         | `string`              | ✅       | Project name                                                                |
| `description`  | `string`              | ❌       | A description of the project                                                |
| `highlights`   | `array` of `string`   | ❌       | Key features and achievements                                               |
| `keywords`     | `array` of `string`   | ❌       | Keywords or tags                                                            |
| `startDate`    | `string` (YYYY-MM-DD) | ❌       | Start date                                                                  |
| `endDate`      | `string` (YYYY-MM-DD) | ❌       | End date                                                                    |
| `url`          | `string` (URL)        | ❌       | URL to the project's main page                                              |
| `repository`   | `string` (URL)        | ❌       | URL to the source code repository                                           |
| `demo`         | `string` (URL)        | ❌       | URL to a live demo                                                          |
| `type`         | `enum`                | ❌       | Project type: `"personal"`, `"professional"`, `"open-source"`, `"academic"` |
| `status`       | `enum`                | ❌       | Project status: `"completed"`, `"in-progress"`, `"on-hold"`, `"cancelled"`  |
| `technologies` | `array` of `string`   | ❌       | Technologies used                                                           |
| `role`         | `string`              | ❌       | Your role in the project                                                    |
| `teamSize`     | `number`              | ❌       | The size of the project team                                                |
| `organization` | `string`              | ❌       | The organization associated with the project                                |

### `education`

An array of formal education entries.

**Type**: `array` of `object` (optional)

| Field         | Type                  | Required | Description                                |
| ------------- | --------------------- | -------- | ------------------------------------------ |
| `institution` | `string`              | ✅       | Name of the institution                    |
| `url`         | `string` (URL)        | ❌       | URL to the institution's website           |
| `area`        | `string`              | ❌       | Area of study (e.g., "Computer Science")   |
| `studyType`   | `string`              | ❌       | Degree level (e.g., "Bachelor of Science") |
| `startDate`   | `string` (YYYY-MM-DD) | ❌       | Start date                                 |
| `endDate`     | `string` (YYYY-MM-DD) | ❌       | End date                                   |
| `score`       | `string`              | ❌       | GPA or other score                         |
| `courses`     | `array` of `string`   | ❌       | Relevant courses                           |
| `honors`      | `array` of `string`   | ❌       | Honors or distinctions                     |
| `activities`  | `array` of `string`   | ❌       | Activities and societies                   |
| `location`    | `string`              | ❌       | The location of the institution            |

### `moocs`

An array of Massive Open Online Courses (MOOCs).

**Type**: `array` of `object` (optional)

| Field             | Type                    | Required | Description                                                        |
| ----------------- | ----------------------- | -------- | ------------------------------------------------------------------ |
| `courseTitle`     | `string`                | ✅       | Title of the course or specialization                              |
| `type`            | `enum`                  | ✅       | Type: `"Course"`, `"Bundle"`, or `"Specialization"`                |
| `status`          | `enum`                  | ✅       | Completion status: `"Completed"`, `"In Progress"`, `"Not Started"` |
| `certificateLink` | `string` (URL)          | ❌       | URL to the main certificate                                        |
| `provider`        | `string`                | ❌       | The platform (e.g., "Coursera", "edX")                             |
| `startDate`       | `string` (YYYY-MM-DD)   | ❌       | Start date                                                         |
| `completionDate`  | `string` (YYYY-MM-DD)   | ❌       | Completion date                                                    |
| `courses`         | `array` of `CourseItem` | ❌       | Individual courses for bundles/specializations                     |
| `skills`          | `array` of `string`     | ❌       | Skills acquired                                                    |
| `duration`        | `number`                | ❌       | Course duration in hours                                           |
| `instructors`     | `array` of `string`     | ❌       | Instructor names                                                   |

#### CourseItem Object

| Field             | Type                  | Required | Description                   |
| ----------------- | --------------------- | -------- | ----------------------------- |
| `title`           | `string`              | ✅       | Course title                  |
| `certificateLink` | `string` (URL)        | ❌       | URL to the course certificate |
| `completionDate`  | `string` (YYYY-MM-DD) | ❌       | Completion date               |
| `description`     | `string`              | ❌       | A description of the course   |
| `skills`          | `array` of `string`   | ❌       | Skills learned                |

### `certifications`

An array of professional certifications.

**Type**: `array` of `object` (optional)

| Field             | Type                  | Required | Description                                                                                  |
| ----------------- | --------------------- | -------- | -------------------------------------------------------------------------------------------- |
| `name`            | `string`              | ✅       | Name of the certification                                                                    |
| `issuer`          | `string`              | ✅       | The issuing organization                                                                     |
| `date`            | `string` (YYYY-MM-DD) | ❌       | Issue date                                                                                   |
| `expirationDate`  | `string` (YYYY-MM-DD) | ❌       | Expiration date                                                                              |
| `url`             | `string` (URL)        | ❌       | URL to the certificate                                                                       |
| `badgeUrl`        | `string` (URL)        | ❌       | URL to a digital badge                                                                       |
| `certificationId` | `string`              | ❌       | The certification ID number                                                                  |
| `description`     | `string`              | ❌       | A description of the certification                                                           |
| `skills`          | `array` of `string`   | ❌       | Skills validated                                                                             |
| `level`           | `enum`                | ❌       | Certification level: `"foundation"`, `"associate"`, `"professional"`, `"expert"`, `"master"` |

### `awards`

An array of awards and recognition.

**Type**: `array` of `object` (optional)

| Field      | Type                  | Required | Description                                                                                                             |
| ---------- | --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `title`    | `string`              | ✅       | Award title                                                                                                             |
| `date`     | `string` (YYYY-MM-DD) | ❌       | Date received                                                                                                           |
| `awarder`  | `string`              | ❌       | Awarding organization                                                                                                   |
| `summary`  | `string`              | ❌       | Award description                                                                                                       |
| `category` | `enum`                | ❌       | Award category: `"academic"`, `"professional"`, `"community"`, `"technical"`, `"leadership"`, `"innovation"`, `"other"` |
| `level`    | `enum`                | ❌       | Award level: `"international"`, `"national"`, `"regional"`, `"local"`, `"organizational"`                               |
| `url`      | `string` (URL)        | ❌       | Award URL/link                                                                                                          |

### `achievements`

An array of professional achievements and milestones.

**Type**: `array` of `object` (optional)

| Field      | Type                  | Required | Description                                                                                   |
| ---------- | --------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `title`    | `string`              | ✅       | Achievement title                                                                             |
| `date`     | `string` (YYYY-MM-DD) | ❌       | Date achieved                                                                                 |
| `issuer`   | `string`              | ❌       | Issuing organization                                                                          |
| `summary`  | `string`              | ❌       | Achievement description                                                                       |
| `category` | `enum`                | ❌       | Achievement category: `"technical"`, `"leadership"`, `"innovation"`, `"community"`, `"other"` |
| `url`      | `string` (URL)        | ❌       | Achievement URL/link                                                                          |

### `skills`

An array of technical and soft skills.

**Type**: `array` of `object` (optional)

| Field               | Type                  | Required | Description                                                                                                                               |
| ------------------- | --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | `string`              | ✅       | Name of the skill                                                                                                                         |
| `level`             | `enum`                | ❌       | Proficiency level: `"beginner"`, `"intermediate"`, `"advanced"`, `"expert"`, `"master"`                                                   |
| `category`          | `enum`                | ❌       | Skill category: `"programming-languages"`, `"frameworks"`, `"tools"`, `"databases"`, `"cloud"`, `"platforms"`, `"soft-skills"`, `"other"` |
| `yearsOfExperience` | `number`              | ❌       | Number of years of experience                                                                                                             |
| `keywords`          | `array` of `string`   | ❌       | Related technologies or concepts                                                                                                          |
| `lastUsed`          | `string` (YYYY-MM-DD) | ❌       | Date last used                                                                                                                            |
| `certifications`    | `array` of `string`   | ❌       | Related certifications                                                                                                                    |
| `rating`            | `number` (1-10)       | ❌       | Self-assessed rating from 1 to 10                                                                                                         |

### `languages`

An array of spoken languages.

**Type**: `array` of `object` (optional)

| Field            | Type                | Required | Description                                                                                       |
| ---------------- | ------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `language`       | `string`            | ✅       | Name of the language                                                                              |
| `fluency`        | `enum`              | ❌       | Overall fluency: `"elementary"`, `"limited-working"`, `"full-professional"`, `"native-bilingual"` |
| `speaking`       | `enum`              | ❌       | Speaking proficiency (same options as fluency)                                                    |
| `writing`        | `enum`              | ❌       | Writing proficiency (same options as fluency)                                                     |
| `reading`        | `enum`              | ❌       | Reading proficiency (same options as fluency)                                                     |
| `listening`      | `enum`              | ❌       | Listening proficiency (same options as fluency)                                                   |
| `certifications` | `array` of `object` | ❌       | Language certification objects                                                                    |
| `native`         | `boolean`           | ❌       | Indicates if this is a native language                                                            |

#### Language Certification Object

| Field   | Type                  | Required | Description        |
| ------- | --------------------- | -------- | ------------------ |
| `name`  | `string`              | ✅       | Certification name |
| `score` | `string`              | ❌       | Score achieved     |
| `date`  | `string` (YYYY-MM-DD) | ❌       | Date achieved      |
| `url`   | `string` (URL)        | ❌       | Certificate URL    |

### `interests`

An array of personal interests and hobbies.

**Type**: `array` of `object` (optional)

| Field         | Type                | Required | Description                                                                                            |
| ------------- | ------------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `name`        | `string`            | ✅       | Name of the interest                                                                                   |
| `keywords`    | `array` of `string` | ❌       | Related keywords                                                                                       |
| `category`    | `enum`              | ❌       | Interest category: `"technology"`, `"sports"`, `"arts"`, `"music"`, `"travel"`, `"reading"`, `"other"` |
| `level`       | `enum`              | ❌       | Level of involvement: `"casual"`, `"hobby"`, `"passionate"`, `"professional"`                          |
| `description` | `string`            | ❌       | A brief description                                                                                    |

### `volunteer`

An array of volunteer experience and community involvement.

**Type**: `array` of `object` (optional)

| Field          | Type                  | Required | Description               |
| -------------- | --------------------- | -------- | ------------------------- |
| `organization` | `string`              | ✅       | Organization name         |
| `position`     | `string`              | ❌       | Volunteer position        |
| `url`          | `string` (URL)        | ❌       | Organization website      |
| `startDate`    | `string` (YYYY-MM-DD) | ❌       | Start date                |
| `endDate`      | `string` (YYYY-MM-DD) | ❌       | End date                  |
| `summary`      | `string`              | ❌       | Summary of volunteer work |
| `highlights`   | `array` of `string`   | ❌       | Key contributions         |
| `cause`        | `string`              | ❌       | Cause or area of focus    |

### `publications`

An array of publications and writings.

**Type**: `array` of `object` (optional)

| Field         | Type                  | Required | Description                                                                               |
| ------------- | --------------------- | -------- | ----------------------------------------------------------------------------------------- |
| `name`        | `string`              | ✅       | Publication title                                                                         |
| `publisher`   | `string`              | ❌       | Publisher name                                                                            |
| `releaseDate` | `string` (YYYY-MM-DD) | ❌       | Publication date                                                                          |
| `url`         | `string` (URL)        | ❌       | Publication URL                                                                           |
| `type`        | `enum`                | ❌       | Publication type: `"article"`, `"blog-post"`, `"paper"`, `"book"`, `"chapter"`, `"other"` |
| `summary`     | `string`              | ❌       | Brief summary                                                                             |
| `keywords`    | `array` of `string`   | ❌       | Related keywords                                                                          |

### `speaking`

An array of speaking engagements and presentations.

**Type**: `array` of `object` (optional)

| Field          | Type                  | Required | Description                                                                                   |
| -------------- | --------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `title`        | `string`              | ✅       | Talk title                                                                                    |
| `event`        | `string`              | ❌       | Event name                                                                                    |
| `organizer`    | `string`              | ❌       | Event organizer                                                                               |
| `date`         | `string` (YYYY-MM-DD) | ❌       | Date of presentation                                                                          |
| `location`     | `string`              | ❌       | Event location                                                                                |
| `url`          | `string` (URL)        | ❌       | Event URL                                                                                     |
| `slidesUrl`    | `string` (URL)        | ❌       | Slides URL                                                                                    |
| `videoUrl`     | `string` (URL)        | ❌       | Video URL                                                                                     |
| `description`  | `string`              | ❌       | Talk description                                                                              |
| `audienceSize` | `number`              | ❌       | Estimated audience size                                                                       |
| `type`         | `enum`                | ❌       | Talk type: `"conference-talk"`, `"workshop"`, `"webinar"`, `"meetup"`, `"podcast"`, `"other"` |
| `topics`       | `array` of `string`   | ❌       | Topics covered                                                                                |

### `media`

An array of media appearances and interviews.

**Type**: `array` of `object` (optional)

| Field     | Type                  | Required | Description                                                                          |
| --------- | --------------------- | -------- | ------------------------------------------------------------------------------------ |
| `title`   | `string`              | ✅       | Media appearance title                                                               |
| `outlet`  | `string`              | ❌       | Media outlet                                                                         |
| `date`    | `string` (YYYY-MM-DD) | ❌       | Publication/air date                                                                 |
| `url`     | `string` (URL)        | ❌       | Media URL                                                                            |
| `type`    | `enum`                | ❌       | Media type: `"interview"`, `"podcast"`, `"article"`, `"video"`, `"radio"`, `"other"` |
| `summary` | `string`              | ❌       | Brief summary                                                                        |
| `topics`  | `array` of `string`   | ❌       | Topics discussed                                                                     |

### `patents`

An array of patent applications and grants.

**Type**: `array` of `object` (optional)

| Field       | Type                  | Required | Description                                                     |
| ----------- | --------------------- | -------- | --------------------------------------------------------------- |
| `title`     | `string`              | ✅       | Patent title                                                    |
| `number`    | `string`              | ❌       | Patent number                                                   |
| `date`      | `string` (YYYY-MM-DD) | ❌       | Filing or grant date                                            |
| `status`    | `enum`                | ❌       | Patent status: `"filed"`, `"pending"`, `"granted"`, `"expired"` |
| `url`       | `string` (URL)        | ❌       | Patent office URL                                               |
| `summary`   | `string`              | ❌       | Patent description                                              |
| `inventors` | `array` of `string`   | ❌       | List of inventors                                               |
| `assignee`  | `string`              | ❌       | Patent assignee                                                 |

### `references`

An array of professional references and testimonials.

**Type**: `array` of `object` (optional)

| Field          | Type                  | Required | Description                                                                      |
| -------------- | --------------------- | -------- | -------------------------------------------------------------------------------- |
| `name`         | `string`              | ✅       | Reference name                                                                   |
| `reference`    | `string`              | ✅       | Reference text/testimonial                                                       |
| `position`     | `string`              | ❌       | Reference's position                                                             |
| `company`      | `string`              | ❌       | Reference's company                                                              |
| `relationship` | `enum`                | ❌       | Relationship type: `"manager"`, `"colleague"`, `"client"`, `"mentor"`, `"other"` |
| `contact`      | `object`              | ❌       | Contact information                                                              |
| `date`         | `string` (YYYY-MM-DD) | ❌       | Date of reference                                                                |

#### Reference Contact Object

| Field      | Type             | Required | Description      |
| ---------- | ---------------- | -------- | ---------------- |
| `email`    | `string` (email) | ❌       | Email address    |
| `phone`    | `string`         | ❌       | Phone number     |
| `linkedin` | `string` (URL)   | ❌       | LinkedIn profile |

### `meta`

Metadata about the portfolio document itself.

**Type**: `object` (optional)

| Field          | Type                | Required | Description                                                |
| -------------- | ------------------- | -------- | ---------------------------------------------------------- |
| `lastModified` | `string` (ISO 8601) | ❌       | Date the portfolio was last updated                        |
| `version`      | `string`            | ❌       | A version string for the portfolio data                    |
| `theme`        | `string`            | ❌       | Custom theme or styling preferences                        |
| `visibility`   | `enum`              | ❌       | Visibility settings: `"public"`, `"private"`, `"unlisted"` |
| `custom`       | `object`            | ❌       | A key-value store for custom, non-standard fields          |

## ⚡ Validation Rules

### Date Format Validation

All date fields must follow the `YYYY-MM-DD` format and be valid dates:

- ✅ `"2024-01-15"`
- ✅ `"2023-12-31"`
- ❌ `"2024-1-15"` (single digit month)
- ❌ `"24-01-15"` (2-digit year)
- ❌ `"2024/01/15"` (wrong separator)

### URL Validation

All URL fields must be valid URLs:

- ✅ `"https://example.com"`
- ✅ `"http://localhost:3000"`
- ❌ `"not-a-url"`
- ❌ `"ftp://example.com"` (if not supported)

### Email Validation

Email fields must be valid email addresses:

- ✅ `"user@example.com"`
- ✅ `"user+tag@example.co.uk"`
- ❌ `"invalid-email"`
- ❌ `"@example.com"`

### Enum Validation

All enum fields must use one of the specified values. For example, skill levels must be one of:
`"beginner"`, `"intermediate"`, `"advanced"`, `"expert"`, `"master"`

### Required Fields

Only a few fields are truly required:

- `basics.name` (if basics section is included)
- Within arrays, some items have required fields as specified in each section

## 📄 Complete Example

Here is a complete example of a `devfolio.json` file, showcasing many of the available fields:

```json
{
  "$schema": "https://github.com/AungMyoKyaw/devfolio-json-schema/v1.0.0",
  "basics": {
    "name": "Aung Myo Kyaw",
    "label": "Senior Full-Stack Developer & Cloud Architect",
    "image": "https://avatars.githubusercontent.com/u/example",
    "email": "aung@example.com",
    "phone": "+1-555-0123",
    "url": "https://aungmyokyaw.com",
    "summary": "Passionate full-stack developer with 8+ years of experience building scalable web applications and cloud-native solutions. Expertise in TypeScript, React, Node.js, and AWS. Strong advocate for clean code, test-driven development, and continuous learning.",
    "location": {
      "address": "123 Tech Street",
      "postalCode": "94102",
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [
      {
        "network": "GitHub",
        "username": "aungmyokyaw",
        "url": "https://github.com/aungmyokyaw"
      },
      {
        "network": "LinkedIn",
        "username": "aungmyokyaw",
        "url": "https://linkedin.com/in/aungmyokyaw"
      }
    ]
  },
  "work": [
    {
      "name": "TechCorp Solutions",
      "position": "Senior Full-Stack Developer",
      "url": "https://techcorp.com",
      "startDate": "2020-03-01",
      "summary": "Lead development of microservices architecture serving 2M+ users. Mentored junior developers and drove adoption of modern development practices.",
      "highlights": [
        "Architected and implemented scalable microservices handling 10K+ requests/second",
        "Reduced deployment time by 80% through CI/CD pipeline optimization"
      ],
      "type": "full-time",
      "remote": true,
      "technologies": ["TypeScript", "React", "Node.js", "AWS", "Docker"],
      "teamSize": 6,
      "location": "San Francisco, CA (Remote)"
    }
  ],
  "projects": [
    {
      "name": "DevFolio JSON Schema",
      "description": "A comprehensive TypeScript-first JSON schema for professional developer portfolios with Zod validation",
      "highlights": [
        "Created industry-standard schema with 15+ professional sections",
        "Implemented comprehensive Zod validation with TypeScript support"
      ],
      "keywords": ["TypeScript", "JSON Schema", "Zod", "Open Source"],
      "startDate": "2024-01-15",
      "url": "https://github.com/aungmyokyaw/devfolio-json-schema",
      "type": "open-source",
      "status": "completed",
      "technologies": ["TypeScript", "Zod", "Node.js"],
      "role": "Lead Developer & Architect"
    }
  ],
  "education": [
    {
      "institution": "University of Technology",
      "area": "Computer Science",
      "studyType": "Bachelor of Science",
      "startDate": "2012-09-01",
      "endDate": "2016-05-31",
      "score": "3.8 GPA"
    }
  ],
  "moocs": [
    {
      "courseTitle": "AWS Cloud Solutions Architect Specialization",
      "type": "Specialization",
      "status": "Completed",
      "certificateLink": "https://coursera.org/verify/specialization/ABC123",
      "provider": "Coursera",
      "completionDate": "2023-04-20",
      "courses": [
        {
          "title": "AWS Cloud Technical Essentials",
          "certificateLink": "https://coursera.org/verify/certificate/DEF456"
        },
        {
          "title": "Architecting Solutions on AWS",
          "certificateLink": "https://coursera.org/verify/certificate/GHI789"
        }
      ],
      "skills": ["AWS", "Cloud Architecture", "DevOps"]
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Solutions Architect - Professional",
      "issuer": "Amazon Web Services",
      "date": "2023-06-15",
      "expirationDate": "2026-06-15",
      "skills": ["AWS", "Cloud Architecture", "Solution Design"]
    }
  ],
  "skills": [
    {
      "name": "TypeScript",
      "level": "expert",
      "category": "programming-languages",
      "yearsOfExperience": 5
    },
    {
      "name": "React",
      "level": "expert",
      "category": "frameworks",
      "yearsOfExperience": 6
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "native-bilingual"
    },
    {
      "language": "Japanese",
      "fluency": "limited-working"
    }
  ],
  "interests": [
    {
      "name": "Open Source Development",
      "category": "technology"
    },
    {
      "name": "Photography",
      "category": "arts"
    }
  ],
  "meta": {
    "lastModified": "2024-07-28T10:30:00Z",
    "version": "1.2.0"
  }
}
```

## 🎯 Usage Patterns

### Minimal Portfolio

The most basic valid DevFolio only requires a name:

```json
{
  "$schema": "https://github.com/AungMyoKyaw/devfolio-json-schema/v1.0.0",
  "basics": {
    "name": "John Doe"
  }
}
```

### Progressive Enhancement

Start with basics and add sections as needed:

1. **Level 1**: Basic information and contact details
2. **Level 2**: Add work experience and skills
3. **Level 3**: Include education and projects
4. **Level 4**: Add certifications and MOOCs
5. **Level 5**: Complete with publications, speaking, etc.

### Custom Extensions

Use the `meta.custom` field for organization-specific or non-standard data:

```json
{
  "meta": {
    "custom": {
      "internal_id": "EMP-12345",
      "security_clearance": "Secret",
      "preferred_pronouns": "they/them"
    }
  }
}
```

## 🔧 Implementation Guidelines

### TypeScript Integration

```typescript
import { DevFolioSchema, DevFolio } from "devfolio-json-schema";

// Validate and parse
const result = DevFolioSchema.safeParse(data);
if (result.success) {
  const portfolio: DevFolio = result.data;
  // Use with full type safety
}
```

### Validation Best Practices

1. **Always validate** input data before processing
2. **Use safe parsing** to handle errors gracefully
3. **Provide meaningful error messages** to users
4. **Validate dates** for logical consistency (end dates after start dates)
5. **Check URL accessibility** when appropriate

### Data Migration

When migrating from other formats:

1. **JSON Resume**: Most fields map directly with enhancements
2. **LinkedIn**: Use export data and map to appropriate sections
3. **Custom formats**: Use the validation schema to ensure compliance

## 📊 Schema Statistics

- **Total Sections**: 17 main sections
- **Required Fields**: Only `basics.name` when basics is included
- **Optional Fields**: 100+ optional fields for comprehensive profiles
- **Validation Rules**: 50+ built-in validation rules
- **Supported Formats**: Dates (YYYY-MM-DD), URLs, emails, enums

## 🚀 Future Enhancements

### Planned Features

- [ ] JSON Schema export for non-TypeScript environments
- [ ] Additional validation rules for logical consistency
- [ ] Internationalization support for field values
- [ ] Digital signature and verification support
- [ ] Integration with professional platforms APIs

### Version History

- **v1.0.0** (August 2025): Initial comprehensive specification
- **v0.9.0** (July 2025): Beta release with core sections
- **v0.1.0** (January 2025): Initial development version

---

## 📝 License

This specification is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions to improve this specification. Please:

1. Follow the existing format and structure
2. Include examples for new fields
3. Update validation rules as needed
4. Provide clear documentation for changes

## 📞 Support

For questions, issues, or contributions:

- **GitHub**: [devfolio-json-schema](https://github.com/AungMyoKyaw/devfolio-json-schema)
- **Issues**: [Report bugs or request features](https://github.com/AungMyoKyaw/devfolio-json-schema/issues)
- **Discussions**: [Community discussions](https://github.com/AungMyoKyaw/devfolio-json-schema/discussions)

---

**Made with ❤️ by [Aung Myo Kyaw](https://github.com/AungMyoKyaw)**
