/* ============================================
   PLASTIC SURGERY CLINIC - INTERACTIVE SCRIPT
   ============================================ */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Form validation and submission
const consultationForm = document.getElementById('consultation-form');
if (consultationForm) {
  consultationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const procedure = document.getElementById('procedure').value;
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !phone || !procedure) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    consultationForm.reset();
  });
}

// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    showSuccessMessage();
    contactForm.reset();
  });
}

// Success message display
function showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.innerHTML = '<strong>Success!</strong> Thank you for your inquiry. We will contact you shortly.';
  successDiv.style.cssText = `
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    animation: slideIn 0.3s ease-in-out;
  `;
  
  const form = document.querySelector('form');
  if (form) {
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }
}

// Add animation styles
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed in future)
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  
  // Log page load for analytics testing
  console.log('Page loaded:', document.title);
  console.log('URL:', window.location.href);
});

// Track CTA clicks for analytics testing
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
  button.addEventListener('click', function () {
    const buttonText = this.textContent;
    const buttonHref = this.href || 'no-href';
    console.log('CTA clicked:', {
      text: buttonText,
      href: buttonHref,
      timestamp: new Date().toISOString()
    });
  });
});

// Track form interactions
document.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('focus', function () {
    console.log('Form field focused:', {
      name: this.name || this.id,
      type: this.type,
      timestamp: new Date().toISOString()
    });
  });
});
