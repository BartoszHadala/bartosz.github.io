// This file contains the JavaScript code for the portfolio website.
// You can add functionality such as interactive elements, animations, or form handling here.

document.addEventListener("DOMContentLoaded", () => {
  // Example: Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Example: Display a welcome message in the console
  console.log("Welcome to my personal portfolio!");

  // --- Usuń lub zakomentuj poniższy kod lightbox ---
  /*
  const galleryImages = document.querySelectorAll(".photos-gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
  */
  // --- Koniec sekcji lightbox ---

  // Show Education section
  const showEducationBtn = document.getElementById("show-education-btn");
  const educationSection = document.getElementById("education");
  if (showEducationBtn && educationSection) {
    showEducationBtn.addEventListener("click", () => {
      educationSection.style.display = "block";
      showEducationBtn.style.display = "none";
      educationSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Show Skills section
  const showSkillsBtn = document.getElementById("show-skills-btn");
  const skillsSection = document.getElementById("skills");
  if (showSkillsBtn && skillsSection) {
    showSkillsBtn.addEventListener("click", () => {
      skillsSection.style.display = "block";
      showSkillsBtn.style.display = "none";
      skillsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Show Photos section
  const showPhotosBtn = document.getElementById("show-photos-btn");
  const photosSection = document.getElementById("photos");
  if (showPhotosBtn && photosSection) {
    showPhotosBtn.addEventListener("click", () => {
      photosSection.style.display = "block";
      showPhotosBtn.style.display = "none";
      photosSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Show Experience section
  const showExperienceBtn = document.getElementById("show-experience-btn");
  const experienceSection = document.getElementById("experience");
  if (showExperienceBtn && experienceSection) {
    showExperienceBtn.addEventListener("click", () => {
      experienceSection.style.display = "block";
      showExperienceBtn.style.display = "none";
      experienceSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
