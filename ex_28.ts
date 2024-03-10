function determineLifeStage(age: number): string {
    if (age < 2) {
        return "baby";
    } else if (age >= 2 && age < 4) {
        return "toddler";
    } else if (age >= 4 && age < 13) {
        return "kid";
    } else if (age >= 13 && age < 20) {
        return "teenager";
    } else if (age >= 20 && age < 65) {
        return "adult";
    } else {
        return "elder";
    }
}

const personAge = 30; // You can set the age value here
const lifeStage = determineLifeStage(personAge);
console.log(`The person is an ${lifeStage}.`);
