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

  // Initialize Join Now visibility logic
  initializeJoinNowLogic();
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

// ===== JOIN NOW VISIBILITY LOGIC =====
// Converts time string (HH:MM or H:MM format) to minutes since midnight
function timeToMinutes(timeStr) {
  // Handle formats like "5:00 PM", "17:00", etc.
  const timeMatch = timeStr.match(/(\d+):(\d+)\s*(AM|PM)?/i);
  if (!timeMatch) return null;
  
  let hours = parseInt(timeMatch[1]);
  const minutes = parseInt(timeMatch[2]);
  const period = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
  
  // Convert to 24-hour format if AM/PM is present
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  
  return hours * 60 + minutes;
}

// Get current time in IST (UTC+5:30)
function getCurrentISTTime() {
  const now = new Date();
  // Offset to convert from local timezone to IST
  const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
  const localOffset = now.getTimezoneOffset() * 60 * 1000;
  const istTime = new Date(now.getTime() + istOffset + localOffset);
  return istTime;
}

// Check if Join Now should be visible for an event
// Shows from (startTime - 15 mins) to (endTime + 30 mins), all in IST
// timeString format: "5:00 PM - 6:00 PM IST" or "5:00 PM" or "17:00 - 18:00"
function isJoinNowVisible(eventDate, timeString) {
  try {
    const istTime = getCurrentISTTime();
    
    // Parse event date
    const eventDateObj = new Date(eventDate);
    const year = eventDateObj.getFullYear();
    const month = eventDateObj.getMonth();
    const day = eventDateObj.getDate();
    
    // Extract start and end times from timeString
    // Handle formats like "5:00 PM - 6:00 PM IST" or "5:00 PM - 6:00 PM"
    const timeMatch = timeString.match(/(\d+):(\d+)\s*(AM|PM)?/gi);
    
    if (!timeMatch || timeMatch.length < 1) {
      return false;
    }
    
    // Get start time
    const startTimeStr = timeMatch[0];
    const startMinutes = timeToMinutes(startTimeStr);
    
    // Get end time (default to 1 hour after start if not provided)
    let endMinutes = startMinutes + 60;
    if (timeMatch.length >= 2) {
      endMinutes = timeToMinutes(timeMatch[1]);
    }
    
    if (startMinutes === null || endMinutes === null) {
      return false;
    }
    
    // Create event start time in IST
    const eventStart = new Date(year, month, day, 0, 0, 0);
    eventStart.setHours(Math.floor(startMinutes / 60), startMinutes % 60, 0);
    
    // Create event end time in IST
    const eventEnd = new Date(year, month, day, 0, 0, 0);
    eventEnd.setHours(Math.floor(endMinutes / 60), endMinutes % 60, 0);
    
    // Calculate visibility window
    const showStartTime = new Date(eventStart.getTime() - 15 * 60 * 1000); // 15 mins before
    const showEndTime = new Date(eventEnd.getTime() + 30 * 60 * 1000);     // 30 mins after
    
    // Check if current time falls within the window
    return istTime >= showStartTime && istTime <= showEndTime;
  } catch (error) {
    console.warn('Error checking Join Now visibility:', error);
    return false;
  }
}

// Update Join Now button visibility and adjust button widths in event-action-buttons containers
function updateJoinNowVisibility() {
  // Find all event containers with action buttons
  const eventActions = document.querySelectorAll('.event-action-buttons');
  
  eventActions.forEach(container => {
    // Get the parent event-item or card
    const eventItem = container.closest('[data-event-date]') || 
                      container.closest('.event-item') || 
                      container.closest('.upcoming-card');
    
    if (!eventItem) return;
    
    // Get event date and time from data attributes or event content
    let eventDate = eventItem.getAttribute('data-event-date');
    let eventTime = eventItem.getAttribute('data-event-time');
    
    // If attributes not found, try to extract from event-info-meta or similar
    if (!eventDate) {
      const dateBlock = eventItem.querySelector('.event-date-block');
      if (dateBlock) {
        const day = dateBlock.querySelector('.event-day')?.textContent;
        const month = dateBlock.querySelector('.event-month')?.textContent;
        const year = dateBlock.querySelector('.event-year')?.textContent;
        if (day && month && year) {
          // Convert back to YYYY-MM-DD format
          const monthNum = new Date(`${month} 1, 2024`).getMonth() + 1;
          eventDate = `${year}-${String(monthNum).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        }
      }
    }
    
    if (!eventTime) {
      const metaSpan = eventItem.querySelector('.event-info-meta span');
      if (metaSpan) {
        eventTime = metaSpan.textContent.replace('🕐 ', '').trim();
      }
    }
    
    // Get all buttons in this container
    const joinNowBtn = container.querySelector('a[href*="meet"], a[href*="zoom"], a[href*="teams"]') || 
                       container.querySelector('a:contains("Join")');
    const registerBtn = container.querySelector('a:contains("Register")');
    
    // Alternative: Find by checking link text content
    let actualJoinNowBtn = null;
    let actualRegisterBtn = null;
    
    container.querySelectorAll('a').forEach(btn => {
      const text = btn.textContent.trim().toLowerCase();
      if (text.includes('join')) {
        actualJoinNowBtn = btn;
      } else if (text.includes('register')) {
        actualRegisterBtn = btn;
      }
    });
    
    if (actualJoinNowBtn && eventDate && eventTime) {
      const shouldShow = isJoinNowVisible(eventDate, eventTime);
      
      if (shouldShow) {
        // Show Join Now button
        actualJoinNowBtn.style.display = 'inline-block';
        actualJoinNowBtn.style.opacity = '1';
        actualJoinNowBtn.style.visibility = 'visible';
        
        // Make container flex if not already
        container.style.display = 'flex';
        container.style.gap = '8px';
        container.style.flexWrap = 'wrap';
        
        // Both buttons share space equally (50% each in flex)
        if (actualRegisterBtn) {
          actualRegisterBtn.style.flex = '1 0 auto';
          actualRegisterBtn.style.minWidth = 'auto';
        }
        actualJoinNowBtn.style.flex = '1 0 auto';
      } else {
        // Hide Join Now button
        actualJoinNowBtn.style.display = 'none';
        actualJoinNowBtn.style.opacity = '0';
        actualJoinNowBtn.style.visibility = 'hidden';
        
        // Register button takes full space
        if (actualRegisterBtn) {
          actualRegisterBtn.style.flex = '1 0 100%';
        }
      }
    }
  });
}

// Initialize and set up auto-refresh for Join Now visibility
function initializeJoinNowLogic() {
  // Initial check
  updateJoinNowVisibility();

  // Check every minute for visibility changes (60000ms = 1 minute)
  setInterval(updateJoinNowVisibility, 60000);
  
  // Also check every 10 seconds during potential visibility window
  setInterval(() => {
    const hasAnyEvent = document.querySelectorAll('.event-action-buttons').length > 0;
    if (hasAnyEvent) {
      updateJoinNowVisibility();
    }
  }, 10000);
}

// Function to be called after dynamic content is rendered (for homepage and events page)
// Call this after rendering event cards dynamically
function updateJoinNowAfterRender() {
  // Give DOM a moment to settle
  setTimeout(() => {
    updateJoinNowVisibility();
  }, 100);
}