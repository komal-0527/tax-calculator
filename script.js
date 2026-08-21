function calculate() {
    const income = document.getElementById("income").value;
    const tax = calculateTax(income);

    document.getElementById("result").innerText =
        "Calculated Tax: $" + tax.toFixed(2);
}
