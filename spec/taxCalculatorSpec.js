const { calculateTax } = require("../taxCalculator");

describe("Tax Calculator", () => {

    it("should return 0 for zero income", () => {
        expect(calculateTax(0)).toBe(0);
    });

    it("should calculate 10% tax for income up to 10000", () => {
        expect(calculateTax(10000)).toBe(1000);
    });

    it("should calculate progressive tax for income of 15000", () => {
        expect(calculateTax(15000)).toBe(1750);
    });

    it("should calculate progressive tax for income of 25000", () => {
        expect(calculateTax(25000)).toBe(3500);
    });

    it("should return 0 for negative income", () => {
        expect(calculateTax(-5000)).toBe(0);
    });

});
