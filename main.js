// SUG Chennai – main.js
// Shared utilities across all pages

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Scroll-based nav styling
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(0,0,0,0.5)' : 'none';
    });
  }

  // Set current year in copyright
  document.querySelectorAll('.current-year').forEach(el => el.textContent = new Date().getFullYear());

  // Scroll-to-top button
  const scrollBtn = document.createElement('button');
  scrollBtn.className = 'scroll-top';
  scrollBtn.setAttribute('aria-label', 'Scroll to top');
  scrollBtn.innerHTML = '↑';
  document.body.appendChild(scrollBtn);
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Intersection Observer for scroll-reveal animations
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Shared helpers
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

function formatDateShort(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
}

function getDay(dateStr) { return new Date(dateStr).getDate(); }
function getMonth(dateStr) { return new Date(dateStr).toLocaleString('en-IN', {month:'short'}); }
function getYear(dateStr) { return new Date(dateStr).getFullYear(); }

function statusBadge(status) {
  return status === 'upcoming'
    ? '<span class="status-badge status-upcoming">● Upcoming</span>'
    : '<span class="status-badge status-completed">✓ Completed</span>';
}
