document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);


    /** ============================= **/
    /** 🎬 ANIMATION D'ENTRÉE SUR LA PAGE **/
    /** ============================= **/
    gsap.set("body", { opacity: 0, filter: "blur(10px)", scale: 1.05 });

    gsap.to("body", {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
    });






    /** ============================= **/
    /** 🚀 ANIMATIONS PAGE EXPLORATION **/
    /** ============================= **/

    // Positionnement et animation douce du titre
    gsap.set(".exploration-title", { opacity: 1, y: -220 });
    gsap.from(".exploration-title", {
        opacity: 0,
        y: -240,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
    });

    // Centrage parfait et légère augmentation de taille de la roulette
    gsap.set(".circle-menu", { opacity: 1, scale: 1.15, xPercent: -50, yPercent: -50, left: "50%", top: "55%", position: "absolute" });
    gsap.fromTo(".circle-menu",
      { scale: 0.5, rotation: -90, opacity: 0 },
      { scale: 1.15, rotation: 0, opacity: 1, duration: 2, ease: "power4.out", delay: 0.5 }
    );

    // Animation des éléments du menu circulaire arrivant de l'extérieur de l'écran
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        const angle = (index / navItems.length) * Math.PI * 2;
        const x = Math.cos(angle) * 1000;
        const y = Math.sin(angle) * 1000;

        gsap.fromTo(item,
          { opacity: 0, x, y },
          { opacity: 1, x: 0, y: 0, duration: 1.8, ease: "power4.out", delay: 1 + index * 0.2 }
        );
    });

    // Effet de survol travaillé sur les cases de la roulette
    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            gsap.to(item, {
                scale: 1.2,
                duration: 0.3,
                ease: "power3.out",
                boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.8)"
            });
        });
        item.addEventListener("mouseleave", () => {
            gsap.to(item, {
                scale: 1,
                duration: 0.3,
                ease: "power3.inOut",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)"
            });
        });
    });

    /** ============================ **/
    /** 🎨 EFFET DE SURVOL AVANCÉ DES DESCRIPTIONS **/
    /** ============================ **/

    navItems.forEach(item => {
        const title = item.querySelector("h3");
        const description = item.querySelector("p");

        // Masquer les descriptions au départ
        gsap.set(description, { opacity: 0, visibility: "hidden", maxHeight: 0, overflow: "hidden" });

        item.addEventListener("mouseenter", () => {
            gsap.to(title, {
                y: -10,
                fontSize: "1.2rem",
                duration: 0.3,
                ease: "power3.out"
            });

            // Obtenir la hauteur réelle du texte pour l'animation
            let descriptionHeight = description.scrollHeight;

            gsap.to(description, {
                opacity: 1,
                visibility: "visible",
                maxHeight: descriptionHeight,
                duration: 0.5,
                ease: "power3.out"
            });

            gsap.from(description, {
                text: description.textContent,
                duration: 1.2,
                ease: "none"
            });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(title, {
                y: 0,
                fontSize: "1.4rem",
                duration: 0.3,
                ease: "power3.inOut"
            });

            gsap.to(description, {
                opacity: 0,
                visibility: "hidden",
                maxHeight: 0,
                duration: 0.5,
                ease: "power3.inOut"
            });
        });
    });

    /** ========================== **/
    /** 🌊 EFFET DE RESPIRATION **/
    /** ========================== **/
    gsap.to(".nav-item", {
        scale: 1.06,
        duration: 7,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.8, repeat: -1 }
    });

    /** ========================== **/
    /** 🔗 REDIRECTION SUR CLIC **/
    /** ========================== **/
    const pages = ["index.html", "about.html", "projets.html", "skill.html", "contact.html"]; 
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            gsap.to(document.body, { opacity: 0, duration: 0, ease: "power1.out", onComplete: () => {
                window.location.href = pages[index];
            }});
        });
    });

    /** ========================== **/
    /** 🎨 BOUTON CHANGEMENT MODE **/
    /** ========================== **/

    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector(".icon");

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
                gsap.to(icon, {opacity: 1, duration: 0.4});
            }
        });

        // Gestion dynamique du logo pour mode clair et sombre
        const logo = document.getElementById('logo');
        logo.src = isLightMode ? "logo_jour.png" : "logo_nuit.png";
    }

    applyTheme(localStorage.getItem("theme") === "light", true);

    themeToggle.addEventListener("click", () => {
        const isLightMode = !body.classList.contains("light-mode");
        applyTheme(isLightMode);
    });

    // Animation fluide d'apparition du logo
    gsap.from(".logo", {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 1,
        ease: "power3.out"
    });
});
