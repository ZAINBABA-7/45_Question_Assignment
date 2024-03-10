var personName = "ZAIN UL ABIDEEN";
//lowerCase
console.log(personName.toLowerCase());
//upperCase
console.log(personName.toUpperCase());
//titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
