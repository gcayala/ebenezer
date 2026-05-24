/* ===== EBENEZER SUPERMERCADO - APP LOGIC ===== */

function navigateTo(viewId) {
  // Ocultar todas las vistas
  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });
  
  // Mostrar la vista objetivo
  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
    // Forzar reflow para reiniciar la animación de la vista
    void target.offsetWidth;
    target.classList.add('active');
  }
  
  // Actualizar estado activo en el menú de navegación
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.view === viewId);
  });
  
  // Scroll al top de manera suave
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Reiniciar el Intersection Observer para las animaciones Reveal
  setTimeout(initScrollReveal, 150);
}

// --- Cart ---
let cartCount = 0;
function addToCart(btn) {
  cartCount++;
  const counter = document.getElementById('cart-counter');
  counter.textContent = cartCount;
  counter.classList.add('visible');
  
  // Animación Pop
  counter.classList.remove('pop');
  void counter.offsetWidth;
  counter.classList.add('pop');

  // Feedback visual en el botón (Ripple sutil)
  if (btn) {
    btn.style.transform = 'scale(0.85)';
    setTimeout(() => { btn.style.transform = ''; }, 150);
  }
}

// --- Tabs Logic ---
function initTabs() {
  document.querySelectorAll('.bb-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.bb-tabs-group');
      
      // Remover clases activas
      group.querySelectorAll('.bb-tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.bb-tab-content').forEach(c => c.classList.remove('active'));
      
      // Añadir clase activa al target
      btn.classList.add('active');
      const target = group.querySelector(`[data-tab="${btn.dataset.target}"]`);
      if (target) target.classList.add('active');
    });
  });
}

// --- Accordion Logic ---
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      
      // Cerrar todos los items dentro del mismo contenedor
      item.closest('.accordion-container').querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
      });
      
      // Si no estaba abierto, abrirlo
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// --- Scroll Reveal (Intersection Observer) ---
function initScrollReveal() {
  // Limpiar clases visibles previas si el usuario navega a otra vista y regresa
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      el.classList.remove('visible');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  // Event listeners para la navegación
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(a.dataset.view);
    });
  });

  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      const isVisible = links.style.display === 'flex';
      
      links.style.display = isVisible ? 'none' : 'flex';
      links.style.position = 'absolute';
      links.style.top = '100%';
      links.style.left = '0';
      links.style.right = '0';
      links.style.background = 'rgba(249, 248, 244, 0.98)';
      links.style.padding = '1.5rem';
      links.style.flexDirection = 'column';
      links.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
      links.style.borderTop = '1px solid rgba(203, 196, 210, 0.3)';
    });
  }

  // Inicializar componentes
  initTabs();
  initAccordion();
  initScrollReveal();

  // Forzar la vista default al Home
  navigateTo('view-home');
});