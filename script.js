const promptButtons = document.querySelectorAll("[data-project-target]");
const projectCards = document.querySelectorAll(".project-card");
const projectSummaries = document.querySelectorAll(".project-summary-card");
const revealItems = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = document.querySelectorAll("main section[id]");

function activateProject(targetId) {
  promptButtons.forEach((item) => {
    const isActive = item.dataset.projectTarget === targetId;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });

  projectSummaries.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.projectTarget === targetId);
  });

  projectCards.forEach((card) => {
    card.classList.toggle("is-visible", card.id === targetId);
  });
}

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateProject(button.dataset.projectTarget);
  });
});

projectSummaries.forEach((card) => {
  card.addEventListener("click", () => {
    activateProject(card.dataset.projectTarget);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateProject(card.dataset.projectTarget);
    }
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-current", isCurrent);
      });
    });
  },
  {
    threshold: 0.45,
    rootMargin: "-10% 0px -35% 0px",
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
