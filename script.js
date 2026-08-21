function calculate() {
    const incomeInput = document.getElementById("income");
    const result = document.getElementById("result");

    const income = Number(incomeInput.value);

    if (incomeInput.value === "") {
        result.innerText = "Please enter your income.";
        return;
    }

    if (income < 0) {
        result.innerText = "Income cannot be negative.";
        return;
    }

    const tax = calculateTax(income);

    result.innerText =
        "Calculated Tax: $" + tax.toFixed(2);
}