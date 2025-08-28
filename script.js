// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navigation scroll background effect
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 100 
    ? 'rgba(10, 10, 10, 0.95)' 
    : 'rgba(10, 10, 10, 0.9)';
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card, .contact-item, .about-content, .card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Cursor trail effect
const cursor = document.createElement('div');
cursor.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(0,212,255,0.8) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
});

// Hide cursor when mouse leaves window
document.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});
