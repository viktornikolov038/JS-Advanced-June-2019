class Rat {
    constructor(name) {
        this.name = name;
        this.unitetRats = [];
    }

    unite(otherRat){
        if (otherRat instanceof Rat) {
            this.unitetRats.push(otherRat); 
        }
    }

    getRats(){
        return this.unitetRats;
    }

    toString(){
        let stringToReturn = "";

        stringToReturn += `${this.name}`;

        if (this.unitetRats.length > 0) {
            stringToReturn += "\n";

            for (const unitedRat of this.unitetRats) {
                stringToReturn += `##${unitedRat.name}\n`;
            }
            
        }

        return stringToReturn;
    }
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
