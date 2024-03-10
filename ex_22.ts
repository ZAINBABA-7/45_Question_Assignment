let countries: { [key: string]: { capital: string, population: number, language: string } } = {
    "USA": { capital: "Washington, D.C.", population: 331_000_000, language: "English" },
    "France": { capital: "Paris", population: 67_000_000, language: "French" },
    "China": { capital: "Beijing", population: 1_398_000_000, language: "Mandarin" },
    "Brazil": { capital: "Brasília", population: 212_000_000, language: "Portuguese" },
    "India": { capital: "New Delhi", population: 1_366_000_000, language: "Hindi" }
};

// Intentional error: accessing a property that doesn't exist
console.log(`Population of France: ${countries["France"].population}`);
// console.log(`Currency of France: ${countries["France"].currency}`); // Intention
