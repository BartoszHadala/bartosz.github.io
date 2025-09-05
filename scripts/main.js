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

  // Show Interests section
  const showInterestsBtn = document.getElementById("show-interests-btn");
  const interestsSection = document.getElementById("interests");
  if (showInterestsBtn && interestsSection) {
    showInterestsBtn.addEventListener("click", () => {
      interestsSection.style.display = "block";
      showInterestsBtn.style.display = "none";
      interestsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const translations = {
    pl: {
      header: "Bartosz Hadala – Student Elektroniki i Telekomunikacji",
      about:
        "Cześć! Nazywam się Bartosz Hadala i jestem studentem Elektroniki i Telekomunikacji na AGH w Krakowie. <br /><br />Pasjonuję się mikrokontrolerami, technikami modulacji sygnałów oraz nowoczesną elektroniką. Lubię pracować z różnymi językami programowania i systemami wbudowanymi, stale szukając nowych wyzwań i innowacyjnych rozwiązań. <br /><br />Jestem także aktywnym członkiem Koła Naukowego Micro, gdzie współpracuję przy innowacyjnych projektach elektronicznych i rozwijam praktyczne umiejętności.",
      // Dodaj kolejne tłumaczenia...
    },
    en: {
      header: "Bartosz Hadala – Electronics and Telecommunications Student",
      about:
        "Hi! My name is Bartosz Hadala and I am a student of Electronics and Telecommunications at AGH University of Science and Technology in Krakow. <br /><br />I am passionate about microcontrollers, signal modulation techniques, and all aspects of modern electronics. I enjoy working with various programming languages and embedded systems, constantly seeking new challenges and innovative solutions. <br /><br />I am also an active member of the Micro Student Research Group, where I collaborate on innovative electronics projects and expand my practical skills.",
      // Add more translations...
    },
  };

  function setLanguage(lang) {
    document.querySelector("header h1").innerHTML = translations[lang].header;
    document.querySelector(".about-description p").innerHTML =
      translations[lang].about;
    // Dodaj kolejne elementy do tłumaczenia...
  }

  document
    .getElementById("lang-pl")
    .addEventListener("click", () => setLanguage("pl"));
  document
    .getElementById("lang-en")
    .addEventListener("click", () => setLanguage("en"));
});
