document.addEventListener("DOMContentLoaded", function () {

// 📘 BILAN ANNUEL — Éléments HTML
const yearButtons = document.querySelectorAll('.year-btn');
const bilanItems = document.querySelectorAll('.bilan-item');
const bilanPopup = document.getElementById('bilan-popup');
const bilanPopupContent = document.querySelector('.bilan-popup-content');
const bilanPopupClose = document.querySelector('.bilan-popup-close');
const bilanPopupText = document.getElementById('bilan-popup-text');
const bilanPopupTitle = document.getElementById('bilan-popup-title');

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
        title: "Analyse de l'activité économique des régions françaises en 2023",
        description: "Dans le cadre du TD n°3 d’économie en deuxième semestre de BUT Science des Données, j’ai travaillé sur une étude approfondie de l’activité économique des régions françaises en 2023. Ce travail s’inscrivait dans une démarche d’analyse des disparités territoriales à partir des données de l’INSEE, accessibles via une base Excel fournie sur notre espace pédagogique (UPdago). La consigne était claire : à partir de ces données économiques et démographiques, nous devions produire un document de synthèse structuré, répondant à une série de questions précises. Le cœur du travail reposait sur trois indicateurs clés : le PIB global, le PIB par habitant et le PIB par emploi, chacun nous permettant d’évaluer une facette différente de la richesse produite par région. Dans un premier temps, j’ai calculé la part de chaque région dans le PIB national, puis identifié les trois régions les plus contributrices : Île-de-France, Auvergne-Rhône-Alpes et Nouvelle-Aquitaine, représentant à elles seules près de la moitié du PIB du pays. Ensuite, j’ai procédé à l’indexation du PIB régional en prenant l’Île-de-France comme base 100, afin de visualiser plus finement les écarts de production. Des calculs de coefficient multiplicateur ont aussi été réalisés pour mesurer l’écart entre les régions extrêmes comme la Corse et l’Île-de-France. À travers différents graphiques, j’ai illustré ces écarts économiques bruts. Le travail s’est ensuite concentré sur la population : j’ai calculé la part démographique de chaque région, les indices de population et les écarts en nombre d’habitants. Cela m’a permis de mettre en lumière une certaine corrélation entre taille démographique et contribution économique, tout en révélant des exceptions. J’ai ensuite analysé les écarts de PIB par habitant par rapport à la moyenne nationale, ce qui a montré une forte inégalité entre certaines régions. Par exemple, l’Île-de-France affiche un PIB/hab supérieur de plus de 100 % à la moyenne nationale, alors que la Corse est en dessous. La dernière partie du travail portait sur le PIB par emploi, qui permet de mesurer la productivité moyenne des actifs. En croisant les données de population, d’emploi et de richesse, j’ai pu calculer des ratios pertinents, comme le rapport entre le PIB par habitant et le PIB par emploi, révélateur de l’efficacité socio-économique de chaque région. J’ai ainsi pu commenter les disparités régionales en matière de productivité, et mieux comprendre la réalité économique de la France. Cette SAE m’a permis de mobiliser des compétences techniques (calculs statistiques, construction de graphiques, traitement de données Excel) tout en développant une capacité de synthèse et d’analyse critique. Elle m’a aussi aidé à renforcer ma compréhension de la géographie économique du pays et de l’intérêt des indicateurs macroéconomiques pour éclairer les politiques publiques.",
        images: ["projet5_1.png", "projet5_2.png"]
    },       
    "6": {
        title: "Régression linéaire",
        description: "Dans le cadre de notre projet de SAE consacré à la régression sur données réelles, j’ai travaillé en binôme sur un jeu de données concernant les ventes immobilières dans le département des Deux-Sèvres, couvrant l’année 2023 et le premier semestre 2024. Le jeu de données était scindé en deux fichiers CSV : un fichier d’apprentissage (train), contenant les prix de vente et des informations détaillées sur chaque bien immobilier, et un fichier de test (test), identique en structure mais sans les prix de vente. L’objectif du projet était clair : construire un modèle permettant de prédire le prix de vente des logements du fichier test à partir des données disponibles. Dès le départ, nous avons dû composer avec une contrainte pédagogique forte : l’interdiction d’utiliser des fonctions de régression toutes faites comme lm ou des bibliothèques externes, ce qui nous a poussés à adopter une approche artisanale, entièrement construite “à la main”, fondée sur des principes statistiques élémentaires. Nous avons commencé le travail sous Excel afin d’explorer les données : j’ai notamment effectué les premières analyses descriptives (moyenne, écart-type, corrélations, coefficients de détermination) et observé la relation entre variables clés comme la surface bâtie ou le nombre de pièces, et la valeur foncière. Ensuite, nous avons migré sur RStudio, où nous avons d’abord testé un modèle linéaire simple. Celui-ci s’est vite révélé insatisfaisant en raison d’une somme des carrés des résidus trop élevée, ce qui nous a poussé à abandonner cette piste. Nous avons alors opté pour un modèle conditionnel basé sur des classes, que nous avons construites en combinant plusieurs variables : la commune, le type de bien, la surface réelle bâtie, le nombre de pièces principales et la surface du terrain. Chaque bien immobilier a ainsi été associé à une classe, et le prix prédit était simplement la moyenne des prix des biens similaires observés dans le fichier d’entraînement. Pour stabiliser les résultats et atténuer l’impact des valeurs extrêmes, nous avons transformé la variable cible en racine carrée avant les calculs, puis appliqué l’inverse au moment de la prédiction finale. Cette approche, bien que simple, a nécessité un important travail d’étalonnage : nous avons testé différentes granularités (jusqu’à 10 classes par variable), ajusté nos regroupements, et évalué nos modèles à l’aide d’indicateurs comme le taux de fallback (quand une classe n’existe pas dans les données d’apprentissage) ou la dispersion des prédictions. J’ai personnellement contribué à la conception des classes sur Excel, en analysant les répartitions et en veillant à une couverture maximale des cas du fichier test. Mon binôme, Marzouk, s’est concentré sur la mise en œuvre du modèle dans R, ainsi que sur l’interprétation statistique des résultats. Ensemble, nous avons régulièrement confronté nos hypothèses aux données, modifié nos choix en fonction des résultats, et construit un raisonnement rigoureux, itératif, inspiré d’une vraie logique de modélisation. Le modèle final, bien qu’allégé pour éviter la sur-segmentation, reste performant : il comporte 4 classes de surface bâtie, 2 classes de pièces principales, 3 classes de surface de terrain, ainsi qu’un regroupement pertinent des communes. Un fallback basé sur le couple type + surface a été utilisé pour les cas manquants, ce qui a permis d’obtenir des prédictions pour 100 % des biens du fichier test. D’un point de vue quantitatif, les résultats sont satisfaisants : la médiane des prix prévus est cohérente (127 018 €), l’écart-type est raisonnable (63 000 €), et la distribution globale des prédictions reste fidèle à celle du fichier d’apprentissage. L’analyse graphique confirme une relation croissante entre surface et prix, validant la logique du modèle. Ce projet m’a permis de mieux comprendre les défis concrets liés à la modélisation statistique : collecte de données pertinentes, structuration des variables, compromis entre précision et couverture, et importance d’un raisonnement progressif et ajustable. Au-delà des aspects techniques, j’ai également renforcé ma capacité à collaborer efficacement, à communiquer mes analyses, et à défendre mes choix de manière argumentée. En conclusion, ce projet m’a non seulement permis de mettre en pratique les compétences acquises cette année, mais aussi de prendre conscience de l’exigence intellectuelle et méthodologique que représente la construction d’un modèle prédictif robuste sur des données réelles",
        images: ["projet6_1.png"]
    },  
    "7": {
        title: "Analyse de données, reporting et datavisualisation",
        description: "Dans le cadre de la SAÉ “Analyse de données, Reporting et Datavisualisation”, considérée comme la plus importante de notre semestre tant par sa durée que par son coefficient, j’ai eu l’opportunité de travailler en équipe de quatre étudiants sur un projet ambitieux mêlant traitement de données réelles, automatisation, visualisation, et reporting décisionnel. Cette SAÉ s’étalait sur deux semaines complètes, avec pour objectif de concevoir un outil interactif et dynamique à destination d’un commanditaire externe (Mme Dupuy de l’équipe Calyxis), afin d’analyser les accidents de la vie courante (AcVC) à partir d’un jeu de données fourni via un fichier Excel nommé MA_VIE_BD_SD_mai_2025.xls. Le cœur du projet consistait à extraire de ce fichier deux types de valeur : d’une part une comparaison des volontaires du fichier avec la population française, et d’autre part une analyse fine des accidents survenus, en mettant en lumière les facteurs qui favorisent ou limitent leur apparition. Nous devions aussi concevoir un tableau de bord complet et automatisé, capable de générer des indicateurs lisibles et exploitables pour des actions de prévention ciblées. En amont, nous avons également dû nettoyer les données, qui comportaient des irrégularités (valeurs manquantes, accents mal codés, champs complexes de type dictionnaire…), en veillant à ce que ce nettoyage soit intégré à la chaîne de traitement automatisée. Nous avons structuré notre projet autour de la méthode SCRUM, avec une organisation claire en sprints. J’ai assuré le rôle de Scrum Master, chargé d’organiser les mêlées quotidiennes et de garantir l’avancement des tâches selon notre tableau Kanban (géré sur Trello). Les user stories, listant les fonctionnalités attendues, ont été priorisées et assignées à chacun selon les compétences. Notre groupe s’est rapidement réparti les rôles : un binôme s’est concentré sur le nettoyage des données et leur structuration, un autre sur les visualisations et les analyses statistiques. De mon côté, j’ai activement participé à l’élaboration de l’interface, à la structuration du code Python (avec Tkinter pour l’ergonomie), et à l’implémentation de la logique comparative avec les données INSEE. Notre outil prend en entrée le fichier Excel source, traite automatiquement les deux feuilles (BD_Quest et Accident), fusionne les données, nettoie les champs complexes, et alimente un tableau de bord structuré en deux volets : d’une part une analyse de représentativité des répondants (par genre et tranche d’âge, comparée à la population française), d’autre part une analyse des caractéristiques des accidents selon les conditions de logement, les équipements, ou d’autres facteurs de contexte. L’utilisateur peut importer un nouveau fichier Excel, déclenchant l’automatisation complète de l’analyse. Une fois les données traitées, l’outil permet également de générer des exports, visualiser des statistiques et observer des corrélations significatives via des graphiques interactifs. Un volet “Statistiques avancées” propose des tests du Khi² pour valider les liens entre variables qualitatives, avec calcul du V de Cramér. La dernière phase du projet a consisté à documenter l’ensemble du travail : rédaction d’un tutoriel d’utilisation, production d’un rapport analytique de deux pages basé sur nos indicateurs, préparation d’une présentation PowerPoint en anglais pour l’oral final, et livraison des scripts et fichiers techniques. La présentation orale, planifiée le 4 juin, a été minutieusement préparée en respectant une répartition équilibrée du temps de parole. Nous avons mis en avant la démarche technique, les choix méthodologiques, la démonstration de notre interface, ainsi que la clarté de nos visuels. Ce projet m’a énormément appris, autant sur le plan technique que sur l’aspect organisationnel. Il m’a permis de consolider mes compétences en data cleaning, en comparaison statistique, en automatisation Python, et en visualisation de données. J’ai aussi pu expérimenter concrètement la gestion de projet en méthode agile, ce qui m’a beaucoup aidé à structurer le travail collectif et à répartir efficacement les tâches. Cette SAE m’a montré l’importance de construire un outil à la fois robuste, lisible, intuitif et réutilisable dans un cadre professionnel réel. En résumé, je suis particulièrement fier du travail réalisé et de la maturité collective dont notre groupe a su faire preuve dans la réalisation de ce projet exigeant.",
        images: ["projet7_1.png", "projet7_2.png"]
    },
     "8": {
    title: "Développement web",
    description: "Au début du mois de janvier 2025, j’ai commencé à m’intéresser de manière sérieuse à la conception de sites web. Ce qui n’était au départ qu’une simple curiosité s’est rapidement transformé en un véritable projet personnel. Sans cours ni encadrement formel, j’ai choisi de me former en autodidacte, en explorant de nombreuses ressources disponibles en ligne : tutoriels YouTube, documentations officielles, articles spécialisés, forums comme Stack Overflow ou OpenClassrooms. Je me suis lancé avec zéro expérience préalable dans le développement web, et j’ai très vite été confronté à la complexité des langages HTML, CSS et JavaScript. Comprendre le fonctionnement des balises, organiser correctement le DOM, gérer les positionnements CSS ou encore appréhender la logique événementielle de JavaScript a représenté un réel défi. J’ai fait de nombreuses erreurs, parfois très frustrantes, mais c’est justement ce processus d’essais, d’échecs, de recherche et de correction qui m’a permis de progresser rapidement. Je me suis vite rendu compte que la seule façon d’apprendre, c’était de coder, encore et encore. Au fil des semaines, mes projets personnels se sont complexifiés. J’ai appris à structurer mes fichiers, à créer des interfaces responsives, à améliorer l’expérience utilisateur avec des effets de survol, des transitions douces, et des animations. C’est à ce moment-là que j’ai découvert GSAP (GreenSock Animation Platform), une librairie JavaScript extrêmement puissante qui m’a permis de donner une autre dimension à mes projets : animations de texte, scroll fluide, effets de transition sophistiqués entre sections, interactions dynamiques sur les boutons ou les menus… L’ajout de GSAP a transformé la qualité visuelle de mes sites et m’a permis de mieux comprendre la logique des timelines, des easing functions et des callbacks. J’ai également commencé à m’intéresser à l’aspect plus fonctionnel des sites web, notamment la gestion des utilisateurs, des données et des connexions. Cela m’a amené à intégrer Firebase dans mes projets, une plateforme que j’ai trouvée très accessible pour l’authentification, la gestion des bases de données en temps réel, et l’hébergement. Cette combinaison entre front-end esthétique et back-end fonctionnel m’a permis de construire des sites de plus en plus complets, capables de gérer des utilisateurs, de stocker des messages ou des contenus, et de fonctionner comme de vraies applications interactives. Grâce à cette montée en compétence progressive, j’ai pu passer d’une phase d’apprentissage à une phase de mise en application concrète. J’ai eu l’opportunité de réaliser plusieurs sites web pour des petites entreprises locales, qui avaient besoin de visibilité ou de modernisation de leur communication en ligne. J’ai adapté chaque projet aux besoins du client : mise en page personnalisée, navigation fluide, contenus adaptés, formulaire de contact fonctionnel, référencement optimisé… Cela m’a permis de développer une véritable rigueur dans ma manière de travailler, d’écouter un besoin, de proposer une maquette, de la transformer en code propre, et de tester l’outil final sur différents navigateurs et supports. J’ai également appris à documenter mes projets, à maintenir un code lisible, et à tenir compte de l’accessibilité. Ce travail en solo, parfois exigeant, m’a fait gagner en autonomie, en logique de conception et en créativité. Aujourd’hui, je continue à me former en parallèle de mes études, en approfondissant des frameworks modernes, en explorant le responsive design avancé et en construisant un portfolio personnel complet. Cette passion pour le développement web m’ouvre de nouvelles perspectives professionnelles, que je compte bien continuer à explorer à long terme.",
    images: ["projetperso1.png", "projetperso2.png", "projetperso3.png", "projetperso4.png"]
},
  
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
    backToTopBtn.innerHTML = "⬆️";
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

// 📱✨ Apparition des projets mobile + détection du mode
if (window.innerWidth <= 768) {
  const isLight = document.body.classList.contains("light-mode");

  gsap.set(".project-card", {
    opacity: 0,
    scale: 0.8,
    rotationZ: -10,
    y: 60,
    boxShadow: "0 0 0 rgba(0,0,0,0)"
  });

  gsap.to(".project-card", {
    scrollTrigger: {
      trigger: ".projects-grid",
      start: "top 90%", // dès que le haut de la grille entre dans la fenêtre
      toggleActions: "play none none none",
      once: true // ✅ une seule fois
    },
    opacity: 1,
    scale: 1,
    y: 0,
    rotationZ: 0,
    boxShadow: isLight
      ? "0px 8px 25px rgba(124, 14, 133, 0.25)"   // violet clair en mode jour
      : "0px 8px 25px rgba(255, 127, 17, 0.25)", // orange doux en mode nuit
    duration: 1.3,
    ease: "back.out(1.7)",
    stagger: 0.25
  });
}
    // Texte long détaillé pour chaque année
    const longBilanText = {
        "2024": `Mon entrée en BUT Science des Données à Niort en septembre dernier a marqué le début d’un nouveau cycle, à la fois stimulant, exigeant et profondément formateur. Issu d’un baccalauréat général effectué au lycée polyvalent du Haut Val de Sèvre, j’avais choisi les spécialités Mathématiques et Sciences Économiques et Sociales, avec l’option Mathématiques expertes en Terminale. Ce profil résolument scientifique m’a apporté des fondations solides pour aborder cette formation orientée vers l’analyse, les statistiques et la modélisation. La rigueur mathématique acquise au lycée m’a permis d’appréhender plus sereinement des enseignements comme les probabilités, les statistiques inférentielles, l’algèbre ou encore les bases de l’analyse de données.

Cependant, l’un des plus grands défis de cette année a été l’apprentissage de la programmation. En effet, je n’avais jusque-là jamais eu l’occasion de coder ou d’écrire la moindre ligne de code. À mon arrivée, j’ai constaté que de nombreux camarades avaient déjà une certaine expérience en Python, en R ou même en SQL. Cette différence de niveau initial m’a d’abord fait douter. J’appréhendais de ne pas réussir à suivre le rythme ou de rester bloqué face aux difficultés techniques.

Mais très rapidement, j’ai fait le choix de transformer cette crainte en moteur. J’ai consacré beaucoup de temps, dès les premières semaines, à comprendre les bases de la programmation : la logique conditionnelle, les boucles, la manipulation des données, les structures de données, etc. J’ai utilisé des ressources extérieures (tutoriels en ligne, documentation officielle, vidéos explicatives) pour approfondir ce qui était vu en cours. J’ai aussi beaucoup pratiqué, car j’ai vite compris que, comme en mathématiques, c’est en faisant que l’on progresse. À force de persévérance, j’ai réussi à combler une grande partie de mon retard initial, au point d’obtenir de bons résultats dans les évaluations et de me sentir beaucoup plus à l’aise aujourd’hui dans l’écriture de scripts et dans l’utilisation de bibliothèques comme pandas, seaborn ou ggplot2. Ce parcours, bien que difficile, a été extrêmement gratifiant.

Au-delà des enseignements théoriques, ce que j’ai particulièrement apprécié cette année, ce sont les projets menés dans le cadre des SAÉ (Situations d’Apprentissage et d’Évaluation). Ces projets m’ont permis de passer du concept abstrait à une application concrète, souvent en groupe. Travailler sur des cas réels ou réalistes (analyse de données, visualisations, création de dashboards, mini-applications…) m’a permis de donner du sens aux notions abordées en cours et de me projeter dans des situations professionnelles. Ces moments m’ont également appris à gérer un projet dans le temps, à répartir les tâches de manière équitable et à collaborer efficacement. La dimension collective, bien que parfois difficile à équilibrer, a été un bon entraînement à la vie professionnelle.

La recherche d’alternance a aussi été une dimension importante de mon année. Dès le mois de février, j’ai activement commencé à postuler auprès d’entreprises, principalement dans les secteurs de l’assurance, de la data, de l’énergie et du numérique. J’ai rédigé de nombreuses lettres de motivation, adapté mon CV, et participé à plusieurs entretiens. Cette démarche m’a permis de mieux cerner les attentes du marché de l’emploi, mais aussi de mieux définir mon propre projet professionnel. Même si mes efforts n’ont pas encore été récompensés par une alternance pour la deuxième année, je reste optimiste. Cette période de recherche m’a permis de développer ma communication, ma capacité à valoriser mes compétences, et ma connaissance des acteurs du secteur. À défaut d’alternance, je sais que le stage de fin d’année sera une opportunité intéressante pour découvrir un environnement professionnel concret, mettre en œuvre les compétences acquises et commencer à bâtir mon expérience.

Sur le plan personnel, cette année a aussi été une année de transition. Passer du lycée à l’enseignement supérieur demande une véritable réorganisation de ses méthodes de travail. J’ai dû apprendre à gérer mon temps, à prioriser mes tâches et à travailler de manière plus autonome. Si certaines périodes ont été intenses et parfois stressantes, j’ai beaucoup progressé dans ma capacité à m’adapter, à travailler dans la durée, et à ne pas me décourager face à la difficulté. J’ai aussi découvert l’importance de prendre du recul, de relire mes erreurs, et de toujours chercher à comprendre “le pourquoi” et “le comment” derrière chaque méthode ou chaque algorithme.

Par ailleurs, cette formation m’a permis de développer des compétences transversales que je n’imaginais pas forcément au départ. J’ai par exemple appris à mieux communiquer mes résultats, à les rendre lisibles et compréhensibles, notamment à travers des visualisations de données. J’ai aussi commencé à m’initier aux enjeux éthiques et réglementaires liés à l’usage des données personnelles, un aspect crucial dans le métier de data analyst ou data scientist aujourd’hui. Ces nouvelles dimensions ont renforcé mon intérêt pour le domaine de la data, que je perçois désormais comme un croisement entre technique, analyse, communication et responsabilité.

Enfin, cette première année a confirmé mon choix de formation. Malgré les doutes initiaux liés à la programmation, malgré les exigences parfois élevées de certains modules, je suis convaincu d’être à ma place dans ce BUT. Je ressors de cette année avec une vision plus claire de mes compétences, de mes axes d’amélioration, mais aussi de mon projet professionnel à long terme. J’envisage déjà, après le BUT, de poursuivre vers un master dans le domaine des statistiques, de la science des données ou de l’intelligence artificielle, afin de continuer à monter en compétence et à me spécialiser dans les domaines qui me passionnent le plus.

`,
        "2025": `Bilan à venir.`,
        "2023": `Bilan à venir.`
    };

    // 📌 Éléments DOM
    const downloadBtn = document.getElementById('download-bilan');

    // 🔁 Gérer le changement d’année
    yearButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.disabled) {
                console.warn(`[BILAN] Bouton année ${btn.dataset.year} désactivé, aucune action.`);
                return;
            }

            console.log(`🟣 [BILAN] Année sélectionnée : ${btn.dataset.year}`);

            yearButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const year = btn.dataset.year;
            bilanItems.forEach(item => {
                const show = item.dataset.year === year;
                item.style.display = show ? "block" : "none";
                console.log(`  ↪️ ${show ? 'Affiche' : 'Masque'} bilan ${item.dataset.year}`);
            });
        });
    });

    // 📩 Affichage de la pop-up au clic sur "Voir plus"
    document.querySelectorAll('.bilan-btn').forEach(button => {
        button.addEventListener('click', () => {
            const year = button.dataset.year;
            const texte = longBilanText[year] || "Contenu indisponible.";

            bilanPopupTitle.textContent = `Bilan Annuel ${year}`;
            bilanPopupText.textContent = texte;
            bilanPopup.classList.add('active');

            console.log(`🟢 [POPUP] Affichage pop-up pour année ${year}`);
            console.log(`   ↪️ Titre : ${bilanPopupTitle.textContent}`);
            console.log(`   ↪️ Texte : ${texte.substring(0, 60)}...`);
        });
    });

    // ❌ Fermeture via croix
    bilanPopupClose.addEventListener('click', () => {
        bilanPopup.classList.remove('active');
        console.log("🔴 [POPUP] Fermeture via croix");
    });

    // ❌ Fermeture en cliquant en dehors
    bilanPopup.addEventListener('click', (e) => {
        if (e.target === bilanPopup) {
            bilanPopup.classList.remove('active');
            console.log("🔴 [POPUP] Fermeture en cliquant en dehors");
        }
    });

    // 📥 Gestion du bouton de téléchargement PDF
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const activeBtn = document.querySelector('.year-btn.active');
            if (!activeBtn) {
                console.error("❌ Aucun bouton d'année actif trouvé !");
                return;
            }

            const year = activeBtn.dataset.year;
            const bilanTitle = `Bilan Annuel ${year}`;
            const bilanText = longBilanText[year] || "Contenu manquant.";

            console.log("📄 Génération du PDF...");
            console.log("   🗓️ Année :", year);
            console.log("   📝 Titre :", bilanTitle);
            console.log("   📚 Texte :", bilanText.substring(0, 100) + "...");

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            doc.text(bilanTitle, 20, 30);

            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            const splitText = doc.splitTextToSize(bilanText, 170);
            doc.text(splitText, 20, 50);

            doc.save(`Bilan_${year}.pdf`);
            console.log("✅ PDF téléchargé !");
        });
    } else {
        console.warn("🚫 Bouton de téléchargement introuvable dans le DOM.");
    }

    // 🎬 Animations GSAP à l'apparition
    console.log("✨ [GSAP] Lancement des animations ScrollTrigger");

    gsap.from(".bilan-title", {
        scrollTrigger: {
            trigger: ".bilan-title",
            start: "top 80%",
            onEnter: () => console.log("💫 Animation titre bilan déclenchée"),
        },
        opacity: 0,
        y: 40,
        duration: 1
    });

    gsap.from(".year-selector", {
        scrollTrigger: {
            trigger: ".year-selector",
            start: "top 85%",
            onEnter: () => console.log("💫 Animation année déclenchée"),
        },
        opacity: 0,
        y: 30,
        delay: 0.2,
        duration: 1
    });

    gsap.from(".bilan-item", {
        scrollTrigger: {
            trigger: ".bilan-item",
            start: "top 90%",
            onEnter: () => console.log("💫 Animation items bilan déclenchée"),
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8
    });
});