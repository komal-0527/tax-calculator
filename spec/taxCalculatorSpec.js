const { calculateTax } = require("../taxCalculator");

describe("Tax Calculator", () => {
  it("should return 0 tax for income of 12500", () => {
    expect(calculateTax(12500)).toBe(0);
  });

  it("should calculate 20% tax for income between 12500 and 50000", () => {
    expect(calculateTax(50000)).toBe(7500);
  });

  it("should calculate 40% tax for income between 50000 and 150000", () => {
    expect(calculateTax(100000)).toBe(27500);
  });

it("should calculate 45% tax for income above 150000", () => {
    expect(calculateTax(200000)).toBe(70000);
});

  it("should return 0 for income below the tax threshold", () => {
    expect(calculateTax(10000)).toBe(0);
  });
});
