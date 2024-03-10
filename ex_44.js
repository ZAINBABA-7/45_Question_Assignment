function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
orderSandwich("ham", "cheese", "lettuce", "tomato");
orderSandwich("turkey", "bacon", "avocado");
orderSandwich("peanut butter", "jelly");
