function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  projects.forEach(project => {
    project.style.display =
      category === "all" || project.dataset.category === category
        ? "block"
        : "none";
  });
}

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";
  this.reset();
});
