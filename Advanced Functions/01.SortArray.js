function sortArray(array, criteria) {
    switch (criteria) {
        case "asc":
            console.log(array.sort((a, b) => a - b));
            break;
    
        case "desc":
            console.log(array.sort((a, b) => b - a));
            break;
    }
}