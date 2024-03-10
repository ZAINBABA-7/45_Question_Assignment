function getOrdinal(number: number): string {
    const lastDigit = number % 10;
    const secondLastDigit = Math.floor(number / 10) % 10;

    if (secondLastDigit === 1) {
        return `${number}th`;
    } else {
        switch (lastDigit) {
            case 1:
                return `${number}st`;
            case 2:
                return `${number}nd`;
            case 3:
                return `${number}rd`;
            default:
                return `${number}th`;
        }
    }
}

const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbersArray) {
    console.log(getOrdinal(number));
}
