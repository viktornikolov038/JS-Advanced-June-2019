function getRobot(inputArgs) {

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipesList = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    function restock(microelement, quantity) {
        quantity = Number(quantity);

        if (!ingredients.hasOwnProperty(microelement)) {
            throw console.error("Invalid microelement!");            
        }

        if (quantity === NaN) {
            throw console.error("Invalid quantity!");
        }

        ingredients[microelement] += quantity;
        return "Success";
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        
        for (const ingredient in recipesList[recipe]) {
            const neededQuantity = recipesList[recipe][ingredient] * quantity;

            if (neededQuantity > ingredients[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (const ingredient in recipesList[recipe]) {
            const neededQuantity = recipesList[recipe][ingredient] * quantity;
            ingredients[ingredient] -= neededQuantity;
        }

        return 'Success';
    }

    function report(){
        const reportString =
        `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;

        return reportString;
    }


    return function(inputArgs){
        const splittedInput = inputArgs.split(" ");
        const command = splittedInput[0];

        switch (command) {
            case "restock":
                const microelement = splittedInput[1];
                const quantity = splittedInput[2];
                return restock(microelement, quantity);
                break;
    
            case "prepare":
                const meal = splittedInput[1];
                const mealQuantity = splittedInput[2];
                return prepare(meal, mealQuantity);
                break;

            case "report":
                return report();
                break;
        }
    };
}

result = getRobot();

var expectationPairs = [
    ['restock carbohydrate 10', 'Success'],
    ['restock flavour 10', 'Success'],
    ['prepare apple 1', 'Success'],
    ['restock fat 10', 'Success'],
    ['prepare burger 1', 'Success'],
    ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']
];

for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    console.log(result(expectation[0]));
}
