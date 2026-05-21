/* ===== EBENEZER SUPERMERCADO - APP LOGIC ===== */

// --- View / SPA Navigation ---
function navigateTo(viewId) {
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });
  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
    // Force reflow before adding active class for animation
    void target.offsetWidth;
    target.classList.add('active');
  }
  // Update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.view === viewId);
  });
  // Re-run scroll reveals for newly visible view
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initScrollReveal, 100);
}

// --- Cart ---
let cartCount = 0;
function addToCart(btn) {
  cartCount++;
  const counter = document.getElementById('cart-counter');
  counter.textContent = cartCount;
  counter.classList.add('visible');
  // Pop animation
  counter.classList.remove('pop');
  void counter.offsetWidth;
  counter.classList.add('pop');

  // Button ripple feedback
  if (btn) {
    btn.style.transform = 'scale(0.85)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  }
}

// --- Tabs ---
function initTabs() {
  document.querySelectorAll('.bb-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.bb-tabs-group');
      group.querySelectorAll('.bb-tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.bb-tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const target = group.querySelector(`[data-tab="${btn.dataset.target}"]`);
      if (target) target.classList.add('active');
    });
  });
}

// --- Accordion ---
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      // Close all in same container
      item.closest('.accordion-container').querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// --- Scroll Reveal (Intersection Observer) ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  // Nav click handlers
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(a.dataset.view);
    });
  });

  // Mobile menu
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'var(--bg-warm)';
      links.style.padding = '1rem';
      links.style.flexDirection = 'column';
      links.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
    });
  }

  initTabs();
  initAccordion();
  initScrollReveal();

  // Default view
  navigateTo('view-home');
});
