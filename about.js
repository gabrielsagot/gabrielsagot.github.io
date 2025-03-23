document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);


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
    /** 📝 ANIMATION LETTRE PAR LETTRE **/
    /** ========================== **/

    gsap.from(".quote", {
        duration: 4,
        text: "",
        ease: "power2.out"
    });

    gsap.utils.toArray("h1, h2").forEach((el, i) => {
        gsap.from(el, {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: i * 0.3,
            ease: "power2.out"
        });
    });




/** ========================== **/
/** 🔥 ANIMATION TITRES SECTIONS (EFFET REBOND) **/
/** ========================== **/

gsap.utils.toArray(".section-title").forEach((title, index) => {
    gsap.fromTo(title,
        {
            opacity: 0,
            y: 80, // Commence caché sous l’écran
            scale: 0.8
        },
        {
            opacity: 1,
            y: 0, // Remonte à sa position
            scale: 1,
            duration: 1.8,
            ease: "bounce.out", // Effet rebond
            scrollTrigger: {
                trigger: title, 
                start: "top 99%", // Déclenchement quand on atteint 85% de la hauteur de l'écran
                toggleActions: "play none none none",
                once: true // L'animation ne se joue qu'une seule fois
            }
        }
    );
});






/** ========================== **/
/** 🎓 TIMELINE - ANIMATIONS AMÉLIORÉES **/
/** ========================== **/

gsap.utils.toArray(".timeline-item").forEach((item, index) => {
    gsap.fromTo(item,
        {
            opacity: 0,
            y: 50,
            scale: 0.8,
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.8)",
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );

    // Super effet de hover avec rotation et glow
    item.addEventListener("mouseenter", () => {
        gsap.to(item, {
            scale: 1.1,
            rotation: 2,
            boxShadow: "0px 15px 30px rgba(255, 127, 17, 0.8)",
            duration: 0.3,
            ease: "power2.out"
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            scale: 1,
            rotation: 0,
            boxShadow: "0px 4px 15px rgba(255, 127, 17, 0.3)",
            duration: 0.3,
            ease: "power2.out"
        });
    });
});




/** ========================== **/
/** 🎭 ANIMATION PERSONNALITÉ & PASSIONS **/
/** ========================== **/

gsap.utils.toArray(".passion-item, .personnalite-item").forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        scale: 0.3,
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-50, 50),
        duration: 1,
        ease: "elastic.out(1, 0.8)", 
        delay: index * 0.1,
        scrollTrigger: {
            trigger: "#personnalite",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // Effet tremblement + agrandissement au survol
    item.addEventListener("mouseenter", () => {
        gsap.to(item, {
            scale: 1.3,
            rotation: gsap.utils.random(-5, 5),
            duration: 0.1,
            yoyo: true,
            repeat: 5, 
            ease: "power2.inOut"
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

	
    /** ========================== **/
    /** 🚀 EXPÉRIENCES INTERACTIVES **/
    /** ========================== **/
    document.querySelectorAll(".experience-item").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });

        item.addEventListener("mouseenter", () => {
            gsap.to(item, { scale: 1.05, backgroundColor: "rgba(255, 127, 17, 0.5)", duration: 0.3, ease: "power3.out" });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(item, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.1)", duration: 0.3, ease: "power3.out" });
        });
    });
	
/** ========================== **/
/** 📌 ANIMATION NAVIGATION INTERNE (Apparition seulement en bas) **/
/** ========================== **/

gsap.to(".internal-nav", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "body", // Déclenchement quand on atteint la fin du body
        start: "bottom bottom",
        once: true // Animation jouée une seule fois
    }
});

/** ========================== **/
/** 📌 NAVIGATION INTERNE (Scroll fluide vers les sections) **/
/** ========================== **/

document.querySelectorAll(".internal-nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            console.log("Scrolling to:", targetId, "Found:", targetSection !== null);

            let offset = document.querySelector(".navbar").offsetHeight + 20; 
            let targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

            gsap.to(window, { 
                scrollTo: { y: targetPosition, autoKill: true }, 
                duration: 1, 
                ease: "power2.inOut" 
            });
        } else {
            console.warn("Section non trouvée :", targetId);
        }
    });
});


    /** ========================== **/
    /** 🎨 BOUTON MODE JOUR/NUIT **/
    /** ========================== **/
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Vérifier si l'icône existe déjà
let icon = themeToggle.querySelector(".icon");
if (!icon) {
    icon = document.createElement("span");
    icon.classList.add("icon");
    themeToggle.appendChild(icon);
}

function applyTheme(isLightMode, initial = false) {
    body.classList.toggle("light-mode", isLightMode);
    body.classList.toggle("dark-mode", !isLightMode);
    localStorage.setItem("theme", isLightMode ? "light" : "dark");

    gsap.to(icon, {
        rotation: isLightMode ? 360 : -360,
        opacity: 0,
        duration: initial ? 0 : 0.4,
        onComplete: () => {
            icon.textContent = isLightMode ? "☀️" : "🌙"; // ✅ Mise à jour propre
            gsap.to(icon, { opacity: 1, duration: 0.4 });
        }
    });

    // Changement du logo
    const logo = document.getElementById('logo');
    if (logo) logo.src = isLightMode ? "logo_jour.png" : "logo_nuit.png";

    // Changement du favicon
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

	/** ========================== **/
	/** 🖋️ MISE EN GRAS DES MOTS CLÉS **/
	/** ========================== **/

	document.querySelectorAll("h1, h2, p").forEach(element => {
		element.innerHTML = element.innerHTML.replace(
			/\b(Me|moi|Mien)\b/g, 
			'<span style="font-weight: bold;">$1</span>'
		);
	});
});


/** ========================== **/
/** ☁️ ANIMATION NUAGE DE MOTS (Apparition uniquement quand visible) **/
/** ========================== **/

gsap.utils.toArray(".keyword").forEach((word, index) => {
    gsap.from(word, {
        opacity: 0,
        scale: 0.3,
        rotation: gsap.utils.random(-30, 30),
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        duration: 2,
        ease: "elastic.out(1, 0.8)", 
        delay: index * 0.1,
        scrollTrigger: {
            trigger: word, // Déclenchement au moment où CHAQUE mot devient visible
            start: "top 90%", // L'animation commence lorsque l'élément atteint 90% de la hauteur du viewport
            toggleActions: "play none none none",
            once: true // Ne joue l'animation qu'une seule fois
        }
    });

    // ✅ Correction de l'effet de tremblement + agrandissement
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.4,
            rotation: gsap.utils.random(-5, 5),
            duration: 0.1,
            repeat: 3,  // Répète 3 fois
            yoyo: true, // Fait l'effet aller-retour
            ease: "power2.inOut"
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});
