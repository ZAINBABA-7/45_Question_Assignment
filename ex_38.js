function describeCity(city, country) {
    if (country === void 0) { country = "Unknown Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Example usage:
describeCity("Karachi", "Pakistan"); // Karachi is in Pakistan.
describeCity("Tokyo", "Japan"); // Tokyo is in Japan.
describeCity("Barcelona"); // Barcelona is in Unknown Country.
