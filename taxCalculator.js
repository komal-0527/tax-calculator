function calculateTax(income) {
    income = Number(income);

    if (income <= 0) {
        return 0;
    }

    if (income <= 10000) {
        return income * 0.10;
    }

    if (income <= 20000) {
        return 10000 * 0.10 + (income - 10000) * 0.15;
    }

    return 10000 * 0.10 +
           10000 * 0.15 +
           (income - 20000) * 0.20;
}

if (typeof module !== "undefined") {
    module.exports = {
        calculateTax
    };
}
