
// =========================================
// SAI LIKHITH REDDY - PORTFOLIO INTERACTIONS
// =========================================

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label",
    isOpen ? "Close navigation" : "Open navigation");

});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-link").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

  });

});

// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("currentYear");

yearElement.textContent = new Date().getFullYear();

// 3. SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".section-heading, .glass-card, .project-card, .timeline-item"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries, observer) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// 4. ACTIVE NAVIGATION ON SCROLL

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.classList.add("active");
        }

      });

    }

  });

}, {
  rootMargin: "-25% 0px -60% 0px"
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

// 5. MOBILE MENU RESET WHEN RESIZING

window.addEventListener("resize", () => {

  if (window.innerWidth > 760) {

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");

  }

});

// 6. CONSOLE MESSAGE

console.log(
  "%c Welcome to Sai Likhith Reddy's Portfolio!",
  "color: #10B981; font-size: 16px; font-weight: bold;"
);

console.log(
  "%c Built with HTML, CSS and JavaScript.",
  "color: #94A3B8; font-size: 12px;"
);