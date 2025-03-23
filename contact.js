document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    /** ============================== **/
    /** 🎬 TITRE DÉFILANT CONTACT — MODE TERMINAL **/
    /** ============================== **/

    const titles = [
        "Le point final... ou pas ? ",
        "C’est ici que tout commence",
        "Vous avez mon attention",
        "Et maintenant ?",
        "Le dernier clic ?"
    ];

    const titleElement = document.getElementById("contact-title");
    let currentTitleIndex = 0;

    // Fonction d'animation de changement de titre avec TextPlugin
    function changeTitle() {
        // Disparition progressive (effet d'effacement rapide)
        gsap.to(titleElement, {
            text: "",
            duration: 1,
            ease: "power2.in",
            onComplete: () => {
                // Prochain index
                currentTitleIndex = (currentTitleIndex + 1) % titles.length;

                // Réapparition avec effet machine à écrire
                gsap.to(titleElement, {
                    text: titles[currentTitleIndex],
                    duration: 2,
                    ease: "power2.out"
                });
            }
        });
    }

    // Animation de démarrage du premier titre
    gsap.fromTo(titleElement,
        { text: "" },
        { text: titles[0], duration: 2, ease: "power2.out" }
    );

    // Changement de titre toutes les 7 secondes
    setInterval(changeTitle, 4500);

/** ========================== **/
/** ✨ ANIMATION BARRES DE DÉLIMITATION **/
/** ========================== **/

/** ✨ Animation de la barre horizontale (.title-divider) **/
gsap.fromTo(".title-divider",
    { width: "0%", opacity: 0 },
    {
        width: "30%",
        opacity: 1,
        duration: 3.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".title-divider",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    }
);




/** ✨ Animation des barres VERTICALES (.vertical-divider) **/
gsap.utils.toArray(".vertical-divider").forEach((divider, index) => {
    gsap.fromTo(divider,
        { height: "0px", opacity: 0 },
        {
            height: "450px",
            opacity: 1,
            duration: 3.5,
            ease: "power2.out",
            delay: index * 0.3,
            scrollTrigger: {
                trigger: divider,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        }
    );
});

/** ================================== **/
/** 🧊 ANIMATIONS DES 3 BLOCS CONTACT — VERS LE HAUT **/
/** ================================== **/

// Fonction d'animation générique
function animateBlock(blockSelector, contentSelector) {
    // Animation du bloc global
    gsap.from(blockSelector, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
            trigger: blockSelector,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // Animation de chaque élément interne (en cascade lente)
    gsap.from(`${blockSelector} ${contentSelector}`, {
        y: 30,
        opacity: 0,
        scale: 0.97,
        filter: "blur(6px)",
        stagger: 0.3,
        delay: 0.3,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: blockSelector,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
}

// 📬 Formulaire
animateBlock("#contact-form", "input, textarea, button");

// 🔗 Bloc des liens
animateBlock("#contact-links", ".contact-item");

// 📇 Bloc des infos
animateBlock("#contact-info", ".contact-item");

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
    /** 🚀 LOGO APPARITION **/
    /** ========================== **/
    gsap.from(".logo", { opacity: 0, y: -30, duration: 1, ease: "power3.out" });




/** ✉️ ENVOI DU FORMULAIRE AVEC ENVELOPPE ANIMÉE **/

const form = document.getElementById("contact-form-el");
const sendButton = document.getElementById("send-button");
const sendingMsg = document.getElementById("sending-message");
const flyingEnvelope = document.getElementById("flying-envelope");
const sendingFeedback = document.getElementById("sending-feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Intercepte l'envoi

    // Affiche l’enveloppe et le message
    sendingFeedback.style.display = "block";

    // Animation GSAP
    gsap.timeline()
        .to(sendButton, {
            scale: 0.9,
            duration: 0.2,
            ease: "power1.inOut"
        })
        .to(sendButton, {
            scale: 1.15,
            backgroundColor: "#00c896",
            color: "#fff",
            boxShadow: "0 0 15px #00c896",
            duration: 0.4,
            ease: "elastic.out(1, 0.5)"
        }, "<")
        .to(flyingEnvelope, {
            opacity: 1,
            y: -50,
            duration: 1,
            ease: "power2.out"
        }, "<")
        .to(sendingMsg, {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out"
        }, "<");

    // Envoi des données
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    }).then(response => {
        // Reset + retour visuel
        setTimeout(() => {
            form.reset();

            gsap.to(flyingEnvelope, {
                y: -150,
                opacity: 0,
                duration: 1,
                ease: "power1.in"
            });

            gsap.to(sendingMsg, {
                opacity: 0,
                duration: 0.5
            });

            gsap.to(sendButton, {
                backgroundColor: "#ff7f11",
                color: "#0A192F",
                boxShadow: "none",
                duration: 0.3
            });

            setTimeout(() => {
                sendingFeedback.style.display = "none";
            }, 1000);
        }, 3000);
    }).catch(error => {
        sendingMsg.textContent = "❌ Une erreur s’est produite.";
        sendingMsg.style.color = "red";
    });
});



});

