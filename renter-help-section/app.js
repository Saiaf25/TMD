// ===== LANGUAGE TOGGLE =====
function toggleLang() {
  const html = document.documentElement;
  const btn = document.querySelector('.lang-toggle');
  if (html.getAttribute('dir') === 'rtl') {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    btn.textContent = 'العربية';
  } else {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    btn.textContent = 'English';
  }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ===== SEARCH AUTOCOMPLETE =====
const searchData = [
  { text: 'How to create an account', url: 'for-lessees.html#getting-started' },
  { text: 'Identity verification', url: 'for-lessees.html#identity' },
  { text: 'Making a booking', url: 'for-lessees.html#booking' },
  { text: 'Payment methods', url: 'for-lessees.html#payments' },
  { text: 'Cancellation policies', url: 'for-lessees.html#cancellations' },
  { text: 'Refund timeline', url: 'for-lessees.html#cancellations' },
  { text: 'Creating a listing', url: 'for-lessors.html#listings' },
  { text: 'Pricing strategies', url: 'for-lessors.html#listings' },
  { text: 'Managing bookings', url: 'for-lessors.html#bookings' },
  { text: 'Payments & earnings', url: 'for-lessors.html#earnings' },
  { text: 'Security deposits', url: 'for-lessors.html#protection' },
  { text: 'Damage claims', url: 'for-lessors.html#protection' },
  { text: 'Car rental requirements', url: 'for-lessees.html#cars' },
  { text: 'Property rental guide', url: 'for-lessees.html#properties' },
  { text: 'Safety tips', url: 'safety.html' },
  { text: 'Recognizing scams', url: 'safety.html#scams' },
  { text: 'Contact support', url: 'contact.html' },
  { text: 'Report an issue', url: 'contact.html' },
];

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input || !suggestions) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (q.length < 2) { suggestions.classList.remove('show'); return; }
    const matches = searchData.filter(d => d.text.toLowerCase().includes(q)).slice(0, 5);
    if (matches.length === 0) { suggestions.classList.remove('show'); return; }
    suggestions.innerHTML = matches.map(m =>
      `<a href="${m.url}" class="suggestion-item">${m.text}</a>`
    ).join('');
    suggestions.classList.add('show');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) suggestions.classList.remove('show');
  });
});

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const inner = item.querySelector('.accordion-body-inner');
      const isOpen = item.classList.contains('open');

      // Close all others in same section
      item.parentElement.querySelectorAll('.accordion-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.accordion-body').style.maxHeight = '0';
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });
});

// ===== TROUBLESHOOTING TABS =====
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

// ===== FEEDBACK =====
function sendFeedback(helpful) {
  const widget = event.target.closest('.feedback-widget');
  widget.innerHTML = `<p style="color: #059669; font-weight: 600;">Thank you for your feedback!</p>`;
}

// ===== SMOOTH SCROLL FOR SIDEBAR =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidebar-link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active state
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
});
