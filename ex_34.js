var favoritePizzas = ["Pepperoni", "Margherita", "Hawaiian"];
// Print the names of each pizza
console.log("My favorite pizzas are:");
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var pizza = favoritePizzas_1[_i];
    console.log(pizza);
}
// Print sentences about each pizza
console.log("\nHere's why I like them:");
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var pizza = favoritePizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Express my overall love for pizza
console.log("\nI really love pizza!");
