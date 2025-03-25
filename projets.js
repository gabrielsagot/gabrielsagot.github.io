document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    gsap.registerPlugin(ScrollToPlugin);

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
    const pageTitle = document.getElementById("page-title");
    const projetsWord = document.getElementById("projets-word");

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

        // Changement de couleur du titre
        if (pageTitle) {
            gsap.to(pageTitle, { color: isLightMode ? "#1E1E1E" : "white", duration: 0.3 });
        }

        // Changement dynamique de la couleur du mot "projets"
        if (projetsWord) {
            gsap.to(projetsWord, {
                color: isLightMode ? "#7C0E85" : "#7C0E85", /* Violet en mode jour */
                textShadow: isLightMode
                    ? "0px 0px 15px rgba(124, 14, 133, 0.6)"
                    : "0px 0px 15px rgba(255, 127, 17, 0.6)",
                duration: 0.3
            });
        }

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
/** 🎬 ANIMATION TITRE PROJETS UNIVERSITAIRES & BOUTON TRIER **/
/** ========================== **/

gsap.set(".section-title, .section-divider, #filter-btn", { opacity: 0, y: 30 });

gsap.to(".section-title", {
    opacity: 1,
    y: 0,
    duration: 1.3,
    ease: "power2.out",
    delay: 0.8
});

gsap.to(".section-divider", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    delay: 1
});

gsap.to("#filter-btn", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    delay: 1.2
});
    
 
/** ========================== **/
/** 🔀 Gestion du bouton Trier **/
/** ========================== **/
const filterBtn = document.getElementById("filter-btn");
const filterOptions = document.getElementById("filter-options");
let isOpen = false;

// Fonction pour ouvrir/fermer le menu
filterBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche la propagation du clic vers window
    isOpen = !isOpen;
    if (isOpen) {
        filterOptions.style.display = "block"; // Affiche avant l'animation
        gsap.to(filterOptions, { opacity: 1, scaleY: 1, duration: 0.3 });
    } else {
        gsap.to(filterOptions, { opacity: 0, scaleY: 0, duration: 0.3, onComplete: () => {
            filterOptions.style.display = "none";
        }});
    }
});

// Ferme le menu si on clique en dehors
document.addEventListener("click", function (event) {
    if (isOpen && !filterOptions.contains(event.target) && event.target !== filterBtn) {
        isOpen = false;
        gsap.to(filterOptions, { opacity: 0, scaleY: 0, duration: 0.3, onComplete: () => {
            filterOptions.style.display = "none";
        }});
    }
});

// Récupérer la grille des projets et les projets individuels
const projectsGrid = document.querySelector(".projects-grid");
let projectCards = Array.from(document.querySelectorAll(".projects-section .project-card"));

// Stocker les informations des projets
let projectsData = projectCards.map(card => ({
    element: card,
    date: Number(card.getAttribute("data-date")) || 0, // ✅ Convertir en nombre proprement
    time: Number(card.getAttribute("data-time")) || 0
}));

// Vérification console pour debug
console.log("Projets AVANT tri :", projectsData.map(p => p.date));

// Trier immédiatement par défaut du plus récent au plus ancien (date décroissante)
projectsData.sort((a, b) => b.date - a.date);
console.log("Projets APRÈS tri :", projectsData.map(p => p.date));

// Attendre le chargement complet pour afficher les projets triés
window.addEventListener("load", () => {
    projectsGrid.innerHTML = "";
    projectsData.forEach(proj => projectsGrid.appendChild(proj.element));
});

// Mettre à jour l'affichage du tri actif
document.querySelectorAll(".filter-option").forEach(btn => btn.classList.remove("active-filter"));
const defaultButton = document.querySelector(`.filter-option[data-sort="date-desc"]`);
if (defaultButton) defaultButton.classList.add("active-filter");
// Forcer l'effet de vague dès le chargement
if (defaultButton) {
    gsap.fromTo(defaultButton, 
        { backgroundSize: "0% 100%" }, 
        { backgroundSize: "100% 100%", duration: 0.6, ease: "power2.out" }
    );
}

// Fonction pour trier dynamiquement les projets
function sortProjects(criteria) {
    let sortedProjects;

    switch (criteria) {
        case "date-asc":
            sortedProjects = projectsData.sort((a, b) => a.date - b.date);
            break;
        case "date-desc":
            sortedProjects = projectsData.sort((a, b) => b.date - a.date);
            break;
        case "time-asc":
            sortedProjects = projectsData.sort((a, b) => a.time - b.time);
            break;
        case "time-desc":
            sortedProjects = projectsData.sort((a, b) => b.time - a.time);
            break;
        default:
            sortedProjects = projectsData;
    }

    // Animation GSAP pour rendre le tri fluide
    gsap.to(".project-card", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.1,
        onComplete: () => {
            projectsGrid.innerHTML = ""; // On enlève les anciens projets
            sortedProjects.forEach(proj => projectsGrid.appendChild(proj.element)); // On insère les nouveaux

            gsap.fromTo(".project-card", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 });
        }
    });

    // Mettre à jour visuellement l'indicateur du tri actif
    document.querySelectorAll(".filter-option").forEach(btn => btn.classList.remove("active-filter"));
    const activeButton = document.querySelector(`.filter-option[data-sort="${criteria}"]`);
    if (activeButton) {
        activeButton.classList.add("active-filter");
        setTimeout(() => activeButton.classList.add("animated"), 50);
    }
}

// Associer les boutons de tri aux fonctions
document.querySelectorAll(".filter-option").forEach(button => {
    button.addEventListener("click", () => {
        const sortType = button.getAttribute("data-sort");
        sortProjects(sortType);
    });
});
    
    /** ========================== **/
/** 🚀 ANIMATION D'APPARITION DES PROJETS UNIVERSITAIRES **/
/** ========================== **/

gsap.set(".project-card", { opacity: 0, y: 50, scale: 0.8, rotationY: -10, filter: "blur(10px)" });

gsap.to(".project-card", {
    opacity: 1,
    y: 0,
    scale: 1,
    rotationY: 0,
    filter: "blur(0px)",
    duration: 1.8,
    ease: "power4.out",
    stagger: 0.4, // Apparition en cascade
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 100%", // Déclenchement en arrivant dans la viewport
        toggleActions: "play none none none"
    }
});
        
    
    /** ========================== **/
    /** ✨ ANIMATION TITRE PRINCIPAL **/
    /** ========================== **/
    const title = document.getElementById("page-title");
    title.innerHTML = `
        <span class="word un">U<span>n</span></span> 
        <span class="word zoom">zoom</span> 
        <span class="word surmes">s<span>u</span>r <span>m</span>es</span> 
        <span class="word projets" id="projets-word">projets</span>
    `;
    
    gsap.set(".un span, .surmes span", { y: 50, opacity: 0 });
    gsap.set(".zoom, .projets", { scale: 0, opacity: 0, filter: "blur(10px)" });
    gsap.set(".projets", { color: "orange" });
    
    let tl = gsap.timeline({ delay: 0.5 });
    
    tl.to(".un span, .surmes span", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
    })
    .to(".zoom", {
        scale: 1.45,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "back.out(2)"
    }, "-=0.3")
    .to(".zoom", {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    })
    .to(".projets", {
        scale: 1.45,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "back.out(2)"
    }, "-=0.3")
    .to(".projets", {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
    });

    /** ========================== **/
    /** 🔍 GESTION DES POP-UPS "EN SAVOIR PLUS" **/
    /** ========================== **/

    // Sélection des boutons et de la pop-up
    const projectButtons = document.querySelectorAll(".project-btn");
    const popupContainer = document.getElementById("popup-container");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupImages = document.getElementById("popup-images");
    const popupClose = document.querySelector(".popup-close");
    const imageZoomOverlay = document.createElement("div");

    imageZoomOverlay.id = "image-zoom-overlay";
    document.body.appendChild(imageZoomOverlay);

    const projectData = {
          "1": {
        title: "Création d'une synthèse via les réponses d'un questionnaire",
        description: "A l'aide du logiciel Sphinx, nous avons mené une étude sur les pratiques sportives et les conditions de vie des étudiants en 2024. À partir d’un questionnaire ayant recueilli 375 réponses, nous avons analysé divers aspects comme la répartition des étudiants par filière et région, leur mode de vie, ainsi que leur relation avec le sport et la santé. Nos travaux ont abouti à deux livrables principaux : une synthèse des résultats, mettant en avant les tendances générales et les problématiques rencontrées par les étudiants, et un tableau de bord interactif, permettant de comparer les habitudes des sportifs et non-sportifs à travers des indicateurs visuels clairs. L’analyse révèle notamment que près de 60 % des étudiants manquent de temps ou de moyens pour pratiquer une activité physique régulière, et que la transition vers l’enseignement supérieur impacte fortement la pratique sportive. Nous avons également mis en évidence le lien entre activité physique, alimentation et bien-être général. Ce travail nous a permis d’approfondir nos compétences en analyse de données et restitution visuelle, tout en mettant en lumière des enjeux concrets liés à la vie étudiante.",
        images: ["projet1_1.png", "projet1_2.png"]
    },
    "2": {
        title: "Création d'un reporting EXCEL VBA",
        description: "Dans le cadre de notre premier gros projet, nous avons réalisé un outil de gestion des notes sous Excel permettant aux étudiants de suivre leurs résultats académiques. Il inclut l’ajout et la modification des notes via des listes déroulantes, un tableau de bord dynamique avec des graphiques, ainsi qu’une automatisation de la décision du jury pour le passage en 2ᵉ année. L’ergonomie était un critère important, et nous avons soigné l’interface pour la rendre intuitive. Travaillant en duo avec Théo, nous avons bouclé le projet en une semaine, ce qui était suffisant, bien que VBA ait été une nouveauté pour nous. L’apprentissage a été rapide, mais nous avons rencontré quelques difficultés pour automatiser certaines tâches, notamment la prise de décision du jury et l’ajout de notes via des formulaires interactifs. Malgré cela, nous avons livré un fichier fonctionnel et bien présenté, avec un design clair et des fonctionnalités conformes aux attentes. Avec plus de temps, nous aurions pu encore optimiser le code VBA et enrichir l’ergonomie. Notre travail nous a permis d'obtenir la note de 17/20 ainsi que la possibilité de présenter notre projet à la journée portes ouvertes de notre IUT !",
        images: ["projet2_1.png", "projet2_2.png"]
    },
    "3": {
        title: "Gestion de fichiers (JSON to excel)",
        description: "Nous avons eu pour mission de développer un script Python nommé transformerJsonToCsv.py permettant de convertir un fichier JSON en CSV contenant les événements culturels de la Ville de Paris. Le fichier final devait respecter un format précis avec des colonnes comme l’ID, le titre, la description, les dates et heures, les coordonnées géographiques, ou encore les informations d’accessibilité et de contact. Nous avons travaillé en duo avec Aubin et avons dû réaliser ce projet en seulement 4 heures, ce qui a rendu la tâche très compliquée. La difficulté principale venait du temps limité, car nous devions rapidement comprendre la structure du JSON, extraire et reformater les données correctement (notamment les accents, le format des dates et heures, et l’encodage), tout en respectant la structure demandée. Voici une infime partie du JSON d’origine (image 1 ci dessous), et grâce à notre script Python, nous avons réussi à obtenir un fichier CSV lisible sous Excel, affichant les données sous forme de tableau structuré et exploitable. Malgré la pression du temps, nous avons livré un programme fonctionnel, en suivant les bonnes pratiques Python avec un code bien structuré et commenté. Cette expérience nous a surtout appris à être efficaces et méthodiques pour transformer des données rapidement et proprement.",
        images: ["projet3_1.png", "projet3_2.png"]
    },
    "4": {
        title: "Conception et implémentation d'une base de données",
        description: "Pour ce projet, nous avons conçu et implémenté une base de données relationnelle pour la gestion des approvisionnements et ventes de sel d’une coopérative de l’île de Ré. Nous avons d’abord élaboré un Modèle Conceptuel de Données (MCD) sous Looping_MCD, avant de générer le Modèle Logique de Données (MLD) et un script SQL pour créer la base sous MySQL. Nous avons ensuite inséré des données en nous basant sur les transactions de l’année 2023 et automatisé l’importation des fichiers via un script Python. Une interface graphique en Tkinter a été développée pour permettre d’interagir avec la base de manière intuitive : consultation des stocks, enregistrement des entrées/sorties de sel, insertion de nouvelles données et exécution de 10 requêtes SQL avancées (regroupements, filtrages, mise à jour, suppression). Enfin, nous avons réalisé une vidéo bilan pour présenter et tester notre solution, en expliquant ce qui fonctionne, les axes d’amélioration et notre apprentissage. Ce projet nous a permis de maîtriser la conception et gestion d’une base de données, l’automatisation de traitements en Python, ainsi que l’importance d’une interface utilisateur ergonomique.",
        images: ["projet4_1.png"]
    },
    "5": {
        title: "Calendrier partagé",
        description: "En janvier 2025, j’ai entrepris de créer un calendrier partagé pour ma famille et moi, non seulement pour son aspect pratique, mais aussi pour l’opportunité d’apprentissage qu’il représentait. Ce projet m’a permis de me former en autodidacte à des technologies que je n’avais jamais étudiées en cours, notamment HTML, PHP, CSS, JavaScript et SQL, rendant le défi d’autant plus complexe et stimulant. J’y ai consacré plus de 110 heures, ce qui m’a permis d’acquérir une solide maîtrise de ces langages et de mieux comprendre leur articulation dans un projet web complet. Mon site repose sur trois onglets principaux : un calendrier interactif (illustré par l’image du titre), un tableau de bord dynamique mis à jour en temps réel via SQL selon les sélections du calendrier (illustrations 1 et 2), ainsi qu’un onglet “To-Do” dédié à la gestion des tâches. Ce projet m’a non seulement apporté une expérience technique précieuse, mais il m’a également appris à structurer une application web complète, à gérer une base de données et à concevoir une interface fluide et intuitive pour l’utilisateur.",
        images: ["projetperso1.png", "projetperso1_2.png"]
    }
    };

    if (popupContainer && popupTitle && popupDescription && popupImages && popupClose) {
        projectButtons.forEach(button => {
            button.addEventListener("click", () => {
                const projectId = button.getAttribute("data-project");
                const project = projectData[projectId];

                if (project) {
                    popupTitle.textContent = project.title;
                    popupDescription.textContent = project.description;
                    popupImages.innerHTML = "";
                    
                    if (project.images.length > 0) {
                        project.images.forEach(imgSrc => {
                            let img = document.createElement("img");
                            img.src = imgSrc;
                            img.alt = "Image du projet";
                            img.classList.add("popup-image");
                            popupImages.appendChild(img);
                        });
                    }

                    gsap.set(popupContainer, { opacity: 0, scale: 0.5, rotationY: -20, filter: "blur(10px)" });
                    popupContainer.classList.add("active");
                    gsap.to(popupContainer, {
                        opacity: 1,
                        scale: 1,
                        rotationY: 0,
                        filter: "blur(0px)",
                        duration: 0.6,
                        ease: "power2.out",
                        onStart: () => {
                            popupContainer.style.display = "flex";
                        }
                    });
                }
            });
        });

        popupClose.addEventListener("click", () => {
            gsap.to(popupContainer, {
                opacity: 0,
                scale: 0.5,
                rotationY: 20,
                filter: "blur(10px)",
                duration: 0.7,
                ease: "power2.inOut",
                onComplete: () => {
                    popupContainer.style.display = "none";
                    popupContainer.classList.remove("active");
                }
            });
        });

        popupContainer.addEventListener("click", (e) => {
            if (e.target === popupContainer) {
                popupClose.click();
            }
        });
    }

    // ✅ Gestion du zoom des images
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup-image")) {
            imageZoomOverlay.innerHTML = "";
            let zoomedImage = document.createElement("img");
            zoomedImage.src = e.target.src;
            zoomedImage.classList.add("zoomed-image");
            imageZoomOverlay.appendChild(zoomedImage);
            imageZoomOverlay.style.display = "flex";
        } else if (e.target === imageZoomOverlay) {
            imageZoomOverlay.style.display = "none";
        }
    });


	/** ========================== **/
/** 🔝 BOUTON RETOUR AU DÉBUT DES PROJETS UNIVERSITAIRES (Mode Jour/Nuit) **/
/** ========================== **/

// Vérifier que GSAP et ScrollToPlugin sont bien chargés
if (typeof gsap !== "undefined" && typeof ScrollToPlugin !== "undefined") {
    gsap.registerPlugin(ScrollToPlugin);

    // Création dynamique du bouton
    const backToTopBtn = document.createElement("button");
    backToTopBtn.id = "back-to-top";
    backToTopBtn.innerHTML = "🔝";
    document.body.appendChild(backToTopBtn);

    // Sélection de la section "Projets Universitaires"
    const projectsSection = document.querySelector(".projects-section");

    if (projectsSection) {
        // Effet d'apparition initial (bouton invisible au début)
        gsap.set("#back-to-top", { 
            opacity: 0, 
            scale: 0.9, 
            filter: "blur(5px)"
        });

        // Affichage/Masquage fluide du bouton au scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
                gsap.to("#back-to-top", { 
                    opacity: 1, 
                    scale: 1, 
                    filter: "blur(0px)", 
                    duration: 0.6, 
                    ease: "power3.out"
                });
            } else {
                gsap.to("#back-to-top", { 
                    opacity: 0, 
                    scale: 0.9, 
                    filter: "blur(5px)", 
                    duration: 0.5, 
                    ease: "power2.in"
                });
            }
        });

        // Animation au clic pour remonter en haut
        backToTopBtn.addEventListener("click", () => {
            gsap.to(window, { 
                scrollTo: { y: projectsSection, autoKill: true }, 
                duration: 1.2, 
                ease: "power4.out" 
            });

            // Petit effet rapide de rebond au clic
            gsap.fromTo("#back-to-top", 
                { scale: 1.2 }, 
                { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" }
            );
        });

        // Effet au survol dynamique avec détection du mode Jour/Nuit
backToTopBtn.addEventListener("mouseenter", () => {
    const isLightMode = document.body.classList.contains("light-mode");
    const shadowColor = isLightMode 
        ? "rgba(124, 14, 133, 0.5)"  // 🟣 Violet en mode Jour
        : "rgba(255, 127, 17, 0.5)"; // 🟠 Orange en mode Nuit

    gsap.to("#back-to-top", { 
        scale: 1.1, 
        boxShadow: `0px 8px 18px ${shadowColor}`, 
        duration: 0.3, 
        ease: "power2.out" 
    });
});

// Effet lorsqu'on quitte le bouton (retour à la normal)
backToTopBtn.addEventListener("mouseleave", () => {
    const isLightMode = document.body.classList.contains("light-mode");
    const shadowColor = isLightMode 
        ? "rgba(124, 14, 133, 0.3)"  // 🟣 Violet plus doux en mode Jour
        : "rgba(255, 127, 17, 0.3)"; // 🟠 Orange plus doux en mode Nuit

    gsap.to("#back-to-top", { 
        scale: 1, 
        boxShadow: `0px 4px 10px ${shadowColor}`, 
        duration: 0.3, 
        ease: "power2.in" 
    });
});

        // Détection du mode Jour/Nuit et mise à jour des styles
        function updateButtonTheme() {
            if (document.body.classList.contains("light-mode")) {
                backToTopBtn.classList.add("light-mode");
            } else {
                backToTopBtn.classList.remove("light-mode");
            }
        }

        // Vérification immédiate et écoute des changements
        updateButtonTheme();
        const observer = new MutationObserver(updateButtonTheme);
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    } else {
        console.error("Erreur : La section .projects-section n'existe pas dans le DOM.");
    }
} else {
    console.error("Erreur : GSAP ou ScrollToPlugin ne sont pas chargés.");
}


/** ========================== **/
/** 🍔 BURGER MENU MOBILE     **/
/** ========================== **/
const burgerToggle = document.getElementById("burger-toggle");
const navLinks = document.querySelector(".nav-links");

// ✅ Ferme le menu quand on clique sur un lien
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    burgerToggle.classList.remove("open");
  });
});

/** ========================== **/
/** 📱 ANIMATIONS GSAP MOBILE  **/
/** ========================== **/
if (window.innerWidth <= 768) {
  const warning = document.getElementById("mobile-warning");
  const closeBtn = document.getElementById("close-warning");

  // ✅ Affichage du message mobile
  if (warning && closeBtn) {
    gsap.fromTo(warning,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
    );
    warning.style.display = "block";

    gsap.fromTo(closeBtn,
      { scale: 0, rotate: -90 },
      { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)", delay: 0.6 }
    );

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

  // ✅ Toggle du menu burger avec animation
  if (burgerToggle && navLinks) {
    burgerToggle.addEventListener("click", () => {
      if (navLinks.classList.contains("show")) {
        gsap.to(navLinks, {
          y: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            navLinks.classList.remove("show");
            burgerToggle.classList.remove("open");
          }
        });
      } else {
        navLinks.classList.add("show");
        burgerToggle.classList.add("open");
        gsap.fromTo(navLinks,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  }
}


});