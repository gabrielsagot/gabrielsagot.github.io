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
        duration: 0.8,
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
                gsap.to(icon, {opacity: 1, duration: 0.4});
            }
        });

        // Changement dynamique du logo
        const logo = document.getElementById('logo');
        logo.src = isLightMode ? "logo_jour.png" : "logo_nuit.png";

        updateHighlightColor();

        gsap.fromTo(body, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
        });
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
});