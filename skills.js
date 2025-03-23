document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    /** ========================== **/
    /** 🌟 ANIMATION DU TITRE PRINCIPAL AMÉLIORÉ **/
    /** ========================== **/

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".skills-title",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // ✅ "Un" : Apparition lettre par lettre avec rotation aléatoire
    gsap.from(".un", {
        opacity: 0,
        y: 50,
        rotation: () => gsap.utils.random(-10, 10),
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1
    });

    // ✅ "point" : Apparition + scale (la vague de couleur est gérée en CSS)
    timeline.from(".point", {
        opacity: 0,
        scale: 0.5,
        y: -30,
        rotation: 360,
        duration: 1.5,
        ease: "elastic.out(1, 0.6)",
        onStart: function () {
            updateWaveEffect();
        }
    });

    // ✅ "sur mes" : Apparition fluide + léger zoom
    timeline.from(".surmes", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.1
    });

    // ✅ "compétences" : Animation sobre et élégante
    timeline.from(".competences", {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power2.out",
        onStart: function () {
            updateCompetencesStyle();
        }
    });

    /** ========================== **/
    /** 🔄 GESTION DU MODE JOUR/NUIT POUR L'EFFET DE VAGUE **/
    /** ========================== **/

    function updateWaveEffect() {
        const isLightMode = document.body.classList.contains("light-mode");
        const pointElement = document.querySelector(".point");

        // ✅ Suppression des classes précédentes avant d'appliquer la bonne
        pointElement.classList.remove("wave-effect-night", "wave-effect-day");
        pointElement.classList.add(isLightMode ? "wave-effect-day" : "wave-effect-night");
    }

    function updateCompetencesStyle() {
        const isLightMode = document.body.classList.contains("light-mode");
        gsap.to(".competences", {
            color: isLightMode ? "#7C0E85" : "#FF7F11",
            textShadow: isLightMode
                ? "0px 0px 20px rgba(124, 14, 133, 0.7)"
                : "0px 0px 20px rgba(255, 127, 17, 0.7)",
            duration: 1
        });
    }

    // ✅ Appliquer l'effet immédiatement au chargement
    updateWaveEffect();

    // ✅ Appliquer l'effet à chaque changement de mode
    document.getElementById("theme-toggle").addEventListener("click", function () {
        setTimeout(updateWaveEffect, 300);
        setTimeout(updateCompetencesStyle, 300);
    });




    
    /** ========================== **/
    /** 🌟 ANIMATION NAVBAR **/
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

    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            gsap.to(".navbar", { y: -100, duration: 0.5, ease: "power2.out" });
        } else {
            gsap.to(".navbar", { y: 0, duration: 0.5, ease: "power2.out" });
        }
        lastScrollY = window.scrollY;
    });

    /** ========================== **/
    /** 🎨 BOUTON MODE JOUR/NUIT **/
    /** ========================== **/
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const skillTitles = document.querySelectorAll(".skill-category h2");
    const skillValues = document.querySelectorAll(".skill-value");

    // Vérifier si l'icône existe déjà
    let icon = themeToggle.querySelector(".icon");
    if (!icon) {
        icon = document.createElement("span");
        icon.classList.add("icon");
        themeToggle.appendChild(icon);
    }

    function applyTheme(isLightMode, initial = false) {
        body.classList.toggle("light-mode", isLightMode);
        body.classList.toggle("night-mode", !isLightMode); // ✅ Correction ici
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

        // ✅ Changement du fond de la page en mode nuit
        gsap.to(body, {
            backgroundColor: isLightMode ? "#FAF3FF" : "#0A192F",
            color: isLightMode ? "#1E1E1E" : "white",
            duration: 0.5
        });

        // ✅ Changement des titres des sections
        skillTitles.forEach(title => {
            gsap.to(title, { color: isLightMode ? "black" : "white", duration: 0.3 });
        });

        // ✅ Changement des valeurs des compétences
        skillValues.forEach(value => {
            gsap.to(value, { color: isLightMode ? "black" : "white", duration: 0.3 });
        });

        // ✅ Changement du logo
        const logo = document.getElementById('logo');
        if (logo) logo.src = isLightMode ? "logo_jour.png" : "logo_nuit.png";

        // ✅ Changement du favicon
        const favicon = document.getElementById('favicon');
        if (favicon) favicon.href = isLightMode ? "favicon_jour.png" : "favicon_nuit.png";

        gsap.fromTo(body, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" });
    }

    // Appliquer immédiatement le mode stocké
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
    /** 🎨 ANIMATION TITRES SECTIONS **/
    /** ========================== **/
    gsap.utils.toArray(".skill-category h2").forEach((title, index) => {
        gsap.from(title, {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: index * 0.2,
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });

    /** ========================== **/
    /** ✨ ANIMATION BARRES DE DÉLIMITATION **/
    /** ========================== **/
    gsap.utils.toArray(".section-divider").forEach((divider, index) => {
        gsap.fromTo(divider,
            { width: "0%", opacity: 0 },
            {
                width: "60%",
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                delay: index * 0.2,
                scrollTrigger: {
                    trigger: divider,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

/** ========================== **/
/** 🎯 ANIMATION ULTRA-TRAVAILLÉE DES BARRES CIRCULAIRES **/
/** ========================== **/
const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {
    const circle = skill.querySelector(".progress");
    const percentage = parseInt(skill.getAttribute("data-percent"));
    const text = skill.querySelector(".skill-value");
    const title = skill.querySelector("p");

    // ✅ Préparation de la barre circulaire
    const circumference = 2 * Math.PI * 45; // Rayon r=45
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference; // Départ à 100% vide

    // ✅ Apparition progressive du cercle avec rebond et glow progressif
    gsap.fromTo(skill, 
        { scale: 0.3, opacity: 0, filter: "blur(10px)" },
        {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 3,
            ease: "elastic.out(1, 0.6)",
            delay: index * 0.15,
            scrollTrigger: {
                trigger: skill,
                start: "top 95%",
                toggleActions: "play none none none"
            }
        }
    );

    // ✅ Synchronisation de la barre circulaire avec la montée en pourcentage
    gsap.to(circle, {
        strokeDashoffset: circumference * (1 - percentage / 100), // Progression fluide
        duration: 3,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

// ✅ Animation ultra fluide du pourcentage avec effet de grossissement progressif et disparition des bugs
gsap.fromTo(text, 
    { innerText: 0, scale: 0.5, opacity: 0 },
    {
        innerText: percentage,
        scale: 1.2, // Grossissement progressif
        opacity: 1,
        duration: 2.8,
        roundProps: "innerText",
        ease: "power2.out",
        delay: index * 0.2,
        onUpdate: function () {
            text.textContent = Math.round(this.targets()[0].innerText) + "%";
        },
        onComplete: function () {
            // ✅ Retour à une taille normale après l'animation
            gsap.to(text, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        },
        scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    }
);

    // ✅ Apparition du titre des compétences en douceur (glissement + fondu)
    gsap.fromTo(title, 
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
                trigger: skill,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
});

/** ========================== **/
/** 🔄 GESTION DE LA COULEUR ANIMÉE DES POURCENTAGES **/
/** ========================== **/
function updatePercentageEffect(element) {
    const isLightMode = document.body.classList.contains("light-mode");

    // ✅ Suppression des anciennes classes avant d'appliquer la bonne
    element.classList.remove("percentage-effect-night", "percentage-effect-day");
    element.classList.add(isLightMode ? "percentage-effect-day" : "percentage-effect-night");
}

// ✅ Appliquer l'effet immédiatement au chargement
skills.forEach(skill => {
    const text = skill.querySelector(".skill-value");
    updatePercentageEffect(text);
});

// ✅ Appliquer l'effet à chaque changement de mode
document.getElementById("theme-toggle").addEventListener("click", function () {
    setTimeout(() => {
        skills.forEach(skill => {
            const text = skill.querySelector(".skill-value");
            updatePercentageEffect(text);
        });
    }, 300);
});

    /** ========================== **/
    /** 🚀 LOGO APPARITION **/
    /** ========================== **/
    gsap.from(".logo", { opacity: 0, y: -30, duration: 1, ease: "power3.out" });
});