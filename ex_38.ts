function describeCity(city: string, country: string = "Unknown Country"): void {
    console.log(`${city} is in ${country}.`);
}

// Example usage:
describeCity("Karachi", "Pakistan"); // Karachi is in Pakistan.
describeCity("Tokyo", "Japan"); // Tokyo is in Japan.
describeCity("Barcelona"); // Barcelona is in Unknown Country.
