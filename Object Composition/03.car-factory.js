function carFactory(carDescription) {

    const getEngine = (desiredPower) => {
        let engine = {};

        if (desiredPower <= 90) {
            engine = { power: 90, volume: 1800 }    
        } else if(desiredPower <= 120){
            engine = { power: 120, volume: 2400}
        } else {
            engine = { power: 200, volume: 3500}
        }

        return engine;
    };

    const getCarriage = (desiredCarriage, color) => {
        let carriage = {};

        if (desiredCarriage === "hatchback") {
            carriage = { type: "hatchback", color: color };
        } else if (desiredCarriage === "coupe"){
            carriage = { type: 'coupe', color: color }
        };

        return carriage;
    };

    const getWheelSize = (desiredWheelSize) =>  2 * Math.round(desiredWheelSize / 2) - 1;

    const model = carDescription.model;
    const engine = getEngine(carDescription.power);
    const carriage = getCarriage(carDescription.carriage, carDescription.color);

    const wheelSize = getWheelSize(carDescription.wheelsize);
    const wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

    const car = {
        model,
        engine,
        carriage,
        wheels
    };

    return car;
}


console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));