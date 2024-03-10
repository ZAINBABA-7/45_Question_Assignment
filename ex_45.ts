function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
    const car: { manufacturer: string, model: string, extras: { [key: string]: any } } = {
        manufacturer,
        model,
        extras: {}
    };

    for (const extra of extras) {
        const key = Object.keys(extra)[0];
        const value = extra[key];
        car.extras[key] = value;
    }

    return car;
}

const myCar = createCar("Toyota", "Corolla", { color: "blue" }, { year: 2023 });
console.log(myCar);