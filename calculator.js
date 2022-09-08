window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initValues  = { amount: 10000, years: 10, rate: 4.5 };
  const loanAmount = document.getElementById("loan-amount");
  loanAmount.value = initValues.amount;
  const loanYears = document.getElementById("loan-years");
  loanYears.value = initValues.years;
  const loanRate = document.getElementById("loan-rate");
  loanRate.value = initValues.rate;
  update();
}

// console.log(initValues);


// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(initValues) {
  const monthlyRate = (initValues.rate / 100) / 12;
  const n = Math.floor(initValues.years * 12);
  return (
    (monthlyRate * initValues.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyRate) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthlyRate;
}
