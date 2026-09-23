import { PORTFOLIO_DATA, certifications } from './portfolioData';

/**
 * BIJJAM SHARVANI - PORTFOLIO INTERACTION ENGINE
 * Dynamic rendering, project filtering, dark/light theme toggle, smooth navigation, and contact handling.
 */


export function initPortfolio() {
  // 1. Initialize Theme
  initTheme();

  // 2. Initialize Dynamic Content from data.js
  initSkills();
  initProjectFilters();
  initProjects();
  initEducation();
  initInternship();
  initCertifications();
  initResearch();

  // 3. Initialize Interactive Features
  initAboutInteractive();
  initNavigation();
  initScrollEffects();
  initContactForm();
  initBackToTop();
  initSmoothScroll();}

/* ==========================================================================
   SVG Icon Helper Utilities
   ========================================================================== */
function getIconSvg(name) {
  const icons = {
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    'trending-up': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    'bar-chart-2': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    'bar-chart': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    academic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
    seedling: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
  };
  return icons[name] || icons.code;
}

/* ==========================================================================
   1. Theme Toggle (Requirement 24)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeButton(toggleBtn, storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeButton(toggleBtn, newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} theme`);
    });
  }
}

function updateThemeButton(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark' ? getIconSvg('sun') : getIconSvg('moon');
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`);
  btn.setAttribute('title', `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`);
}

/* ==========================================================================
   2. Technical Skills (Requirement 6: Clean badges, no fake % or progress bars)
   ========================================================================== */
function initSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container || !PORTFOLIO_DATA.skillCategories) return;

  container.innerHTML = PORTFOLIO_DATA.skillCategories.map(cat => `
    <div class="skill-category-card reveal">
      <div class="skill-card-header">
        <div class="skill-card-icon">
          ${getIconSvg(cat.icon)}
        </div>
        <h3>${cat.category}</h3>
      </div>
      <div class="skill-pills-list">
        ${cat.skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. Project Filters (Requirement 12: All, Python / NLP, Java, Full Stack, Web Dev, Database)
   ========================================================================== */
function initProjectFilters() {
  const container = document.getElementById('project-filters-container');
  if (!container || !PORTFOLIO_DATA.projectFilterCategories) return;

  container.innerHTML = PORTFOLIO_DATA.projectFilterCategories.map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.filter}">
      ${cat.label}
    </button>
  `).join('');

  const filterBtns = container.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      filterProjects(filterVal);
    });
  });
}

function filterProjects(filterVal) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cats = (card.getAttribute('data-categories') || '').split(' ');
    if (filterVal === 'all' || cats.includes(filterVal)) {
      card.style.display = 'flex';
      card.classList.add('active');
    } else {
      card.style.display = 'none';
    }
  });
}

/* ==========================================================================
   4. Projects Showcase (Requirements 7, 8, 9, 10, 11: Text-only, no images, no accuracy %, no GitHub links)
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-grid-container');
  if (!container || !PORTFOLIO_DATA.projects) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(proj => {
    const detailsHtml = proj.details ? `
      <div class="project-details-title">Key Elements & Capabilities</div>
      <ul class="project-highlights-list">
        ${proj.details.map(d => `
          <li>
            <span class="bullet-dot"></span>
            <span>${d}</span>
          </li>
        `).join('')}
      </ul>
    ` : '';

    const techPills = proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');

    return `
      <article class="project-card reveal" data-categories="${proj.filterCategories.join(' ')}" id="project-${proj.id}">
        <div class="project-top-meta">
          <span class="project-badge">${proj.badge}</span>
        </div>

        <h3 class="project-title">${proj.title}</h3>
        <p class="project-description">${proj.description}</p>

        ${detailsHtml}

        <div class="project-tech-strip">
          ${techPills}
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   5. Education Timeline (Requirement 13: Exact values 70%, 73.5%, 100%)
   ========================================================================== */
function initEducation() {
  const container = document.getElementById('education-grid-container');
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(edu => `
    <div class="education-card reveal">
      <span class="edu-year-badge">${edu.year}</span>
      <h3 class="edu-degree">${edu.degree}</h3>
      <p class="edu-institution">${edu.institution}</p>

      <div class="edu-score-box">
        <span class="edu-score-label">${edu.scoreLabel}</span>
        <span class="edu-score-value">${edu.percentage}</span>
      </div>

      <p class="edu-details">${edu.details}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   6. Internship (Requirement 14: Green Internship)
   ========================================================================== */
function initInternship() {
  const container = document.getElementById('internship-container');
  if (!container || !PORTFOLIO_DATA.internship) return;

  const intern = PORTFOLIO_DATA.internship;
  container.innerHTML = `
    <div class="internship-card reveal">
      <div class="internship-header">
        <div>
          <h3 class="internship-role">${intern.role}</h3>
          <h4 class="internship-org">${intern.organization}</h4>
          <p class="internship-project-name">${intern.project}</p>
        </div>
        <span class="internship-badge">${intern.badge}</span>
      </div>

      <p class="internship-description">${intern.description}</p>

      <ul class="internship-points-list">
        ${intern.highlights.map(pt => `
          <li>
            ${getIconSvg('check')}
            <span>${pt}</span>
          </li>
        `).join('')}
      </ul>

      <div class="project-tech-strip">
        ${intern.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   7. Certifications (Requirements 15 & 16: Active View Certificate links)
   ========================================================================== */
function initCertifications() {
  const container = document.getElementById('certifications-grid-container');
  if (!container || !PORTFOLIO_DATA.certifications) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="cert-card reveal" id="${cert.id}">
      <div class="cert-top-meta">
        <span class="cert-category-tag">${cert.category}</span>
        <span class="cert-provider-pill">${cert.provider}</span>
      </div>

      <div class="cert-main">
        <div class="cert-icon-wrapper">
          ${getIconSvg(cert.icon)}
        </div>
        <div class="cert-info">
          <h4>${cert.name}</h4>
          <span class="cert-issuer-text">Verified Coursera Credential</span>
        </div>
      </div>

      <div class="cert-action-row">
        <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="btn-view-cert" aria-label="View Certificate for ${cert.name}">
          <span>View Certificate</span>
          ${getIconSvg('externalLink')}
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. Research / Achievements (Requirement 23)
   ========================================================================== */
function initResearch() {
  const container = document.getElementById('research-container');
  if (!container || !PORTFOLIO_DATA.research) return;

  const res = PORTFOLIO_DATA.research;
  container.innerHTML = `
    <div class="research-card reveal">
      <span class="research-badge">${res.badge}</span>
      <h3 class="research-title">${res.title}</h3>
      <p class="research-desc">${res.description}</p>
      
      <div class="research-topics-strip">
        ${res.topics.map(t => `<span class="research-topic-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   9. Navigation & Mobile Drawer (Requirement 21)
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Drawer Toggle
  if (toggleBtn && drawer && backdrop) {
    function toggleDrawer(open) {
      const shouldOpen = open !== undefined ? open : !drawer.classList.contains('open');
      if (shouldOpen) {
        drawer.classList.add('open');
        backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        drawer.classList.remove('open');
        backdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    }

    toggleBtn.addEventListener('click', () => toggleDrawer());
    backdrop.addEventListener('click', () => toggleDrawer(false));

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => toggleDrawer(false));
    });
  }

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   10. Scroll Effects (Reveal on Scroll)
   ========================================================================== */
function initScrollEffects() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================================================
   11. Contact Form Interaction (Requirement 22: Honest client mailto launch)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in your name, email, and message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:sharvanibijjam@gmail.com?subject=${subject}&body=${body}`;

    showToast('Opening your email client to send message to sharvanibijjam@gmail.com...');
    window.location.href = mailtoUrl;
    form.reset();
  });
}

/* ==========================================================================
   12. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   13. Smooth Anchor Scrolling
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   14. Toast Notification
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-message');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toast-message';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================================================
   15. Interactive About Me Feature
   ========================================================================== */
function initAboutInteractive() {
  // Clean, unhighlighted About Me section
}


