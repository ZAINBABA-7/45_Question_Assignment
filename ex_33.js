function getOrdinal(number) {
    var lastDigit = number % 10;
    var secondLastDigit = Math.floor(number / 10) % 10;
    if (secondLastDigit === 1) {
        return "".concat(number, "th");
    }
    else {
        switch (lastDigit) {
            case 1:
                return "".concat(number, "st");
            case 2:
                return "".concat(number, "nd");
            case 3:
                return "".concat(number, "rd");
            default:
                return "".concat(number, "th");
        }
    }
}
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbersArray_1 = numbersArray; _i < numbersArray_1.length; _i++) {
    var number = numbersArray_1[_i];
    console.log(getOrdinal(number));
}
