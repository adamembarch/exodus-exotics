(function () {
  const FLEET_KEY   = 'exodus_fleet';
  const INQUIRY_KEY = 'exodus_inquiries';

  function getFleet() {
    try {
      const raw = localStorage.getItem(FLEET_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function saveFleet(cars) {
    localStorage.setItem(FLEET_KEY, JSON.stringify(cars));
  }

  function getInquiries() {
    try {
      const raw = localStorage.getItem(INQUIRY_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function saveInquiry(inquiry) {
    const list = getInquiries();
    list.unshift({ ...inquiry, id: Date.now(), submittedAt: new Date().toISOString() });
    localStorage.setItem(INQUIRY_KEY, JSON.stringify(list));
  }

  // Seed fleet from hardcoded data on first ever load
  let fleet = getFleet();
  if (!fleet) {
    fleet = typeof CARS !== 'undefined' ? CARS.slice() : [];
    saveFleet(fleet);
  }

  window.CARS         = fleet;
  window.getFleet     = getFleet;
  window.saveFleet    = saveFleet;
  window.getInquiries = getInquiries;
  window.saveInquiry  = saveInquiry;
})();
