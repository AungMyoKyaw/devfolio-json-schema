import {
  DevFolioSchema,
  type DevFolio,
  validateDevFolio,
  safeValidateDevFolio,
  isValidDevFolio,
  createMinimalDevFolio
} from "./index";
import sampleDevFolio from "./examples/sample-devfolio";

console.log("🧪 Running DevFolio Schema Tests...\n");

// Test 1: Schema validation with sample data
console.log("Test 1: Validating comprehensive sample data...");
const validation1 = validateDevFolio(sampleDevFolio);
console.log(
  validation1.success ? "✅ PASSED" : "❌ FAILED",
  "- Comprehensive sample validation"
);

// Test 2: Safe validation
console.log("\nTest 2: Safe validation test...");
const validation2 = safeValidateDevFolio(sampleDevFolio);
console.log(
  validation2.success ? "✅ PASSED" : "❌ FAILED",
  "- Safe validation"
);

// Test 3: Type checking
console.log("\nTest 3: Type checking test...");
const isValid = isValidDevFolio(sampleDevFolio);
console.log(isValid ? "✅ PASSED" : "❌ FAILED", "- Type checking");

// Test 4: Minimal valid object
console.log("\nTest 4: Minimal valid object test...");
const minimal = createMinimalDevFolio("John Doe");
const validation3 = validateDevFolio(minimal);
console.log(
  validation3.success ? "✅ PASSED" : "❌ FAILED",
  "- Minimal object validation"
);

// Test 5: Invalid data test
console.log("\nTest 5: Invalid data handling test...");
const invalidData = { basics: { name: "", email: "invalid-email" } };
const validation4 = safeValidateDevFolio(invalidData);
console.log(
  !validation4.success ? "✅ PASSED" : "❌ FAILED",
  "- Invalid data rejection"
);

// Test 6: Direct Zod schema test
console.log("\nTest 6: Direct Zod schema test...");
try {
  DevFolioSchema.parse(sampleDevFolio);
  console.log("✅ PASSED - Direct Zod parsing");
} catch {
  console.log("❌ FAILED - Direct Zod parsing");
}

// Test 7: Empty object test
console.log("\nTest 7: Empty object test...");
const emptyValidation = safeValidateDevFolio({});
console.log(
  emptyValidation.success ? "✅ PASSED" : "❌ FAILED",
  "- Empty object validation"
);

// Test 8: Schema URL test
console.log("\nTest 8: Schema URL test...");
const hasCorrectSchema =
  sampleDevFolio.$schema ===
  "https://raw.githubusercontent.com/AungMyoKyaw/devfolio-json-schema/refs/heads/master/schema.json";
console.log(
  hasCorrectSchema ? "✅ PASSED" : "❌ FAILED",
  "- Schema URL validation"
);

console.log("\n🎉 All tests completed!");

// Performance test
console.log("\n⚡ Performance Test:");
const startTime = Date.now();
for (let i = 0; i < 1000; i++) {
  DevFolioSchema.safeParse(sampleDevFolio);
}
const endTime = Date.now();
console.log(
  `Validated 1000 objects in ${endTime - startTime}ms (${((endTime - startTime) / 1000).toFixed(2)}ms per validation)`
);

export { DevFolioSchema, type DevFolio, sampleDevFolio };
