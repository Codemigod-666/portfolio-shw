AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hide');
    initAnimations();
  }, 2000);
});
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
  }, 100);
});
document.querySelectorAll('a, button, .project-card, .skill-card').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    follower.style.transform = 'scale(2)';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    follower.style.transform = 'scale(1)';
  });
});
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  if (currentScroll > lastScroll && currentScroll > 500) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
const typed = new Typed('.typed-text', {
  strings: [
    'Full Stack Developer',
    'Java Expert',
    'Spring Boot Specialist',
    'Problem Solver',
    'Tech Enthusiast'
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#6366f1'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#6366f1',
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
const codeText = document.querySelector('.code-text');
const codeSnippets = [
  `
public class Portfolio {
  private String passion = "coding";
  private boolean learning = true;
  public void create() {
    while(learning) {
      build();
      innovate();
    }
  }
}`,
  `
@RestController
@RequestMapping("/api")
public class ProjectController {
  @GetMapping("/projects")
  public List<Project> getAll() {
    return projectService
      .findAll()
      .stream()
      .filter(Project::isAwesome)
      .collect(toList());
  }
}`,
  `
const developer = {
  name: 'Shweta Narkhede',
  skills: ['Java', 'Spring Boot', 
           'MySQL', 'Angular'],
  passion: 'Building scalable apps',
  code: () => {
    return excellence;
  }
};`
];
let codeIndex = 0;
function typeCode() {
  if (codeText) {
    codeText.textContent = '';
    const currentSnippet = codeSnippets[codeIndex];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < currentSnippet.length) {
        codeText.textContent += currentSnippet[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          codeIndex = (codeIndex + 1) % codeSnippets.length;
          typeCode();
        }, 3000);
      }
    }, 30);
  }
}
setTimeout(typeCode, 1000);
function initAnimations() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  gsap.timeline()
    .from('.hero-greeting', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5
    })
    .from('.hero-title', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.5')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.5')
    .from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1
    }, '-=0.5')
    .from('.hero-buttons .btn', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2
    }, '-=0.5');
  gsap.utils.toArray('.shape').forEach(shape => {
    gsap.to(shape, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  });
  gsap.from('.skill-card', {
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.skills-grid',
      start: 'top 90%'
    }
  });
  gsap.set('.project-card', {
    opacity: 1,
    scale: 1
  });
  gsap.from('.project-card', {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.projects-wrapper',
      start: 'top 95%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  });
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      scrollTrigger: {
        trigger: title,
        start: 'top 95%'
      }
    });
  });
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-value'));
    ScrollTrigger.create({
      trigger: stat,
      start: 'top 95%',
      once: true,
      onEnter: () => {
        gsap.to(stat, {
          textContent: target,
          duration: 1.5,
          ease: 'power1.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            stat.textContent = Math.ceil(this.targets()[0].textContent);
          }
        });
      }
    });
  });
  document.querySelectorAll('.level-fill').forEach(bar => {
    const level = bar.getAttribute('data-level');
    bar.style.setProperty('--level', level + '%');
    ScrollTrigger.create({
      trigger: bar,
      start: 'top 95%',
      once: true,
      onEnter: () => {
        bar.style.animation = 'fillBar 1.5s ease forwards';
      }
    });
  });
}
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
  max: 15,
  speed: 400,
  glare: true,
  'max-glare': 0.2
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}
document.querySelectorAll('.magnetic-element').forEach(element => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'translate(0, 0)';
  });
});
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'path/to/resume.pdf'; 
  link.download = 'Shweta_Narkhede_Resume.pdf';
  link.click();
}
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);
document.querySelectorAll('.reveal-text, .reveal-image, .reveal-scale').forEach(el => {
  observer.observe(el);
});
let mouseTrail = [];
const trailLength = 20;
for (let i = 0; i < trailLength; i++) {
  const trail = document.createElement('div');
  trail.className = 'mouse-trail';
  trail.style.cssText = `
    position: fixed;
    width: ${10 - i * 0.4}px;
    height: ${10 - i * 0.4}px;
    background: rgba(99, 102, 241, ${0.5 - i * 0.02});
    border-radius: 50%;
    pointer-events: none;
    z-index: 9997;
    transition: transform 0.1s ease;
  `;
  document.body.appendChild(trail);
  mouseTrail.push(trail);
}
let mouseX = 0, mouseY = 0;
let trailX = [], trailY = [];
for (let i = 0; i < trailLength; i++) {
  trailX.push(0);
  trailY.push(0);
}
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function animateTrail() {
  trailX[0] = mouseX;
  trailY[0] = mouseY;
  for (let i = 1; i < trailLength; i++) {
    trailX[i] += (trailX[i - 1] - trailX[i]) * 0.3;
    trailY[i] += (trailY[i - 1] - trailY[i]) * 0.3;
    mouseTrail[i].style.left = trailX[i] + 'px';
    mouseTrail[i].style.top = trailY[i] + 'px';
  }
  requestAnimationFrame(animateTrail);
}
animateTrail();
window.addEventListener('beforeunload', () => {
  document.body.style.opacity = '0';
});
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  setTimeout(() => {
    document.querySelectorAll('.hero-content > *').forEach((el, index) => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 500);
});
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
const optimizedScroll = debounce(() => {
}, 100);
window.addEventListener('scroll', optimizedScroll);
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});
function activateEasterEgg() {
  document.body.style.animation = 'rainbow 2s linear infinite';
  setTimeout(() => {
    document.body.style.animation = '';
  }, 5000);
}
const style = document.createElement('style');
style.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);
console.log('%c Welcome to my portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Built with ❤️ and lots of ☕', 'font-size: 14px; color: #6366f1;');