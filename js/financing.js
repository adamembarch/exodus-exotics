// ===== FINANCING PAGE =====

document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

function fmt(num) {
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function calculate() {
  const vehiclePrice = parseFloat(document.getElementById('vehiclePrice').value) || 0;
  const downPayment  = parseFloat(document.getElementById('downPayment').value)  || 0;
  const tradeIn      = parseFloat(document.getElementById('tradeIn').value)      || 0;
  const annualRate   = parseFloat(document.getElementById('interestRate').value) || 0;
  const termMonths   = parseInt(document.getElementById('loanTerm').value)       || 60;

  const loanAmount = Math.max(0, vehiclePrice - downPayment - tradeIn);
  const monthlyRate = annualRate / 100 / 12;

  let monthly;
  if (monthlyRate === 0) {
    monthly = loanAmount / termMonths;
  } else {
    monthly = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
              (Math.pow(1 + monthlyRate, termMonths) - 1);
  }

  const totalPaid    = monthly * termMonths;
  const totalInterest = totalPaid - loanAmount;

  document.getElementById('resLoan').textContent     = fmt(loanAmount);
  document.getElementById('resMonthly').textContent  = fmt(monthly) + '/mo';
  document.getElementById('resInterest').textContent = fmt(Math.max(0, totalInterest));
  document.getElementById('resTotal').textContent    = fmt(totalPaid + downPayment + tradeIn);
}

document.getElementById('calcBtn').addEventListener('click', calculate);

// Auto-calculate on input change
['vehiclePrice','downPayment','tradeIn','interestRate','loanTerm'].forEach(id => {
  document.getElementById(id).addEventListener('input', calculate);
});

// Run on load
calculate();

// Finance application form
document.getElementById('financeForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('financeForm').style.display = 'none';
  document.getElementById('financeSuccess').style.display = 'block';
});
