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
	// Animation rebond pour les titres des sections
	gsap.utils.toArray(".section-title").forEach((title, index) => {
		gsap.from(title, {
			opacity: 0,
			y: 50,
			duration: 1.2,
			delay: index * 0.2,
			ease: "bounce.out"
		});
	});

    /** ========================== **/
    /** 📜 ANIMATION TIMELINE **/
    /** ========================== **/
    gsap.utils.toArray(".timeline-item").forEach((item, index) => {
        gsap.fromTo(item, 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", 
              scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none none"
              }
            }
        );
    });

    /** ========================== **/
    /** 🎭 ANIMATION PASSIONS **/
    /** ========================== **/
    gsap.utils.toArray(".passion-item").forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 30,
            scale: 0.8,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });
	
	// Animation des traits de personnalité
	gsap.utils.toArray(".personnalite-item").forEach((item, index) => {
		gsap.from(item, {
			opacity: 0,
			x: -30,
			duration: 1,
			ease: "power2.out",
			delay: index * 0.3,
			scrollTrigger: {
				trigger: item,
				start: "top 85%",
				toggleActions: "play none none none"
			}
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
    /** 📌 NAVIGATION INTERNE **/
    /** ========================== **/
document.querySelectorAll(".internal-nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
                       // Vérifie si la section est bien détectée
            console.log("Scrolling to:", targetId, "Found:", targetSection !== null);
            
            // Hauteur de la navbar ajustée
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
    function applyTheme(isLightMode) {
        document.body.classList.toggle("light-mode", isLightMode);
        localStorage.setItem("theme", isLightMode ? "light" : "dark");
        themeToggle.textContent = isLightMode ? "☀️" : "🌙";
    }
    applyTheme(localStorage.getItem("theme") === "light");
    themeToggle.addEventListener("click", () => applyTheme(!document.body.classList.contains("light-mode")));

    /** ========================== **/
    /** 🚀 LOGO APPARITION **/
    /** ========================== **/
    gsap.from(".logo", { opacity: 0, y: -30, duration: 1, ease: "power3.out" });

    /** ========================== **/
    /** 🖋️ SOULIGNEMENT DES MOTS CLÉS **/
    /** ========================== **/
    document.querySelectorAll("h1, h2, p").forEach(element => {
        element.innerHTML = element.innerHTML.replace(
            /\b(Me|moi|Mien)\b/g, 
            '<span style="text-decoration: underline; text-decoration-thickness: 2px;">$1</span>'
        );
    });
});