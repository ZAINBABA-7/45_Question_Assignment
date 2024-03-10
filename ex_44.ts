function orderSandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

orderSandwich("ham", "cheese", "lettuce", "tomato");
orderSandwich("turkey", "bacon", "avocado");
orderSandwich("peanut butter", "jelly");