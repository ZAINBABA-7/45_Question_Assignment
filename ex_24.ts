// Tests for equality and inequality with strings
let str1 = "hello";
let str2 = "world";

console.log("Is str1 equal to str2? I predict False.");
console.log(str1 == str2); // False

console.log("Is str1 not equal to str2? I predict True.");
console.log(str1 != str2); // True

// Tests using the lower case function
let name1 = "John";
let name2 = "john";

console.log("Are name1 and name2 equal when converted to lowercase? I predict True.");
console.log(name1.toLowerCase() == name2.toLowerCase()); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;

console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True

console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = false;

console.log("Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm); // False

console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm); // True

// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape")); // True
