const favoritePizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

// Print the names of each pizza
console.log("My favorite pizzas are:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Print sentences about each pizza
console.log("\nHere's why I like them:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Express my overall love for pizza
console.log("\nI really love pizza!");
