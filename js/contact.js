// ===== CONTACT PAGE =====

document.getElementById('navToggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = (document.getElementById('cFirstName').value + ' ' + document.getElementById('cLastName').value).trim();
  const email = document.getElementById('cEmail').value;
  const phone = document.getElementById('cPhone').value;
  const subject = document.getElementById('cSubject').value;
  const notes = document.getElementById('cMessage').value;
  if (typeof saveInquiry === 'function') {
    saveInquiry({ type: 'inquiry', vehicle: subject, vehicleId: null, name, email, phone, startDate: '', endDate: '', notes });
  }
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('contactSuccess').style.display = 'block';
});
