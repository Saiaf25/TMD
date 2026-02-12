// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ===== SEARCH AUTOCOMPLETE =====
const searchData = [
  { text: 'كيفية إنشاء حساب', url: 'for-lessees.html#getting-started' },
  { text: 'التحقق من الهوية', url: 'for-lessees.html#identity' },
  { text: 'إجراء حجز', url: 'for-lessees.html#booking' },
  { text: 'طرق الدفع', url: 'for-lessees.html#payments' },
  { text: 'سياسات الإلغاء', url: 'for-lessees.html#cancellations' },
  { text: 'مدة الاسترداد', url: 'for-lessees.html#cancellations' },
  { text: 'إنشاء إعلان', url: 'for-lessors.html#listings' },
  { text: 'استراتيجيات التسعير', url: 'for-lessors.html#listings' },
  { text: 'إدارة الحجوزات', url: 'for-lessors.html#bookings' },
  { text: 'المدفوعات والأرباح', url: 'for-lessors.html#earnings' },
  { text: 'التأمينات', url: 'for-lessors.html#protection' },
  { text: 'مطالبات الأضرار', url: 'for-lessors.html#protection' },
  { text: 'متطلبات تأجير السيارات', url: 'for-lessees.html#cars' },
  { text: 'دليل تأجير العقارات', url: 'for-lessees.html#properties' },
  { text: 'نصائح الأمان', url: 'safety.html' },
  { text: 'التعرف على الاحتيال', url: 'safety.html#scams' },
  { text: 'تواصل مع الدعم', url: 'contact.html' },
  { text: 'الإبلاغ عن مشكلة', url: 'contact.html' },
];

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  const suggestions = document.getElementById('searchSuggestions');
  if (!input || !suggestions) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 2) { suggestions.classList.remove('show'); return; }
    const matches = searchData.filter(d => d.text.includes(q)).slice(0, 5);
    if (matches.length === 0) { suggestions.classList.remove('show'); return; }
    suggestions.innerHTML = matches.map(m =>
      `<a href="${m.url}" class="suggestion-item" style="text-align:right;">${m.text}</a>`
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
  widget.innerHTML = `<p style="color: #059669; font-weight: 600;">شكراً لملاحظاتك!</p>`;
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
