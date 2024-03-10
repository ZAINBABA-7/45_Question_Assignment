var countries = {
    "USA": { capital: "Washington, D.C.", population: 331000000, language: "English" },
    "France": { capital: "Paris", population: 67000000, language: "French" },
    "China": { capital: "Beijing", population: 1398000000, language: "Mandarin" },
    "Brazil": { capital: "Brasília", population: 212000000, language: "Portuguese" },
    "India": { capital: "New Delhi", population: 1366000000, language: "Hindi" }
};
// Intentional error: accessing a property that doesn't exist
console.log("Population of France: ".concat(countries["France"].population));
// console.log(`Currency of France: ${countries["France"].currency}`); // Intention
