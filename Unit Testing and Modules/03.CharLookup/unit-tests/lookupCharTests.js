const expect = require("chai").expect;
const lookupChar = require("../LookupChar").lookupChar;

describe("lookupChar", () => {
    it("Should return undefined when first param is not a string.", () => {
        const expected = undefined;

        const numberParam = 2;
        const actual = lookupChar(numberParam, 3);

        expect(actual).to.be.equal(expected);
    });

    it("Should return undefined when second param is not a number", () => {
        const expected = undefined;

        const stringParam = "testParam";
        const actual = lookupChar("asd", stringParam);

        expect(actual).to.be.equal(expected);
    });

    it("Should return undefined when index is not integer", () => {
        const expected = undefined;

        const stringParam = "testString";
        const doubleParam = 2.12;
        const actual = lookupChar(stringParam, doubleParam);

        expect(actual).to.equal(expected);
    })

    it("Should return 'incorrect index' when index is equal to the string lenght", () =>{
        const expected = "Incorrect index";

        const stringToPass = "01";
        const biggerIndex = 2;
        const actual = lookupChar(stringToPass, biggerIndex);

        expect(actual).to.equal(expected);
    });

    it("Should return 'incorrect index' when index is bigger to the string lenght", () =>{
        const expected = "Incorrect index";

        const stringToPass = "01";
        const biggerIndex = 3;
        const actual = lookupChar(stringToPass, biggerIndex);

        expect(actual).to.equal(expected);
    });

    it("Should return 'incorrect index' when the index passed is negative", () => {
        const expected = "Incorrect index";

        const testString = "testStr";
        const negativeIndex = -1;
        const actual = lookupChar(testString, negativeIndex);

        expect(actual).to.be.equal(expected);
    });

    it("Should return the char at the passed index when parameters are valid", () => {
        const expected = "a";

        const validString = "asd";
        const validIndex = 0;
        const actual = lookupChar(validString, validIndex);

        expect(actual).to.be.equal(expected);
    });

    it("Should return the char at the passed index when parameters are valid", () => {
        const expected = "e";

        const validString = "Expected";
        const validIndex = 3;
        const actual = lookupChar(validString, validIndex);

        expect(actual).to.be.equal(expected);
    });
});