// Define objects representing information about different countries
let countries: { [key: string]: { capital: string, population: number, language: string } } = {
    "USA": { capital: "Washington, D.C.", population: 331_000_000, language: "English" },
    "France": { capital: "Paris", population: 67_000_000, language: "French" },
    "China": { capital: "Beijing", population: 1_398_000_000, language: "Mandarin" },
    "Brazil": { capital: "Brasília", population: 212_000_000, language: "Portuguese" },
    "India": { capital: "New Delhi", population: 1_366_000_000, language: "Hindi" }
};

// Print information about each country
for (const country in countries) {
    console.log(`Country: ${country}`);
    console.log(`Capital: ${countries[country].capital}`);
    console.log(`Population: ${countries[country].population}`);
    console.log(`Language: ${countries[country].language}`);
    console.log("--------------------");
}
