const commonAnimals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal
console.log("Common animals with a shared characteristic:");
for (const animal of commonAnimals) {
    console.log(animal);
}

// Print statements about each animal
console.log("\nWhy these animals are special:");
for (const animal of commonAnimals) {
    switch (animal.toLowerCase()) {
        case "dog":
            console.log(`A ${animal} would make a loyal and loving pet.`);
            break;
        case "cat":
            console.log(`A ${animal} is independent and great for companionship.`);
            break;
        case "rabbit":
            console.log(`A ${animal} is gentle and can be litter-trained.`);
            break;
        default:
            console.log(`Hmm, I'm not sure about ${animal}, but they're fascinating too!`);
    }
}

// Conclude with their common characteristic
console.log("\nAny of these animals would make a great pet!");
