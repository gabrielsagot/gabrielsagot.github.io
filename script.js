document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    /** ========================== **/
    /** 🌟 ANIMATION NAVBAR        **/
    /** ========================== **/
    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scaleX: 0.8,
        transformOrigin: "center top",
        onComplete: function () {
            gsap.to(".navbar", { 
                y: 0,
                scaleX: 1,
                duration: 0.3,
                ease: "elastic.out(1, 0.5)"
            });
        }
    });

    gsap.from(".nav-links li", {
        opacity: 0,
        y: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.6
    });

    /** ========================== **/
    /** ✅ FIX NAVBAR MAC/WINDOWS **/
    /** ========================== **/
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Si on remonte -> afficher la navbar
            gsap.to(".navbar", { y: 0, duration: 0.5, ease: "power2.out" });
        } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Si on descend -> cacher la navbar
            gsap.to(".navbar", { y: -100, duration: 0.5, ease: "power2.out" });
        }

        lastScrollY = currentScrollY;
    });

    /** ========================== **/
    /** 📝 ANIMATION TEXTE TITRE   **/
    /** ========================== **/
    function updateHighlightColor() {
        const isLightMode = document.body.classList.contains("light-mode");
        gsap.to(".letter.highlight, .highlight", { color: isLightMode ? "#6A0572" : "#ff7f11" });
        gsap.to(".highlight-name", {
            textShadow: isLightMode ? "0px 0px 15px rgba(124,14,133,0.8)" : "0px 0px 15px rgba(255, 127, 17, 0.8), 0px 0px 25px rgba(255, 127, 17, 1)",
        });
    }

    gsap.to(".letter", {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        onComplete: updateHighlightColor
    });

    /** ========================== **/
    /** 🎨 BOUTON CHANGEMENT MODE  **/
    /** ========================== **/
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector(".icon") || document.createElement("span");
    icon.classList.add("icon");
    themeToggle.appendChild(icon);

    function applyTheme(isLightMode, initial = false) {
        body.classList.toggle("light-mode", isLightMode);
        body.classList.toggle("dark-mode", !isLightMode);
        localStorage.setItem("theme", isLightMode ? "light" : "dark");

        gsap.to(icon, {
            rotation: isLightMode ? 360 : -360,
            opacity: 0,
            duration: initial ? 0 : 0.4,
            onComplete: () => {
                icon.textContent = isLightMode ? "☀️" : "🌙";
                gsap.to(icon, { opacity: 1, duration: 0.4 });
            }
        });

        // Changement dynamique du logo
        const logo = document.getElementById('logo');
        if (logo) logo.src = isLightMode ? "logo_jour.png" : "logo_nuit.png";

        // Changement dynamique du favicon
        const favicon = document.getElementById('favicon');
        if (favicon) favicon.href = isLightMode ? "favicon_jour.png" : "favicon_nuit.png";

        updateHighlightColor();

        gsap.fromTo(body, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
    }

    applyTheme(localStorage.getItem("theme") === "light", true);

    themeToggle.addEventListener("click", () => {
        const isLightMode = !body.classList.contains("light-mode");
        applyTheme(isLightMode);

        gsap.fromTo(themeToggle, 
            { scale: 0.8 },
            { scale: 1.2, duration: 0.3, ease: "elastic.out(1, 0.3)", yoyo: true, repeat: 1 }
        );
    });

	    /** ========================== **/
    /** 🍔 BURGER MENU MOBILE     **/
    /** ========================== **/
    const burgerToggle = document.getElementById("burger-toggle");
    const navLinks = document.querySelector(".nav-links");



    // Fermer le menu après clic sur un lien
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            burgerToggle.classList.remove("open");
        });
    });

if (window.innerWidth <= 768) {
  const warning = document.getElementById("mobile-warning");
  const closeBtn = document.getElementById("close-warning");

  if (warning && closeBtn) {
    warning.style.display = "block";

    closeBtn.addEventListener("click", () => {
      warning.style.display = "none";
    });
  }
}
/** ========================== **/
/** 📱 ANIMATIONS GSAP MOBILE  **/
/** ========================== **/

// Si l'écran est mobile
if (window.innerWidth <= 768) {
  // Bannière mobile - slide down + fade
  const warning = document.getElementById("mobile-warning");
  const closeBtn = document.getElementById("close-warning");

  if (warning && closeBtn) {
    gsap.fromTo(warning,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    warning.style.display = "block";

    // Apparition stylée de la croix
    gsap.fromTo(closeBtn,
      { scale: 0, rotate: -90 },
      { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)", delay: 0.6 }
    );

    // Fermeture de la bannière
    closeBtn.addEventListener("click", () => {
      gsap.to(warning, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => warning.style.display = "none"
      });
    });
  }

  // Animation du menu burger quand il s’ouvre
  const burgerToggle = document.getElementById("burger-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (burgerToggle && navLinks) {
    burgerToggle.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        // Fermeture animée
        gsap.to(navLinks, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => navLinks.classList.remove("show")
        });
      } else {
        navLinks.classList.add("show");
        gsap.fromTo(navLinks,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  }




  // Apparition du texte principal (stagger des lettres)
  gsap.to(".letter", {
    opacity: 1,
    y: 0,
    stagger: 0.05,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.5
  });
}


const discoverBtn = document.querySelector(".btn");

if (discoverBtn) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Mobile → animation plus simple mais classe
    gsap.fromTo(discoverBtn,
      { y: 40, opacity: 0, scale: 0.85 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        delay: 1
      }
    );
  } else {
    // GRAND ÉCRAN → ANIMATION CINÉMATIQUE 😎
    const tl = gsap.timeline({ delay: 1.5 });

    // 1. Arrivée dynamique (rotation + scale + perspective)
    tl.fromTo(discoverBtn,
      {
        y: 100,
        opacity: 0,
        scale: 0,
        rotate: -30,
        filter: "blur(10px)",
        transformOrigin: "center center"
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "back.out(1.8)"
      }
    );

    // 2. Explosion de glow
    tl.to(discoverBtn, {
      boxShadow: "0 0 30px 10px rgba(255,127,17,0.7)",
      duration: 0.8,
      ease: "power1.out"
    });

    // 3. Respiration lente (loop)
    tl.to(discoverBtn, {
      scale: 1.04,
      boxShadow: "0 0 15px 4px rgba(255,127,17,0.4)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    }, "+=0.3");
  }
}


  function updateDiscoverLink() {
    const discoverBtn = document.getElementById("discover-btn");
    if (!discoverBtn) return;

    if (window.innerWidth <= 768) {
      discoverBtn.setAttribute("href", "about.html");
    } else {
      discoverBtn.setAttribute("href", "exploration.html");
    }
  }

  updateDiscoverLink(); // appel initial
  window.addEventListener("resize", updateDiscoverLink); // mise à jour dynamique

}); // FIN de DOMContentLoaded