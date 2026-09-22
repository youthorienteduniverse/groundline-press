/* ============================================================
   GROUNDLINE PRESS — main.js
   ============================================================ */

/* ── CONFIGURATION ──────────────────────────────────────────
   Replace placeholders before going live.
   ──────────────────────────────────────────────────────────── */
const CONFIG = {
  SITE_URL:          "https://groundlinepress.com",
  CHECKOUT_URL:      "https://payhip.com/b/Xmxb7",
  CHECKOUT_URL_INTL: "PAYHIP_CHECKOUT_URL_INTL_HERE",
  FREE_CHAPTER_URL:  "https://payhip.com/b/Xs9ZI",
  CONTACT_EMAIL:     "groundlinepress@gmail.com",
};

/* ── ANALYTICS PLACEHOLDER ──────────────────────────────────
   Insert your analytics snippet here if needed.
   Update privacy.html if you add tracking.
   ──────────────────────────────────────────────────────────── */
// ANALYTICS_PLACEHOLDER

/* ── CHECKOUT LINKS ─────────────────────────────────────────── */
function wireLinks() {
  document.querySelectorAll('[data-checkout]').forEach(el => {
    const isIntl = el.dataset.checkout === 'intl';
    const url = isIntl ? CONFIG.CHECKOUT_URL_INTL : CONFIG.CHECKOUT_URL;
    el.href = url;
    if (url.startsWith('PAYHIP_')) {
      el.addEventListener('click', e => {
        e.preventDefault();
        alert('Purchase link coming soon — please check back shortly.');
      });
    }
  });

  document.querySelectorAll('[data-chapter]').forEach(el => {
    el.href = CONFIG.FREE_CHAPTER_URL;
    if (CONFIG.FREE_CHAPTER_URL.startsWith('FREE_CHAPTER_')) {
      el.addEventListener('click', e => {
        e.preventDefault();
        alert('Free chapter link coming soon — please check back shortly.');
      });
    }
  });
}

/* ── MOBILE NAV ──────────────────────────────────────────────── */
function initNav() {
  const btn  = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-mobile');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('open', !isOpen);
    if (!isOpen) {
      const first = menu.querySelector('a');
      if (first) first.focus();
    }
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      btn.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      btn.focus();
    }
  });
}

/* ── FAQ ACCORDION ───────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const a = document.getElementById(b.getAttribute('aria-controls'));
        if (a) a.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        const a = document.getElementById(btn.getAttribute('aria-controls'));
        if (a) a.classList.add('open');
      }
    });
  });
}

/* ── SMOOTH SCROLL ───────────────────────────────────────────── */
function initScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        t.setAttribute('tabindex', '-1');
        t.focus({ preventScroll: true });
      }
    });
  });
}

/* ── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  wireLinks();
  initNav();
  initFAQ();
  initScroll();
});
