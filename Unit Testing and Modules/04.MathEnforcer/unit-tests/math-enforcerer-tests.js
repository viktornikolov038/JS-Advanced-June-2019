const expect = require("chai").expect;
const mathEnforcer = require("../math-enforcer").mathEnforcer;

describe("math-enforcerer", () => {

    describe("add-five", () => {
        it("Should return undefined if passed parameter is not a number", () => {
            const expected = undefined;

            const NaNParam = "I'm a string";
            const actual = mathEnforcer.addFive(NaNParam);

            expect(actual).to.be.equal(expected);
        });

        it("Should return passed number plus 5 when the number is valid", () => {
            const numberToPass = 10;
            const expected = numberToPass + 5;

            const actual = mathEnforcer.addFive(numberToPass);

            expect(actual).to.be.equal(expected);
        });

        it("Should return correct result when passed floating point number", () => {
            const passedNumber = 10.5;
            const expected = passedNumber + 5;

            const actual = mathEnforcer.addFive(passedNumber);

            expect(actual).to.be.closeTo(expected, 0.01);
        });
    });

    describe("subtractTen", () => {

        it("Should return undefined if passed parameter is not a number", () => {
            const expected = undefined;

            const NaNParam = "I'm a string";
            const actual = mathEnforcer.subtractTen(NaNParam);

            expect(actual).to.be.equal(expected);
        });

        it("Should return the number passed subtracted by 10", () => {
            const numberToPass = 15;
            const expected = numberToPass - 10;

            const actual = mathEnforcer.subtractTen(numberToPass);

            expect(actual).to.be.equal(expected);
        });

        it("Should return correct result when passed floating point number", () => {
            const passedNumber = 11.1;
            const expected = passedNumber - 10;

            const actual = mathEnforcer.subtractTen(passedNumber);

            expect(actual).to.be.closeTo(expected, 0.01);
        });

    });

    describe("sum", () => {

        it("Should return undefined when the first parameter is not a number", () => {
            const expected = undefined;

            const stringParam = "I'm not a number";
            const actual = mathEnforcer.sum(stringParam, 5);

            expect(actual).to.equal(expected);
        });

        it("Should return undefined when the second parameter is not a number", () => {
            const expected = undefined;

            const stringParam = "I'm not a number";
            const actual = mathEnforcer.sum(2, stringParam);

            expect(actual).to.equal(expected);
        });

        it("Should return the sum of the passed valid arguments", () => {
            const firstParameter = 5;
            const secondParameter = 5;
            const expected = firstParameter + secondParameter;

            const actual = mathEnforcer.sum(firstParameter, secondParameter);

            expect(actual).to.equal(expected);
        });

        it("Should return correct result when passed floating point number", () => {
            const passedFirstNumber = 1.5;
            const passedSecondNumber = 1.5;
            const expected = passedFirstNumber + passedSecondNumber;

            const actual = mathEnforcer.sum(passedFirstNumber, passedSecondNumber);

            expect(actual).to.be.closeTo(expected, 0.01);
        });

    });
});