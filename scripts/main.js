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
      nav: ["O mnie", "Projekty", "Kontakt"],
      about_h2: "O mnie",
      about: `Cześć! Nazywam się Bartosz Hadala i jestem studentem Elektroniki i Telekomunikacji na AGH w Krakowie.
        <br /><br />
        Pasjonuję się mikrokontrolerami, technikami modulacji sygnałów oraz nowoczesną elektroniką. Lubię pracować z różnymi językami programowania i systemami wbudowanymi, stale szukając nowych wyzwań i innowacyjnych rozwiązań.
        <br /><br />
        Jestem także aktywnym członkiem Koła Naukowego Micro, gdzie współpracuję przy innowacyjnych projektach elektronicznych i rozwijam praktyczne umiejętności.`,
      education_h2: "Wykształcenie",
      education: [
        `<strong>AGH Kraków</strong><br />Elektronika i Telekomunikacja, studia inżynierskie<br />2023 – obecnie`,
        `<strong>Liceum w Krynicy-Zdroju</strong><br />Technik informatyk, ukończony z wyróżnieniem (Nagroda Prezesa Rady Ministrów)<br />2019 – 2023`,
      ],
      skills_h2: "Umiejętności",
      skills: [
        "Analiza obwodów",
        "Symulacje układów elektronicznych (LTSpice, PSpice)",
        "Architektura mikrokontrolerów i FPGA (Verilog, Assembler, Vivado, Microchip Studio)",
        "Symulacja i przetwarzanie sygnałów cyfrowych i analogowych, filtry i modulacje (Matlab, Julia)",
        "Programowanie: C++, Git, JavaScript, PHP, SQL, HTML, CSS",
        "Narzędzia: Visual Studio Code, CodeBlocks, Github, phpMyAdmin",
        "Systemy operacyjne: Windows, Windows Server, Linux, Linux Server",
        "Sieci komputerowe (Cisco Packet Tracer)",
        "Lutowanie elementów elektronicznych",
        "Certyfikaty INF.02, INF.03",
        "Certyfikat ECDL",
        "Języki: polski, angielski",
        "Prawo jazdy kat. B",
      ],
      experience_h2: "Doświadczenie",
      experience_p: `Od 2018 roku pracowałem w branżach niezwiązanych bezpośrednio z elektroniką, zdobywając cenne umiejętności. Praca w hotelach i restauracjach pozwoliła mi rozwinąć współpracę zespołową, komunikację i obsługę klienta. Te role nauczyły mnie elastyczności, odpowiedzialności i pracy z różnorodnymi ludźmi. Ta droga uczyniła mnie wszechstronną i zmotywowaną osobą, gotową na nowe wyzwania w elektronice i IT.`,
      experience: [
        `<strong>Praktyki – Firma reklamowa</strong><br />Obsługa maszyn produkcyjnych, kontrola jakości, administracja sieci i systemów.<br />2021`,
      ],
      interests_h2: "Zainteresowania",
      interests: `Głęboko pasjonuję się nowoczesną elektroniką i systemami wbudowanymi. Uwielbiam zgłębiać świat mikrokontrolerów, automatyki, przetwarzania sygnałów i technik modulacji, stale poszerzając wiedzę i doskonaląc umiejętności techniczne. Programowanie w C++, Pythonie i MATLABie daje mi narzędzia do realizacji pomysłów i rozwiązywania praktycznych problemów.
        <br /><br />
        Poza technologią znajduję równowagę w swoich pasjach. Sport i aktywność fizyczna odgrywają kluczową rolę w moim życiu — regularnie trenuję na siłowni i marzę o występie na scenie kulturystycznej. Lubię też grać w tenisa, do którego ostatnio wróciłem.
        <br /><br />
        Muzyka towarzyszy mi każdego dnia — szczególnie cenię sobie intymne doświadczenie słuchania jej na słuchawkach. Uwielbiam podróżować i odkrywać kuchnie świata, co inspiruje mnie do poznawania nowych kultur. Fascynuje mnie także inwestowanie długoterminowe i nieustannie zdobywam wiedzę o finansach i rynkach globalnych.`,
      photos_h2: "Ulubione zdjęcia",
      projects_h2: "Projekty",
      contact_h2: "Kontakt",
      contact: {
        email: "Email:",
        phone: "Telefon:",
        linkedin: "LinkedIn:",
        city: "Miasto:",
        cv: "CV:",
      },
      cv_download: "Pobierz moje CV",
    },
    en: {
      header: "Bartosz Hadala – Electronics and Telecommunications Student",
      nav: ["About Me", "Projects", "Contact"],
      about_h2: "About Me",
      about: `Hi! My name is Bartosz Hadala and I am a student of Electronics and Telecommunications at AGH University of Science and Technology in Krakow.
        <br /><br />
        I am passionate about microcontrollers, signal modulation techniques, and all aspects of modern electronics. I enjoy working with various programming languages and embedded systems, constantly seeking new challenges and innovative solutions.
        <br /><br />
        I am also an active member of the Micro Student Research Group, where I collaborate on innovative electronics projects and expand my practical skills.`,
      education_h2: "My Education",
      education: [
        `<strong>AGH University of Science and Technology, Krakow</strong><br />Electronics and Telecommunications, Engineering Degree<br />2023 – present`,
        `<strong>High School in Krynica-Zdrój</strong><br />IT Technician, graduated with distinction (Prime Minister's Award)<br />2019 – 2023`,
      ],
      skills_h2: "My Skills",
      skills: [
        "Circuit Analysis",
        "Simulations of electronic circuits (LTSpice, PSpice)",
        "Microcontroller and FPGA architecture (Verilog, Assembler, Vivado, Microchip Studio)",
        "Digital & analog signal simulation and processing, filters and modulations (Matlab, Julia)",
        "Programming: C++, Git, JavaScript, PHP, SQL, HTML, CSS",
        "Development tools: Visual Studio Code, CodeBlocks, Github, phpMyAdmin",
        "Operating systems: Windows, Windows Server, Linux, Linux Server",
        "Computer networks (Cisco Packet Tracer)",
        "Soldering electronic components",
        "INF.02, INF.03 certificates",
        "ECDL certificate",
        "Languages: Polish, English",
        "Driving license: category B",
      ],
      experience_h2: "My Experience",
      experience_p: `Since 2018, I have worked in industries not directly related to my field, continuously developing valuable skills outside of electronics and IT. My experience in hotels and restaurants allowed me to strengthen my teamwork, communication, and customer service abilities. These roles taught me adaptability, responsibility, and how to work effectively with people from diverse backgrounds. This journey has made me a versatile and motivated individual, ready to take on new challenges in electronics and technology.`,
      experience: [
        `<strong>Internship – Advertising & Leaflet Production Company</strong><br />Operated production machines, managed product quality, and supported network and system administration.<br />2021`,
      ],
      interests_h2: "My Interests",
      interests: `I am deeply passionate about modern electronics and embedded systems. I enjoy exploring the world of microcontrollers, automation, signal processing, and modulation techniques, constantly expanding my knowledge and sharpening my technical skills. Programming in C++, Python, and MATLAB gives me the tools to bring ideas to life and solve practical problems.
        <br /><br />
        Outside of technology, I find balance in my personal passions. Sports and physical activity play a central role in my life — I train regularly at the gym and dream of one day stepping onto a bodybuilding stage. I also enjoy playing tennis, a sport I have recently returned to.
        <br /><br />
        Music accompanies me every day — I especially value the intimate experience of listening to it through headphones. Beyond that, I love traveling and discovering world cuisines, which inspires me to connect with new cultures. I am also fascinated by long-term investing, continuously seeking new knowledge about finance and global markets.`,
      photos_h2: "My Favorite Photos",
      projects_h2: "My Projects",
      contact_h2: "Contact",
      contact: {
        email: "Email:",
        phone: "Phone:",
        linkedin: "LinkedIn:",
        city: "City:",
        cv: "CV:",
      },
      cv_download: "Download my CV",
    },
  };

  function setLanguage(lang) {
    // Header
    document.querySelector("header h1").innerHTML = translations[lang].header;

    // Navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((el, i) => {
      el.textContent = translations[lang].nav[i];
    });

    // About Me
    document.querySelector("#about h2").textContent =
      translations[lang].about_h2;
    document.querySelector(".about-description p").innerHTML =
      translations[lang].about;

    // Education
    document.querySelector("#education h2").textContent =
      translations[lang].education_h2;
    const eduList = document.querySelectorAll(".education-list li");
    translations[lang].education.forEach((txt, i) => {
      if (eduList[i]) eduList[i].innerHTML = txt;
    });

    // Skills
    document.querySelector("#skills h2").textContent =
      translations[lang].skills_h2;
    const skillList = document.querySelectorAll(".skills-list li");
    translations[lang].skills.forEach((txt, i) => {
      if (skillList[i]) skillList[i].textContent = txt;
    });

    // Experience
    document.querySelector("#experience h2").textContent =
      translations[lang].experience_h2;
    document.querySelector("#experience p").innerHTML =
      translations[lang].experience_p;
    const expList = document.querySelectorAll(".experience-list li");
    translations[lang].experience.forEach((txt, i) => {
      if (expList[i]) expList[i].innerHTML = txt;
    });

    // Interests
    document.querySelector("#interests h2").textContent =
      translations[lang].interests_h2;
    document.querySelector("#interests p").innerHTML =
      translations[lang].interests;

    // Photos
    document.querySelector("#photos h2").textContent =
      translations[lang].photos_h2;

    // Projects
    document.querySelector("#projects h2").textContent =
      translations[lang].projects_h2;

    // Contact
    document.querySelector("#contact h2").textContent =
      translations[lang].contact_h2;
    const contactInfo = document.querySelectorAll(".contact-info p");
    contactInfo[0].querySelector("strong").textContent =
      translations[lang].contact.email;
    contactInfo[1].querySelector("strong").textContent =
      translations[lang].contact.phone;
    contactInfo[2].querySelector("strong").textContent =
      translations[lang].contact.linkedin;
    contactInfo[3].querySelector("strong").textContent =
      translations[lang].contact.city;
    contactInfo[4].querySelector("strong").textContent =
      translations[lang].contact.cv;
    contactInfo[4].querySelector("a").textContent =
      translations[lang].cv_download;
  }

  document
    .getElementById("lang-pl")
    .addEventListener("click", () => setLanguage("pl"));
  document
    .getElementById("lang-en")
    .addEventListener("click", () => setLanguage("en"));
});
<link rel="icon" type="image/png" href="assets/favicon.png" />
