function checkFavoriteFruits(fruits) {
    var favoriteFruits = ["banana", "apples", "mango"]; // Your three favorite fruits
    if (fruits.includes(favoriteFruits[0])) {
        console.log("You really like bananas!");
    }
    if (fruits.includes(favoriteFruits[1])) {
        console.log("You're a fan of apples!");
    }
    if (fruits.includes(favoriteFruits[2])) {
        console.log("Mangoes are your go-to!");
    }
    // Add more if statements for other favorite fruits if needed
}
// Example usage:
var myFruits = ["banana", "apples", "mango"];
checkFavoriteFruits(myFruits);
