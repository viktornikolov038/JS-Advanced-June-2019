function argsInfo(argsString) {
    let argsInfo = {};

    for (let i = 0; i < arguments.length; i++) {
        const currentArgument = arguments[i];
        const typeOfArgument = typeof currentArgument;

        console.log(`${typeOfArgument}: ${currentArgument}`);

        if (!argsInfo.hasOwnProperty(typeOfArgument)) {
            argsInfo[typeOfArgument] = 0;
        }

        argsInfo[typeOfArgument] += 1;
    }
    
    let argsArray = Object.keys(argsInfo).map((key) => [key, argsInfo[key]]);
    argsArray.sort((first, second) => second[1] - first[1]);

    for (const key of argsArray) {
        console.log(`${key[0]} = ${key[1]}`);
    }
}

argsInfo('cat', 42, function () { console.log('Hello world!'); });