// Define objects representing information about different countries
var countries = {
    "USA": { capital: "Washington, D.C.", population: 331000000, language: "English" },
    "France": { capital: "Paris", population: 67000000, language: "French" },
    "China": { capital: "Beijing", population: 1398000000, language: "Mandarin" },
    "Brazil": { capital: "Brasília", population: 212000000, language: "Portuguese" },
    "India": { capital: "New Delhi", population: 1366000000, language: "Hindi" }
};
// Print information about each country
for (var country in countries) {
    console.log("Country: ".concat(country));
    console.log("Capital: ".concat(countries[country].capital));
    console.log("Population: ".concat(countries[country].population));
    console.log("Language: ".concat(countries[country].language));
    console.log("--------------------");
}
