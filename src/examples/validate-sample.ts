import sampleDevFolio from "./sample-devfolio";
import { validateDevFolio, formatValidationErrors } from "../utils/validators";

// Validate the sample data
const validation = validateDevFolio(sampleDevFolio);

if (validation.success && validation.data) {
  console.log("✅ Sample DevFolio data is valid!");
  console.log("📊 Schema validation passed successfully");

  // Output some statistics
  const data = validation.data;
  console.log("\n📈 Portfolio Statistics:");
  console.log(`- Work Experience: ${data.work?.length || 0} positions`);
  console.log(`- Projects: ${data.projects?.length || 0} projects`);
  console.log(`- Skills: ${data.skills?.length || 0} skills`);
  console.log(
    `- Certifications: ${data.certifications?.length || 0} certifications`
  );
  console.log(`- MOOCs: ${data.moocs?.length || 0} online courses`);
  console.log(`- Languages: ${data.languages?.length || 0} languages`);
  console.log(`- Publications: ${data.publications?.length || 0} publications`);
  console.log(`- Speaking: ${data.speaking?.length || 0} talks`);
} else {
  console.error("❌ Sample DevFolio data validation failed!");
  if (validation.errors) {
    console.error("\n🔍 Validation Errors:");
    console.error(formatValidationErrors(validation.errors));
  }
  process.exit(1);
}

export default sampleDevFolio;
