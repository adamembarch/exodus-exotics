// ===== FINANCING PAGE =====

document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Validate end date is after start date
document.getElementById('fEndDate').addEventListener('change', () => {
  const start = document.getElementById('fStartDate').value;
  const end   = document.getElementById('fEndDate').value;
  if (start && end && end <= start) {
    document.getElementById('fEndDate').setCustomValidity('End date must be after start date.');
  } else {
    document.getElementById('fEndDate').setCustomValidity('');
  }
});

document.getElementById('financeForm').addEventListener('submit', e => {
  e.preventDefault();

  saveInquiry({
    type:      'reservation',
    vehicle:   document.getElementById('fVehicle').value.trim() || 'General Reservation',
    vehicleId: null,
    name:      `${document.getElementById('fFirstName').value.trim()} ${document.getElementById('fLastName').value.trim()}`,
    email:     document.getElementById('fEmail').value.trim(),
    phone:     document.getElementById('fPhone').value.trim(),
    startDate: document.getElementById('fStartDate').value,
    endDate:   document.getElementById('fEndDate').value,
    notes:     document.getElementById('fNotes').value.trim(),
  });

  document.getElementById('financeForm').style.display = 'none';
  document.getElementById('financeSuccess').style.display = 'block';
});
