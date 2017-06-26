import PrintNumber from "./printNumber";
import { expect } from "chai";

describe("printNumber", () => {
    let printNumber;
    let consoleLogSpy;

    beforeEach(() => {
        printNumber = new PrintNumber();
    });

    afterEach(() => {
    });

    // for multiples of three, print 'Boss'
    it("should return 'Boss'", () => {
        //Arrange
        const input = 9;

        //Act
        let output = printNumber.getPrintValue(input);

        //Assert
        expect(output).to.be.equal("Boss");
    });

    // for the multiples of five, print 'Hog'   
    it("should return 'Hog'", () => {
        //Arrange
        const input = 20;

        //Act
        let output = printNumber.getPrintValue(input);

        //Assert
        expect(output).to.be.equal("Hog");
    });

    // for numbers which are multiples of both three and five, print 'BossHog'
    it("should return 'BossHog'", () => {
        //Arrange
        const input = 60;

        //Act
        let output = printNumber.getPrintValue(input);

        //Assert
        expect(output).to.be.equal("BossHog");
    });

    // other case, don't change the input, just return it
    it("should return itself", () => {
        //Arrange
        const input = 11;

        //Act
        let output = printNumber.getPrintValue(input);

        //Assert
        expect(output).to.be.equal(input);
    });
});