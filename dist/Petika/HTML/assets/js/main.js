/**
 * Petika — Contemporary Single Page Portfolio Template
 * Author: KD Themes (AI-Template-Pipeline)
 * Version: 1.0.0
 * Pure Vanilla JavaScript (ES6+) — Zero jQuery Dependencies
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initStickyHeader();
  initScrollSpy();
  initPortfolioFilter();
  initProjectModal();
  initContactForm();
  initCopyPills();
  initMetricCounters();
  initBackToTop();
});

/* ==========================================================================
   1. Theme Toggle Engine (Dark & Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.js-theme-toggle');
  if (!themeToggleBtns.length) return;

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('petika-theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('petika-theme', theme);

    // Update aria labels for accessibility
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    });
  };

  // Bind click handlers
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  });

  // Listen for OS system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('petika-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

/* ==========================================================================
   2. Sticky Navbar Glass Elevation
   ========================================================================== */
function initStickyHeader() {
  const navbar = document.querySelector('.petika-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   3. Active Scroll-Spy Navigation
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.petika-nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   4. Pure Vanilla JS Portfolio Category Filtering
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const projectItems = document.querySelectorAll('.project-item');
  if (!filterBtns.length || !projectItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter project cards
      projectItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category') || '';
        if (targetFilter === 'all' || itemCategories.split(' ').includes(targetFilter)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Case Study Modal Population
   ========================================================================== */
function initProjectModal() {
  const modalEl = document.getElementById('projectModal');
  if (!modalEl) return;

  const modalTriggers = document.querySelectorAll('.js-open-project-modal');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.project-card') || trigger;

      // Extract metadata from card data attributes
      const title = card.getAttribute('data-project-title') || 'Project Showcase';
      const category = card.getAttribute('data-project-category') || 'Case Study';
      const client = card.getAttribute('data-project-client') || 'Client Partner';
      const year = card.getAttribute('data-project-year') || '2025';
      const desc = card.getAttribute('data-project-desc') || '';
      const challenge = card.getAttribute('data-project-challenge') || '';
      const solution = card.getAttribute('data-project-solution') || '';
      const tags = (card.getAttribute('data-project-tags') || '').split(',');
      const metrics = (card.getAttribute('data-project-metrics') || '').split('|');
      const imageSrc = card.getAttribute('data-project-image') || '';
      const demoUrl = card.getAttribute('data-project-link') || '#';

      // Populate Modal Fields
      document.getElementById('modalProjectTitle').textContent = title;
      document.getElementById('modalProjectCategory').textContent = category;
      document.getElementById('modalProjectClient').textContent = client;
      document.getElementById('modalProjectYear').textContent = year;
      document.getElementById('modalProjectDesc').textContent = desc;
      document.getElementById('modalProjectChallenge').textContent = challenge;
      document.getElementById('modalProjectSolution').textContent = solution;
      
      const heroImg = document.getElementById('modalProjectHeroImg');
      if (heroImg && imageSrc) {
        heroImg.setAttribute('src', imageSrc);
        heroImg.setAttribute('alt', `${title} case study screenshot`);
      }

      const liveBtn = document.getElementById('modalProjectLiveBtn');
      if (liveBtn) {
        liveBtn.setAttribute('href', demoUrl);
      }

      // Render Tags
      const tagsContainer = document.getElementById('modalProjectTags');
      if (tagsContainer) {
        tagsContainer.innerHTML = '';
        tags.forEach(tag => {
          if (tag.trim()) {
            const span = document.createElement('span');
            span.className = 'tag-chip';
            span.textContent = tag.trim();
            tagsContainer.appendChild(span);
          }
        });
      }

      // Render Metrics Bar
      const metricsContainer = document.getElementById('modalProjectMetrics');
      if (metricsContainer) {
        metricsContainer.innerHTML = '';
        metrics.forEach(metric => {
          const parts = metric.split(':');
          if (parts.length === 2) {
            const item = document.createElement('div');
            item.className = 'modal-metric-item';
            item.innerHTML = `
              <div class="modal-metric-num">${parts[0].trim()}</div>
              <p class="modal-metric-lbl">${parts[1].trim()}</p>
            `;
            metricsContainer.appendChild(item);
          }
        });
      }

      // Show Bootstrap Modal
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    });
  });
}

/* ==========================================================================
   6. Validated Interactive Contact Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBanner = document.getElementById('contactAlert');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check honeypot
    const honeypot = document.getElementById('formHoneypot');
    if (honeypot && honeypot.value) {
      // Bot detected, silently abort
      return;
    }

    let isValid = true;
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const budgetInput = document.getElementById('contactBudget');
    const messageInput = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmitBtn');

    // Validation rules
    const inputs = [nameInput, emailInput, budgetInput, messageInput];
    inputs.forEach(input => {
      if (!input) return;
      if (!input.checkValidity() || !input.value.trim()) {
        input.classList.add('is-invalid');
        isValid = false;
      } else {
        input.classList.remove('is-invalid');
      }

      // Realtime validation on input
      input.addEventListener('input', () => {
        if (input.checkValidity() && input.value.trim()) {
          input.classList.remove('is-invalid');
        }
      }, { once: true });
    });

    if (!isValid) return;

    // Simulate loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      <span>Sending Message...</span>
    `;

    // Simulate realistic 800ms server dispatch
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();

      if (alertBanner) {
        alertBanner.className = 'contact-alert-banner contact-alert-success';
        alertBanner.style.display = 'block';
        alertBanner.textContent = '✓ Inquiry sent successfully! I will review your project details and respond within 4 hours.';

        setTimeout(() => {
          alertBanner.style.display = 'none';
        }, 8000);
      }
    }, 850);
  });
}

/* ==========================================================================
   7. 1-Click Copy Contact Pills
   ========================================================================== */
function initCopyPills() {
  const copyPills = document.querySelectorAll('.js-copy-pill');
  if (!copyPills.length) return;

  copyPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = pill.getAttribute('data-copy');
      const badge = pill.querySelector('.contact-copy-badge');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        if (badge) {
          const originalText = badge.textContent;
          badge.textContent = 'Copied! ✓';
          badge.style.color = '#10B981';

          setTimeout(() => {
            badge.textContent = originalText;
            badge.style.color = '';
          }, 2000);
        }
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });
}

/* ==========================================================================
   8. Metric Counter Number Animation
   ========================================================================== */
function initMetricCounters() {
  const counters = document.querySelectorAll('.js-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        const prefix = entry.target.getAttribute('data-prefix') || '';
        const suffix = entry.target.getAttribute('data-suffix') || '';
        const decimals = +entry.target.getAttribute('data-decimals') || 0;
        let count = 0;
        const duration = 1200;
        const step = target / (duration / 16);

        const updateCounter = () => {
          count += step;
          if (count < target) {
            entry.target.textContent = `${prefix}${decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}${suffix}`;
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.textContent = `${prefix}${decimals > 0 ? target.toFixed(decimals) : target}${suffix}`;
          }
        };

        updateCounter();
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));
}

/* ==========================================================================
   9. Back to Top Floating Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.js-back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
