const expect = require("chai").expect;
const isOddOrEven = require("../isOddOrEven.js").isOddOrEven;

describe('isOddOrEven', () => {
   it("it should return undefined with a number parameter.", () => {
        const expected = undefined;
        
        const actual = isOddOrEven(123);

       expect(actual).to.equal(expected, "Function did not return the correct result.");
   });

   it("Should return undefined with a object parameter.", () => {
        const expected = undefined;

        const objectToPass = {};
        const actual = isOddOrEven(objectToPass);

        expect(actual).to.be.equal(expected);
   });

   it("Should return 'even' when passed string lenght is even", () => {
        const expected = "even";

        const evenString = "even";
        const actual = isOddOrEven(evenString);

        expect(actual).to.be.equal(expected);
   });

   it("Should return 'odd' when passed string lenght is odd", () => {
        const expected = "odd";

        const oddString = "odd";
        const actual = isOddOrEven(oddString);

        expect(actual).to.be.equal(expected);
    });

});