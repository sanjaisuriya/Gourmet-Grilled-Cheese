/**
 * THE MELT DISTRICT - Core Site JavaScript
 * Handles Theme (Dark/Light), Direction (RTL/LTR), Mobile Navigation,
 * Sticky Header, Scroll Reveal Animations, and Global Toasts.
 */

(function () {
  'use strict';

  // --- 1. THEME INITIALIZATION & TOGGLE ---
  const THEME_STORAGE_KEY = 'melt_district_theme';
  const DIR_STORAGE_KEY = 'melt_district_direction';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function updateThemeToggleIcons(theme) {
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');
    themeButtons.forEach(btn => {
      if (theme === 'dark') {
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`;
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.setAttribute('title', 'Switch to light mode');
      } else {
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        btn.setAttribute('aria-label', 'Switch to dark mode');
        btn.setAttribute('title', 'Switch to dark mode');
      }
    });
  }

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // --- 2. RTL / LTR INITIALIZATION & TOGGLE ---
  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_STORAGE_KEY, dir);
    updateDirToggleIcons(dir);
  }

  function updateDirToggleIcons(dir) {
    const dirButtons = document.querySelectorAll('.rtl-toggle-btn');
    dirButtons.forEach(btn => {
      const nextDir = dir === 'rtl' ? 'LTR' : 'RTL';
      btn.setAttribute('aria-label', `Switch layout direction to ${nextDir}`);
      btn.setAttribute('title', `Switch to ${nextDir} layout`);
      // Pure icon representation (no text)
      btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3L4 7l4 4"/><path d="M4 7h16"/><path d="M16 21l4-4-4-4"/><path d="M20 17H4"/></svg>`;
    });
  }

  const savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
  applyDirection(savedDir);

  // --- 3. DOM READY LISTENERS ---
  document.addEventListener('DOMContentLoaded', () => {
    // Synchronize UI icons immediately to match active document theme & direction
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateThemeToggleIcons(activeTheme);
    const activeDir = document.documentElement.getAttribute('dir') || 'ltr';
    updateDirToggleIcons(activeDir);

    // Theme buttons event (silent toggle, no toast popup)
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    });

    // RTL buttons event (silent toggle, no toast popup)
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(newDir);
      });
    });

    // --- 4. STICKY HEADER SCROLL EFFECT ---
    const header = document.querySelector('.site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, { passive: true });
    }

    // --- 5. MOBILE NAVIGATION DRAWER ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.querySelector('.mobile-nav-drawer');
    const drawerCloseBtn = document.querySelector('.mobile-drawer-close');
    const drawerBackdrop = document.querySelector('.drawer-backdrop');

    function openMobileDrawer() {
      if (mobileDrawer && drawerBackdrop) {
        mobileDrawer.classList.add('active');
        drawerBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileDrawer() {
      if (mobileDrawer && drawerBackdrop) {
        mobileDrawer.classList.remove('active');
        drawerBackdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', openMobileDrawer);
    }
    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    }
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileDrawer();
        if (typeof window.closeCartDrawer === 'function') {
          window.closeCartDrawer();
        }
      }
    });

    // --- 5B. NAVIGATION DROPDOWN TOGGLES ---
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = btn.closest('.mobile-dropdown-group');
        if (parent) {
          parent.classList.toggle('open');
          const isOpen = parent.classList.contains('open');
          btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });
    });

    document.querySelectorAll('.nav-dropdown-wrapper').forEach(wrapper => {
      const toggle = wrapper.querySelector('.nav-dropdown-toggle');
      let closeTimer = null;

      wrapper.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        wrapper.classList.add('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'true');
      });

      wrapper.addEventListener('mouseleave', () => {
        closeTimer = setTimeout(() => {
          wrapper.classList.remove('open');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }, 120);
      });
    });

    document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = btn.closest('.nav-dropdown-wrapper');
        if (parent) {
          parent.classList.toggle('open');
          const isOpen = parent.classList.contains('open');
          btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown-wrapper')) {
        document.querySelectorAll('.nav-dropdown-wrapper.open').forEach(el => {
          el.classList.remove('open');
          const toggle = el.querySelector('.nav-dropdown-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // --- 6. SCROLL REVEAL (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.02,
        rootMargin: '50px 0px 50px 0px'
      });
      window.__appScrollObserver = observer;

      revealElements.forEach(el => {
        // Immediately reveal elements that are already within the viewport on page load
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    } else {
      // Fallback for browsers without observer
      revealElements.forEach(el => el.classList.add('is-revealed'));
    }

    window.refreshScrollReveal = function() {
      const unrevealed = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      unrevealed.forEach(el => {
        if (window.__appScrollObserver) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add('is-revealed');
          } else {
            window.__appScrollObserver.observe(el);
          }
        } else {
          el.classList.add('is-revealed');
        }
      });
    };

    // --- 7. BACK TO TOP BUTTON ---
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // --- 8. FOOTER NEWSLETTER FORM ---
    const newsletterForm = document.querySelector('.footer-newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input[type="email"]');
        if (input && input.value.trim() && input.checkValidity()) {
          window.showMeltToast('🎉 Welcome to the Melt Club! Check your inbox soon.', 'success');
          input.value = '';
        }
      });
    }

    // --- 8B. ACCORDION (FAQ) TOGGLES ---
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        if (!item) return;
        const isOpen = item.classList.contains('active') || item.classList.contains('open');
        const parent = item.parentElement;
        if (parent && parent.classList.contains('accordion')) {
          parent.querySelectorAll('.accordion-item').forEach(sibling => {
            sibling.classList.remove('active', 'open');
            const sHeader = sibling.querySelector('.accordion-header');
            if (sHeader) sHeader.setAttribute('aria-expanded', 'false');
            const sIcon = sibling.querySelector('.accordion-icon');
            if (sIcon) sIcon.textContent = '+';
          });
        }
        if (!isOpen) {
          item.classList.add('active', 'open');
          header.setAttribute('aria-expanded', 'true');
          const icon = header.querySelector('.accordion-icon');
          if (icon) icon.textContent = '−';
        }
      });
    });
  });

  // --- 9. GLOBAL TOAST UTILITY ---
  window.showMeltToast = function (message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : type === 'success' ? 'toast-success' : ''}`;
    
    // Choose icon
    let iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    if (type === 'success') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    }

    toast.innerHTML = `
      <span style="display:flex;align-items:center;">${iconSvg}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  };

  // --- 10. UNIVERSAL IMAGE ERROR FALLBACK ---
  // Prevents broken-image icons or visible broken alt text from appearing
  window.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      const img = e.target;
      if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = 'true';
        // Elegant inline SVG styled with warm cheese tones
        img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FFF8EB'/%3E%3Cstop offset='100%25' stop-color='%23F6E5C4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Cg fill='%23F4B942' opacity='0.8' transform='translate(360, 260) scale(3.5)'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/g%3E%3C/svg%3E";
        img.style.objectFit = 'cover';
      }
    }
  }, true);
})();
