const personName: string = "ZAIN UL ABIDEEN";

//lowerCase
console.log(personName. toLowerCase());

//upperCase
console.log(personName.toUpperCase());

//titlecase
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetters: string = personName.slice(1).toLowerCase();

let titleCase = firstLetter + restLetters;

console.log(titleCase);