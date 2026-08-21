function calculateTax(income) {
    income = Number(income);

    let tax = 0;

    if (income <= 12500) {
        tax = 0;
    } else if (income <= 50000) {
        tax = (income - 12500) * 0.20;
    } else if (income <= 150000) {
        tax =
            (37500 * 0.20) +
            ((income - 50000) * 0.40);
    } else {
        tax =
            (37500 * 0.20) +
            (100000 * 0.40) +
            ((income - 150000) * 0.45);
    }

    return tax;
}

// Export for Jasmine/Node
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        calculateTax
    };
}