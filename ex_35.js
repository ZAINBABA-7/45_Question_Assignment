var commonAnimals = ["Dog", "Cat", "Rabbit"];
// Print the names of each animal
console.log("Common animals with a shared characteristic:");
for (var _i = 0, commonAnimals_1 = commonAnimals; _i < commonAnimals_1.length; _i++) {
    var animal = commonAnimals_1[_i];
    console.log(animal);
}
// Print statements about each animal
console.log("\nWhy these animals are special:");
for (var _a = 0, commonAnimals_2 = commonAnimals; _a < commonAnimals_2.length; _a++) {
    var animal = commonAnimals_2[_a];
    switch (animal.toLowerCase()) {
        case "dog":
            console.log("A ".concat(animal, " would make a loyal and loving pet."));
            break;
        case "cat":
            console.log("A ".concat(animal, " is independent and great for companionship."));
            break;
        case "rabbit":
            console.log("A ".concat(animal, " is gentle and can be litter-trained."));
            break;
        default:
            console.log("Hmm, I'm not sure about ".concat(animal, ", but they're fascinating too!"));
    }
}
// Conclude with their common characteristic
console.log("\nAny of these animals would make a great pet!");
