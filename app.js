function updateCaseNumber(product, price, isincreasing) {
    const Input = document.getElementById(product + '-number');
    let Number = Input.value;

    if (isincreasing == true) {
        Number = parseInt(Number) + 1;
    }
    else if (Number > 0) {
        Number = parseInt(Number) - 1;
    }

    Input.value = Number;
    // update Case Price
    const Price = document.getElementById(product + '-price');
    Price.innerText = Number * price;

}
//phone case increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
})





//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;

});

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;

});