# Projets — BUT Science des Données, 1ʳᵉ année (2024–2025)

> **Note.** Ce document référence l'intégralité des projets réalisés par Gabriel Sagot
> pendant sa **première année de BUT Science des Données** (IUT de Niort, année universitaire
> 2024–2025). Il sert de source pour alimenter la section **« Projets »** du nouveau portfolio
> (`Portfolio_pro/`), dans la sous-partie consacrée aux **projets de l'année dernière**.
>
> Contenu extrait de l'ancien portfolio :
> `~/Downloads/gabrielsagot.github.io-main/` (`projets.html` + `projets.js`).
> Les images correspondantes se trouvent dans ce même dossier (voir chemins indiqués
> pour chaque projet). À terme : copier ces images dans `Portfolio_pro/assets/` puis
> les intégrer aux fiches projets.

---

## Récapitulatif

| # | Projet | Date de début | Temps investi | Difficulté | Techno principale |
|---|--------|---------------|---------------|------------|-------------------|
| 3 | Gestion de fichiers (JSON → Excel) | 21 nov. 2024 | 4 h | Difficile | Python |
| 2 | Reporting Excel VBA | 16 déc. 2024 | 33 h | Moyen | VBA / Excel |
| 1 | Synthèse de questionnaire (Sphinx) | 8 janv. 2025 | 10 h | Facile | Sphinx |
| 4 | Conception & implémentation d'une base de données | 5 févr. 2025 | 40 h | Difficile | SQL / MySQL / Python |
| 6 | Régression linéaire sur données réelles | 1ᵉʳ avr. 2025 | 10 h | Difficile | R / Excel |
| 5 | Analyse économique des régions françaises (2023) | 20 mai 2025 | 8 h | Facile | Excel |
| 7 | Analyse de données, reporting & datavisualisation | 1ᵉʳ juin 2025 | 32 h | Difficile | Python / SCRUM |
| 8 | Conception de sites web (projet personnel) | janv. 2025 | +110 h | Très difficile | HTML/CSS/JS / GSAP / Firebase |

*(Numérotation issue de l'ancien portfolio, conservée pour faire le lien avec les fichiers images.)*

---

# Projets universitaires (SAÉ)

## Projet 3 — Gestion de fichiers (JSON → Excel)

- **Titre complet :** Gestion de fichiers (JSON to Excel)
- **Date de début :** 21 novembre 2024
- **Temps investi :** 4 h
- **Difficulté :** Difficile
- **Technologies :** Python
- **Travail en :** binôme (avec Aubin)
- **Images :** `projet3.png` (vignette), `projet3_1.png`, `projet3_2.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Nous avons eu pour mission de développer un script Python nommé `transformerJsonToCsv.py`
permettant de convertir un fichier JSON en CSV contenant les événements culturels de la Ville
de Paris. Le fichier final devait respecter un format précis avec des colonnes comme l'ID, le
titre, la description, les dates et heures, les coordonnées géographiques, ou encore les
informations d'accessibilité et de contact. Nous avons travaillé en duo avec Aubin et avons dû
réaliser ce projet en seulement 4 heures, ce qui a rendu la tâche très compliquée. La difficulté
principale venait du temps limité, car nous devions rapidement comprendre la structure du JSON,
extraire et reformater les données correctement (notamment les accents, le format des dates et
heures, et l'encodage), tout en respectant la structure demandée. Voici une infime partie du JSON
d'origine (image 1 ci-dessous), et grâce à notre script Python, nous avons réussi à obtenir un
fichier CSV lisible sous Excel, affichant les données sous forme de tableau structuré et
exploitable. Malgré la pression du temps, nous avons livré un programme fonctionnel, en suivant
les bonnes pratiques Python avec un code bien structuré et commenté. Cette expérience nous a
surtout appris à être efficaces et méthodiques pour transformer des données rapidement et proprement.

---

## Projet 2 — Reporting Excel VBA

- **Titre complet :** Création d'un reporting Excel VBA
- **Date de début :** 16 décembre 2024
- **Temps investi :** 33 h
- **Difficulté :** Moyen
- **Technologies :** VBA, Excel
- **Travail en :** binôme (avec Théo)
- **Résultat :** note de 17/20 + présentation à la journée portes ouvertes de l'IUT
- **Images :** `projet2.png` (vignette), `projet2_1.png`, `projet2_2.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Dans le cadre de notre premier gros projet, nous avons réalisé un outil de gestion des notes sous
Excel permettant aux étudiants de suivre leurs résultats académiques. Il inclut l'ajout et la
modification des notes via des listes déroulantes, un tableau de bord dynamique avec des graphiques,
ainsi qu'une automatisation de la décision du jury pour le passage en 2ᵉ année. L'ergonomie était un
critère important, et nous avons soigné l'interface pour la rendre intuitive. Travaillant en duo avec
Théo, nous avons bouclé le projet en une semaine, ce qui était suffisant, bien que VBA ait été une
nouveauté pour nous. L'apprentissage a été rapide, mais nous avons rencontré quelques difficultés pour
automatiser certaines tâches, notamment la prise de décision du jury et l'ajout de notes via des
formulaires interactifs. Malgré cela, nous avons livré un fichier fonctionnel et bien présenté, avec
un design clair et des fonctionnalités conformes aux attentes. Avec plus de temps, nous aurions pu
encore optimiser le code VBA et enrichir l'ergonomie. Notre travail nous a permis d'obtenir la note de
17/20 ainsi que la possibilité de présenter notre projet à la journée portes ouvertes de notre IUT !

---

## Projet 1 — Synthèse de questionnaire (Sphinx)

- **Titre complet :** Création d'une synthèse via les réponses d'un questionnaire
- **Date de début :** 8 janvier 2025
- **Temps investi :** 10 h
- **Difficulté :** Facile
- **Technologies :** Sphinx (logiciel d'enquête), datavisualisation
- **Chiffre clé :** 375 réponses analysées
- **Images :** `projet1.png` (vignette), `projet1_1.png`, `projet1_2.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
À l'aide du logiciel Sphinx, nous avons mené une étude sur les pratiques sportives et les conditions
de vie des étudiants en 2024. À partir d'un questionnaire ayant recueilli 375 réponses, nous avons
analysé divers aspects comme la répartition des étudiants par filière et région, leur mode de vie,
ainsi que leur relation avec le sport et la santé. Nos travaux ont abouti à deux livrables principaux :
une synthèse des résultats, mettant en avant les tendances générales et les problématiques rencontrées
par les étudiants, et un tableau de bord interactif, permettant de comparer les habitudes des sportifs
et non-sportifs à travers des indicateurs visuels clairs. L'analyse révèle notamment que près de 60 %
des étudiants manquent de temps ou de moyens pour pratiquer une activité physique régulière, et que la
transition vers l'enseignement supérieur impacte fortement la pratique sportive. Nous avons également
mis en évidence le lien entre activité physique, alimentation et bien-être général. Ce travail nous a
permis d'approfondir nos compétences en analyse de données et restitution visuelle, tout en mettant en
lumière des enjeux concrets liés à la vie étudiante.

---

## Projet 4 — Conception & implémentation d'une base de données

- **Titre complet :** Conception et implémentation d'une base de données
- **Date de début :** 5 février 2025
- **Temps investi :** 40 h
- **Difficulté :** Difficile
- **Technologies :** SQL, MySQL, Looping (MCD), Python, Tkinter
- **Contexte :** gestion des approvisionnements et ventes de sel d'une coopérative de l'île de Ré (données 2023)
- **Images :** `projet4.jpg` (vignette), `projet4_1.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Pour ce projet, nous avons conçu et implémenté une base de données relationnelle pour la gestion des
approvisionnements et ventes de sel d'une coopérative de l'île de Ré. Nous avons d'abord élaboré un
Modèle Conceptuel de Données (MCD) sous Looping_MCD, avant de générer le Modèle Logique de Données (MLD)
et un script SQL pour créer la base sous MySQL. Nous avons ensuite inséré des données en nous basant sur
les transactions de l'année 2023 et automatisé l'importation des fichiers via un script Python. Une
interface graphique en Tkinter a été développée pour permettre d'interagir avec la base de manière
intuitive : consultation des stocks, enregistrement des entrées/sorties de sel, insertion de nouvelles
données et exécution de 10 requêtes SQL avancées (regroupements, filtrages, mise à jour, suppression).
Enfin, nous avons réalisé une vidéo bilan pour présenter et tester notre solution, en expliquant ce qui
fonctionne, les axes d'amélioration et notre apprentissage. Ce projet nous a permis de maîtriser la
conception et gestion d'une base de données, l'automatisation de traitements en Python, ainsi que
l'importance d'une interface utilisateur ergonomique.

---

## Projet 6 — Régression linéaire sur données réelles

- **Titre complet :** Régression linéaire
- **Date de début :** 1ᵉʳ avril 2025
- **Temps investi :** 10 h
- **Difficulté :** Difficile
- **Technologies :** R (RStudio), Excel
- **Travail en :** binôme (avec Marzouk)
- **Contexte :** prédiction des prix de ventes immobilières dans les Deux-Sèvres (2023–S1 2024), sans bibliothèque de régression toute faite
- **Chiffres clés :** prédictions pour 100 % des biens du fichier test ; médiane des prix prévus ≈ 127 018 € ; écart-type ≈ 63 000 €
- **Images :** `projet6.png` (vignette), `projet6_1.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Dans le cadre de notre projet de SAE consacré à la régression sur données réelles, j'ai travaillé en
binôme sur un jeu de données concernant les ventes immobilières dans le département des Deux-Sèvres,
couvrant l'année 2023 et le premier semestre 2024. Le jeu de données était scindé en deux fichiers CSV :
un fichier d'apprentissage (train), contenant les prix de vente et des informations détaillées sur chaque
bien immobilier, et un fichier de test (test), identique en structure mais sans les prix de vente.
L'objectif du projet était clair : construire un modèle permettant de prédire le prix de vente des
logements du fichier test à partir des données disponibles. Dès le départ, nous avons dû composer avec
une contrainte pédagogique forte : l'interdiction d'utiliser des fonctions de régression toutes faites
comme `lm` ou des bibliothèques externes, ce qui nous a poussés à adopter une approche artisanale,
entièrement construite « à la main », fondée sur des principes statistiques élémentaires. Nous avons
commencé le travail sous Excel afin d'explorer les données : j'ai notamment effectué les premières analyses
descriptives (moyenne, écart-type, corrélations, coefficients de détermination) et observé la relation
entre variables clés comme la surface bâtie ou le nombre de pièces, et la valeur foncière. Ensuite, nous
avons migré sur RStudio, où nous avons d'abord testé un modèle linéaire simple. Celui-ci s'est vite révélé
insatisfaisant en raison d'une somme des carrés des résidus trop élevée, ce qui nous a poussé à abandonner
cette piste. Nous avons alors opté pour un modèle conditionnel basé sur des classes, que nous avons
construites en combinant plusieurs variables : la commune, le type de bien, la surface réelle bâtie, le
nombre de pièces principales et la surface du terrain. Chaque bien immobilier a ainsi été associé à une
classe, et le prix prédit était simplement la moyenne des prix des biens similaires observés dans le
fichier d'entraînement. Pour stabiliser les résultats et atténuer l'impact des valeurs extrêmes, nous
avons transformé la variable cible en racine carrée avant les calculs, puis appliqué l'inverse au moment
de la prédiction finale. Cette approche, bien que simple, a nécessité un important travail d'étalonnage :
nous avons testé différentes granularités (jusqu'à 10 classes par variable), ajusté nos regroupements, et
évalué nos modèles à l'aide d'indicateurs comme le taux de fallback (quand une classe n'existe pas dans
les données d'apprentissage) ou la dispersion des prédictions. J'ai personnellement contribué à la
conception des classes sur Excel, en analysant les répartitions et en veillant à une couverture maximale
des cas du fichier test. Mon binôme, Marzouk, s'est concentré sur la mise en œuvre du modèle dans R, ainsi
que sur l'interprétation statistique des résultats. Ensemble, nous avons régulièrement confronté nos
hypothèses aux données, modifié nos choix en fonction des résultats, et construit un raisonnement rigoureux,
itératif, inspiré d'une vraie logique de modélisation. Le modèle final, bien qu'allégé pour éviter la
sur-segmentation, reste performant : il comporte 4 classes de surface bâtie, 2 classes de pièces principales,
3 classes de surface de terrain, ainsi qu'un regroupement pertinent des communes. Un fallback basé sur le
couple type + surface a été utilisé pour les cas manquants, ce qui a permis d'obtenir des prédictions pour
100 % des biens du fichier test. D'un point de vue quantitatif, les résultats sont satisfaisants : la médiane
des prix prévus est cohérente (127 018 €), l'écart-type est raisonnable (63 000 €), et la distribution globale
des prédictions reste fidèle à celle du fichier d'apprentissage. L'analyse graphique confirme une relation
croissante entre surface et prix, validant la logique du modèle. Ce projet m'a permis de mieux comprendre les
défis concrets liés à la modélisation statistique : collecte de données pertinentes, structuration des
variables, compromis entre précision et couverture, et importance d'un raisonnement progressif et ajustable.
Au-delà des aspects techniques, j'ai également renforcé ma capacité à collaborer efficacement, à communiquer
mes analyses, et à défendre mes choix de manière argumentée. En conclusion, ce projet m'a non seulement permis
de mettre en pratique les compétences acquises cette année, mais aussi de prendre conscience de l'exigence
intellectuelle et méthodologique que représente la construction d'un modèle prédictif robuste sur des données réelles.

---

## Projet 5 — Analyse économique des régions françaises (2023)

- **Titre complet :** Analyse de l'activité économique des régions françaises en 2023
- **Date de début :** 20 mai 2025
- **Temps investi :** 8 h
- **Difficulté :** Facile
- **Technologies :** Excel, données INSEE
- **Contexte :** TD n°3 d'économie (2ᵉ semestre) — analyse des disparités territoriales (PIB global, PIB/habitant, PIB/emploi)
- **Images :** `projet5.png` (vignette), `projet5_1.png`, `projet5_2.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Dans le cadre du TD n°3 d'économie en deuxième semestre de BUT Science des Données, j'ai travaillé sur une
étude approfondie de l'activité économique des régions françaises en 2023. Ce travail s'inscrivait dans une
démarche d'analyse des disparités territoriales à partir des données de l'INSEE, accessibles via une base
Excel fournie sur notre espace pédagogique (UPdago). La consigne était claire : à partir de ces données
économiques et démographiques, nous devions produire un document de synthèse structuré, répondant à une série
de questions précises. Le cœur du travail reposait sur trois indicateurs clés : le PIB global, le PIB par
habitant et le PIB par emploi, chacun nous permettant d'évaluer une facette différente de la richesse produite
par région. Dans un premier temps, j'ai calculé la part de chaque région dans le PIB national, puis identifié
les trois régions les plus contributrices : Île-de-France, Auvergne-Rhône-Alpes et Nouvelle-Aquitaine,
représentant à elles seules près de la moitié du PIB du pays. Ensuite, j'ai procédé à l'indexation du PIB
régional en prenant l'Île-de-France comme base 100, afin de visualiser plus finement les écarts de production.
Des calculs de coefficient multiplicateur ont aussi été réalisés pour mesurer l'écart entre les régions
extrêmes comme la Corse et l'Île-de-France. À travers différents graphiques, j'ai illustré ces écarts
économiques bruts. Le travail s'est ensuite concentré sur la population : j'ai calculé la part démographique
de chaque région, les indices de population et les écarts en nombre d'habitants. Cela m'a permis de mettre en
lumière une certaine corrélation entre taille démographique et contribution économique, tout en révélant des
exceptions. J'ai ensuite analysé les écarts de PIB par habitant par rapport à la moyenne nationale, ce qui a
montré une forte inégalité entre certaines régions. Par exemple, l'Île-de-France affiche un PIB/hab supérieur
de plus de 100 % à la moyenne nationale, alors que la Corse est en dessous. La dernière partie du travail
portait sur le PIB par emploi, qui permet de mesurer la productivité moyenne des actifs. En croisant les
données de population, d'emploi et de richesse, j'ai pu calculer des ratios pertinents, comme le rapport entre
le PIB par habitant et le PIB par emploi, révélateur de l'efficacité socio-économique de chaque région. J'ai
ainsi pu commenter les disparités régionales en matière de productivité, et mieux comprendre la réalité
économique de la France. Cette SAE m'a permis de mobiliser des compétences techniques (calculs statistiques,
construction de graphiques, traitement de données Excel) tout en développant une capacité de synthèse et
d'analyse critique. Elle m'a aussi aidé à renforcer ma compréhension de la géographie économique du pays et de
l'intérêt des indicateurs macroéconomiques pour éclairer les politiques publiques.

---

## Projet 7 — Analyse de données, reporting & datavisualisation

- **Titre complet :** Analyse de données, reporting et datavisualisation
- **Date de début :** 1ᵉʳ juin 2025
- **Temps investi :** 32 h
- **Difficulté :** Difficile
- **Technologies :** Python, Tkinter, test du Khi² / V de Cramér, Trello (Kanban), PowerPoint
- **Méthodologie :** SCRUM (Gabriel = Scrum Master), équipe de 4 étudiants, 2 semaines
- **Contexte :** SAÉ la plus importante du semestre — accidents de la vie courante (AcVC), commanditaire externe (Mme Dupuy, équipe Calyxis)
- **Images :** `projet7.png` (vignette), `projet7_1.png`, `projet7_2.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Dans le cadre de la SAÉ « Analyse de données, Reporting et Datavisualisation », considérée comme la plus
importante de notre semestre tant par sa durée que par son coefficient, j'ai eu l'opportunité de travailler en
équipe de quatre étudiants sur un projet ambitieux mêlant traitement de données réelles, automatisation,
visualisation, et reporting décisionnel. Cette SAÉ s'étalait sur deux semaines complètes, avec pour objectif de
concevoir un outil interactif et dynamique à destination d'un commanditaire externe (Mme Dupuy de l'équipe
Calyxis), afin d'analyser les accidents de la vie courante (AcVC) à partir d'un jeu de données fourni via un
fichier Excel nommé `MA_VIE_BD_SD_mai_2025.xls`. Le cœur du projet consistait à extraire de ce fichier deux
types de valeur : d'une part une comparaison des volontaires du fichier avec la population française, et d'autre
part une analyse fine des accidents survenus, en mettant en lumière les facteurs qui favorisent ou limitent leur
apparition. Nous devions aussi concevoir un tableau de bord complet et automatisé, capable de générer des
indicateurs lisibles et exploitables pour des actions de prévention ciblées. En amont, nous avons également dû
nettoyer les données, qui comportaient des irrégularités (valeurs manquantes, accents mal codés, champs complexes
de type dictionnaire…), en veillant à ce que ce nettoyage soit intégré à la chaîne de traitement automatisée.
Nous avons structuré notre projet autour de la méthode SCRUM, avec une organisation claire en sprints. J'ai assuré
le rôle de Scrum Master, chargé d'organiser les mêlées quotidiennes et de garantir l'avancement des tâches selon
notre tableau Kanban (géré sur Trello). Les user stories, listant les fonctionnalités attendues, ont été priorisées
et assignées à chacun selon les compétences. Notre groupe s'est rapidement réparti les rôles : un binôme s'est
concentré sur le nettoyage des données et leur structuration, un autre sur les visualisations et les analyses
statistiques. De mon côté, j'ai activement participé à l'élaboration de l'interface, à la structuration du code
Python (avec Tkinter pour l'ergonomie), et à l'implémentation de la logique comparative avec les données INSEE.
Notre outil prend en entrée le fichier Excel source, traite automatiquement les deux feuilles (BD_Quest et
Accident), fusionne les données, nettoie les champs complexes, et alimente un tableau de bord structuré en deux
volets : d'une part une analyse de représentativité des répondants (par genre et tranche d'âge, comparée à la
population française), d'autre part une analyse des caractéristiques des accidents selon les conditions de logement,
les équipements, ou d'autres facteurs de contexte. L'utilisateur peut importer un nouveau fichier Excel, déclenchant
l'automatisation complète de l'analyse. Une fois les données traitées, l'outil permet également de générer des
exports, visualiser des statistiques et observer des corrélations significatives via des graphiques interactifs. Un
volet « Statistiques avancées » propose des tests du Khi² pour valider les liens entre variables qualitatives, avec
calcul du V de Cramér. La dernière phase du projet a consisté à documenter l'ensemble du travail : rédaction d'un
tutoriel d'utilisation, production d'un rapport analytique de deux pages basé sur nos indicateurs, préparation d'une
présentation PowerPoint en anglais pour l'oral final, et livraison des scripts et fichiers techniques. La présentation
orale, planifiée le 4 juin, a été minutieusement préparée en respectant une répartition équilibrée du temps de parole.
Nous avons mis en avant la démarche technique, les choix méthodologiques, la démonstration de notre interface, ainsi
que la clarté de nos visuels. Ce projet m'a énormément appris, autant sur le plan technique que sur l'aspect
organisationnel. Il m'a permis de consolider mes compétences en data cleaning, en comparaison statistique, en
automatisation Python, et en visualisation de données. J'ai aussi pu expérimenter concrètement la gestion de projet en
méthode agile, ce qui m'a beaucoup aidé à structurer le travail collectif et à répartir efficacement les tâches. Cette
SAE m'a montré l'importance de construire un outil à la fois robuste, lisible, intuitif et réutilisable dans un cadre
professionnel réel. En résumé, je suis particulièrement fier du travail réalisé et de la maturité collective dont notre
groupe a su faire preuve dans la réalisation de ce projet exigeant.

---

# Projet personnel

## Projet 8 — Conception de sites web pour particuliers

- **Titre complet :** Développement web
- **Date de début :** janvier 2025 (en parallèle des études, en cours)
- **Temps investi :** +110 h
- **Difficulté :** Très difficile
- **Technologies :** HTML, CSS, JavaScript, GSAP (GreenSock), Firebase
- **Cadre :** apprentissage 100 % autodidacte, puis réalisation de sites pour de petites entreprises locales
- **Images :** `projetperso.png` (vignette), `projetperso1.png`, `projetperso2.png`, `projetperso3.png`, `projetperso4.png`
- **Source images :** `~/Downloads/gabrielsagot.github.io-main/`

**Description :**
Au début du mois de janvier 2025, j'ai commencé à m'intéresser de manière sérieuse à la conception de sites web.
Ce qui n'était au départ qu'une simple curiosité s'est rapidement transformé en un véritable projet personnel.
Sans cours ni encadrement formel, j'ai choisi de me former en autodidacte, en explorant de nombreuses ressources
disponibles en ligne : tutoriels YouTube, documentations officielles, articles spécialisés, forums comme Stack
Overflow ou OpenClassrooms. Je me suis lancé avec zéro expérience préalable dans le développement web, et j'ai très
vite été confronté à la complexité des langages HTML, CSS et JavaScript. Comprendre le fonctionnement des balises,
organiser correctement le DOM, gérer les positionnements CSS ou encore appréhender la logique événementielle de
JavaScript a représenté un réel défi. J'ai fait de nombreuses erreurs, parfois très frustrantes, mais c'est justement
ce processus d'essais, d'échecs, de recherche et de correction qui m'a permis de progresser rapidement. Je me suis vite
rendu compte que la seule façon d'apprendre, c'était de coder, encore et encore. Au fil des semaines, mes projets
personnels se sont complexifiés. J'ai appris à structurer mes fichiers, à créer des interfaces responsives, à améliorer
l'expérience utilisateur avec des effets de survol, des transitions douces, et des animations. C'est à ce moment-là que
j'ai découvert GSAP (GreenSock Animation Platform), une librairie JavaScript extrêmement puissante qui m'a permis de
donner une autre dimension à mes projets : animations de texte, scroll fluide, effets de transition sophistiqués entre
sections, interactions dynamiques sur les boutons ou les menus… L'ajout de GSAP a transformé la qualité visuelle de mes
sites et m'a permis de mieux comprendre la logique des timelines, des easing functions et des callbacks. J'ai également
commencé à m'intéresser à l'aspect plus fonctionnel des sites web, notamment la gestion des utilisateurs, des données et
des connexions. Cela m'a amené à intégrer Firebase dans mes projets, une plateforme que j'ai trouvée très accessible pour
l'authentification, la gestion des bases de données en temps réel, et l'hébergement. Cette combinaison entre front-end
esthétique et back-end fonctionnel m'a permis de construire des sites de plus en plus complets, capables de gérer des
utilisateurs, de stocker des messages ou des contenus, et de fonctionner comme de vraies applications interactives. Grâce
à cette montée en compétence progressive, j'ai pu passer d'une phase d'apprentissage à une phase de mise en application
concrète. J'ai eu l'opportunité de réaliser plusieurs sites web pour des petites entreprises locales, qui avaient besoin
de visibilité ou de modernisation de leur communication en ligne. J'ai adapté chaque projet aux besoins du client : mise
en page personnalisée, navigation fluide, contenus adaptés, formulaire de contact fonctionnel, référencement optimisé…
Cela m'a permis de développer une véritable rigueur dans ma manière de travailler, d'écouter un besoin, de proposer une
maquette, de la transformer en code propre, et de tester l'outil final sur différents navigateurs et supports. J'ai
également appris à documenter mes projets, à maintenir un code lisible, et à tenir compte de l'accessibilité. Ce travail
en solo, parfois exigeant, m'a fait gagner en autonomie, en logique de conception et en créativité. Aujourd'hui, je
continue à me former en parallèle de mes études, en approfondissant des frameworks modernes, en explorant le responsive
design avancé et en construisant un portfolio personnel complet. Cette passion pour le développement web m'ouvre de
nouvelles perspectives professionnelles, que je compte bien continuer à explorer à long terme.

---

# Bilan annuel 2024 — Première année de BUT

> Texte de bilan rédigé par Gabriel à l'issue de sa 1ʳᵉ année. Sous-titre utilisé dans
> l'ancien portfolio : **« Un premier pas dans le monde de la Data »**.
> Réutilisable pour la section « À propos » ou une rétrospective dans le nouveau portfolio.

Mon entrée en BUT Science des Données à Niort en septembre dernier a marqué le début d'un nouveau cycle,
à la fois stimulant, exigeant et profondément formateur. Issu d'un baccalauréat général effectué au lycée
polyvalent du Haut Val de Sèvre, j'avais choisi les spécialités Mathématiques et Sciences Économiques et
Sociales, avec l'option Mathématiques expertes en Terminale. Ce profil résolument scientifique m'a apporté
des fondations solides pour aborder cette formation orientée vers l'analyse, les statistiques et la
modélisation. La rigueur mathématique acquise au lycée m'a permis d'appréhender plus sereinement des
enseignements comme les probabilités, les statistiques inférentielles, l'algèbre ou encore les bases de
l'analyse de données.

Cependant, l'un des plus grands défis de cette année a été l'apprentissage de la programmation. En effet,
je n'avais jusque-là jamais eu l'occasion de coder ou d'écrire la moindre ligne de code. À mon arrivée,
j'ai constaté que de nombreux camarades avaient déjà une certaine expérience en Python, en R ou même en SQL.
Cette différence de niveau initial m'a d'abord fait douter. J'appréhendais de ne pas réussir à suivre le
rythme ou de rester bloqué face aux difficultés techniques. Mais très rapidement, j'ai fait le choix de
transformer cette crainte en moteur. J'ai consacré beaucoup de temps, dès les premières semaines, à
comprendre les bases de la programmation : la logique conditionnelle, les boucles, la manipulation des
données, les structures de données, etc. J'ai utilisé des ressources extérieures (tutoriels en ligne,
documentation officielle, vidéos explicatives) pour approfondir ce qui était vu en cours. J'ai aussi
beaucoup pratiqué, car j'ai vite compris que, comme en mathématiques, c'est en faisant que l'on progresse.
À force de persévérance, j'ai réussi à combler une grande partie de mon retard initial, au point d'obtenir
de bons résultats dans les évaluations et de me sentir beaucoup plus à l'aise aujourd'hui dans l'écriture
de scripts et dans l'utilisation de bibliothèques comme pandas, seaborn ou ggplot2. Ce parcours, bien que
difficile, a été extrêmement gratifiant.

Au-delà des enseignements théoriques, ce que j'ai particulièrement apprécié cette année, ce sont les projets
menés dans le cadre des SAÉ (Situations d'Apprentissage et d'Évaluation). Ces projets m'ont permis de passer
du concept abstrait à une application concrète, souvent en groupe. Travailler sur des cas réels ou réalistes
(analyse de données, visualisations, création de dashboards, mini-applications…) m'a permis de donner du sens
aux notions abordées en cours et de me projeter dans des situations professionnelles. Ces moments m'ont
également appris à gérer un projet dans le temps, à répartir les tâches de manière équitable et à collaborer
efficacement. La dimension collective, bien que parfois difficile à équilibrer, a été un bon entraînement à
la vie professionnelle.

La recherche d'alternance a aussi été une dimension importante de mon année. Dès le mois de février, j'ai
activement commencé à postuler auprès d'entreprises, principalement dans les secteurs de l'assurance, de la
data, de l'énergie et du numérique. J'ai rédigé de nombreuses lettres de motivation, adapté mon CV, et
participé à plusieurs entretiens. Cette démarche m'a permis de mieux cerner les attentes du marché de l'emploi,
mais aussi de mieux définir mon propre projet professionnel. Même si mes efforts n'ont pas encore été
récompensés par une alternance pour la deuxième année, je reste optimiste. Cette période de recherche m'a
permis de développer ma communication, ma capacité à valoriser mes compétences, et ma connaissance des acteurs
du secteur. À défaut d'alternance, je sais que le stage de fin d'année sera une opportunité intéressante pour
découvrir un environnement professionnel concret, mettre en œuvre les compétences acquises et commencer à
bâtir mon expérience.

Sur le plan personnel, cette année a aussi été une année de transition. Passer du lycée à l'enseignement
supérieur demande une véritable réorganisation de ses méthodes de travail. J'ai dû apprendre à gérer mon
temps, à prioriser mes tâches et à travailler de manière plus autonome. Si certaines périodes ont été intenses
et parfois stressantes, j'ai beaucoup progressé dans ma capacité à m'adapter, à travailler dans la durée, et à
ne pas me décourager face à la difficulté. J'ai aussi découvert l'importance de prendre du recul, de relire mes
erreurs, et de toujours chercher à comprendre « le pourquoi » et « le comment » derrière chaque méthode ou
chaque algorithme.

Par ailleurs, cette formation m'a permis de développer des compétences transversales que je n'imaginais pas
forcément au départ. J'ai par exemple appris à mieux communiquer mes résultats, à les rendre lisibles et
compréhensibles, notamment à travers des visualisations de données. J'ai aussi commencé à m'initier aux enjeux
éthiques et réglementaires liés à l'usage des données personnelles, un aspect crucial dans le métier de data
analyst ou data scientist aujourd'hui. Ces nouvelles dimensions ont renforcé mon intérêt pour le domaine de la
data, que je perçois désormais comme un croisement entre technique, analyse, communication et responsabilité.

Enfin, cette première année a confirmé mon choix de formation. Malgré les doutes initiaux liés à la
programmation, malgré les exigences parfois élevées de certains modules, je suis convaincu d'être à ma place
dans ce BUT. Je ressors de cette année avec une vision plus claire de mes compétences, de mes axes
d'amélioration, mais aussi de mon projet professionnel à long terme. J'envisage déjà, après le BUT, de
poursuivre vers un master dans le domaine des statistiques, de la science des données ou de l'intelligence
artificielle, afin de continuer à monter en compétence et à me spécialiser dans les domaines qui me passionnent
le plus.

> **Image associée :** `bilan1.png` — source `~/Downloads/gabrielsagot.github.io-main/`.

---

## À faire (intégration au nouveau portfolio)

- [ ] Copier les images depuis `~/Downloads/gabrielsagot.github.io-main/` vers `Portfolio_pro/assets/`
      (vignettes `projetN.png` + images de détail `projetN_x.png`, et `projetperso*.png`).
- [ ] Créer une sous-section « Projets — 1ʳᵉ année de BUT (2024–2025) » dans la partie Projets du portfolio.
- [ ] Remplacer les 6 projets actuellement en **placeholder** par ces 8 projets réels
      (ou les présenter en complément, à décider).
- [ ] Réutiliser les mini-visualisations SVG existantes ou intégrer les vraies captures d'écran.

---

---

### Analyse des performances économiques (Fleury-Michon)

**Date :** BUT1  
**Tags :** Excel, Analyse Financière, Data Visualization, Travail d'équipe  

#### Description du Projet
Ce projet s'est déroulé sur une semaine intense en binôme, durant laquelle nous avons allié nos compétences pour produire une analyse claire et approfondie des performances économiques du groupe Fleury-Michon. 

J'ai eu le plaisir de collaborer avec Mathieu Lopes-Moreira. De mon côté, je me suis concentré sur la réalisation des visuels et graphiques ainsi que la valorisation des données dans Excel, tout en contribuant activement à la rédaction du diagnostic. Mathieu s'est chargé d'approfondir les analyses financières et d'apporter une vision stratégique à nos conclusions. Cette répartition naturelle des tâches nous a permis d'avancer rapidement et de proposer un résultat très structuré.

#### Compétences Développées
- Analyse de données financières et économiques
- Création de tableaux de bord et graphiques sous Excel
- Visualisation de données pour l'aide à la décision
- Diagnostic stratégique d'entreprise
- Travail collaboratif et coordination en binôme

#### Résultats et Apprentissages
**Résultats obtenus :** Un rapport d'analyse complet accompagné de visuels clairs permettant un diagnostic rapide et précis de la santé économique de l'entreprise.

**Ce que j'ai appris :** L'importance de la coordination en équipe, la rigueur nécessaire dans l'analyse financière et la capacité à transformer des données brutes en informations stratégiques visuelles.

## Projets BUT2 :

### Site Web Dynamique PHP — Analyse de données OpenData

**Date :** BUT2  
**Tags :** PHP, MySQL, Javascript, OpenData  

#### Description du Projet
Ce projet de deuxième année consistait à concevoir une application web dynamique complète reposant sur l'exploitation de données OpenData. L'application inclut une gestion complète des données (CRUD), permettant d'importer, de modifier et de visualiser les informations. Nous avons implémenté des calculs statistiques bivariés pour analyser les corrélations entre les variables. L'interface intègre également une carte interactive pour la géolocalisation des données et un tableau de bord (Dashboard) présentant plusieurs indicateurs clés sous forme de graphiques dynamiques, offrant ainsi une vue d'ensemble claire et exploitable.

#### Compétences Développées
- Développement Web Full Stack (PHP, MySQL, Javascript)
- Gestion de bases de données relationnelles et requêtes SQL complexes
- Visualisation de données (Dashboard interactif, Cartographie)
- Traitement et analyse de données OpenData
- Conception d'une interface utilisateur ergonomique et responsive

#### Résultats et Apprentissages
**Résultats obtenus :** Une application web fonctionnelle et robuste permettant l'analyse approfondie et la visualisation intuitive de données publiques.

**Ce que j'ai appris :** La complexité du développement web dynamique, l'importance de la structuration d'une base de données et l'intégration efficace de bibliothèques de visualisation tierces.

---

### Collecte de données web (Scraping & API)

**Date :** BUT2 (Semestre 3)  
**Tags :** Python, Web Scraping, API REST, Folium, Pandas  

#### Description du Projet
Ce projet de troisième semestre vise à développer un outil décisionnel basé sur la collecte de données web. Il se décompose en deux parties principales : le Web Scraping et l'exploitation d'une API.

**Partie 1 : Web Scraping**  
L'objectif était de choisir librement un site à scraper, d'analyser les données, et de produire des indicateurs pertinents. J'ai été en charge de cette partie, incluant la recherche de données géographiques, le scraping vers un DataFrame Pandas, et la création d'un tableau de bord avec carte et graphiques.

**Partie 2 : API Météo (Synop)**  
Cette partie, réalisée avec mes collègues Mathieu Lopes-Moreira et Octave Romer, consistait à exploiter l'API "Données SYNOP essentielles" pour produire des indicateurs visuels :
- Carte Folium interactive des températures moyennes par commune.
- Graphiques comparatifs par région et année (pluviométrie, pression, humidité...).
- Analyse des observations à moins de 100km de Poitiers.

**Mon Rôle :**  
Outre la réalisation complète de la partie Web Scraping, j'ai également défini l'univers visuel global de l'application pour assurer une cohérence esthétique entre les différents livrables.

#### Compétences Développées
- Collecte de données : Techniques de Web Scraping et requêtage d'API REST
- Traitement de données : Nettoyage et structuration avec Pandas
- Visualisation : Création de cartes interactives (Folium) et graphiques statistiques (Matplotlib/Seaborn)
- Développement : Automatisation de scripts Python et gestion des erreurs
- Travail d'équipe : Répartition des tâches et intégration des travaux

#### Résultats et Apprentissages
**Résultats obtenus :** Une application complète capable de récupérer, traiter et visualiser des données météorologiques et géographiques en temps réel ou différé. Le projet a été validé par une soutenance orale et la livraison d'un code fonctionnel et documenté.

**Ce que j'ai appris :** J'ai approfondi mes compétences en Python, notamment sur la manipulation de flux de données externes. J'ai également appris à concevoir des indicateurs pertinents pour l'aide à la décision et à soigner l'ergonomie d'une application de data visualisation.

---

### Projet DENTISSIMO (Base de Données Clinique Dentaire)

**Date :** BUT2  
**Tags :** Oracle Database, SQL / PL-SQL, Docker, Modélisation (MCD/MLD)  

#### Description du Projet
Dans le cadre de la modernisation du système d'information de la clinique Dentissimo, ce projet visait à concevoir et déployer une base de données relationnelle Oracle robuste.

L'objectif principal était de centraliser la gestion complète de la clinique : des dossiers patients aux stocks de matériel, en passant par le personnel et le suivi précis des actes médicaux. Le système gère des règles de gestion complexes comme le schéma dentaire (FDI), les anomalies, et l'historique des soins.

Le projet a été déployé dans un environnement conteneurisé via Docker (Oracle Database 23c Free), assurant une portabilité totale et une facilité de déploiement.

#### Compétences Développées
- Conception de modèles de données complexes (MCD, MLD)
- Développement de scripts SQL avancés (DDL, DML)
- Administration de base de données Oracle
- Utilisation de Docker pour la conteneurisation de services
- Analyse de données via des requêtes SQL d'agrégation

#### Résultats et Apprentissages
**Résultats obtenus :** Une base de données opérationnelle avec 19 tables interconnectées, des contraintes d'intégrité strictes, et un jeu de données réaliste permettant de valider tous les cas d'usage métier.

**Ce que j'ai appris :** La rigueur nécessaire à la modélisation d'un système d'information médical, la puissance du langage PL/SQL pour les contraintes complexes, et l'importance de l'automatisation des déploiements avec Docker.

---

### Portail de Gestion IUT (VBA Excel & Google App Script)

**Date :** BUT2  
**Tags :** VBA Excel, Google App Script, Google Sheets, Automatisation  

#### Description du Projet
Ce projet pédagogique avait pour but de comparer deux technologies pour répondre à un même besoin : la gestion des retours étudiants (JPO, Salons). Nous avons développé deux versions identiques de l'application :
- **Version Locale (VBA) :** Une application Excel autonome utilisant des UserForms et du code VBA complexe.
- **Version Cloud (App Script) :** Une web-app hébergée sur l'écosystème Google, utilisant Sheets comme base de données et App Script pour la logique.

**Répartition des Rôles :**
Pour ce travail de comparaison, les tâches ont été réparties par technologie. Théo Petit a réalisé la partie VBA Excel, et j'ai pris en charge la réalisation complète de la partie Google App Script.

**Fonctionnalités :**
Les deux applications offrent les mêmes services pour permettre une comparaison objective : saisie de données via formulaires ergonomiques, traitement automatique des indicateurs, et reporting avec tableaux de bord dynamiques en temps réel.

**Comparaison Technique :**
- **VBA Excel (Local) :** Avantages (puissance, hors-ligne, réactivité) / Inconvénients (partage difficile, pas de multi-utilisateurs simultanés).
- **Google App Script (Cloud) :** Avantages (accessible partout, collaboratif en temps réel) / Inconvénients (dépendance à internet, web parfois moins fluide).

#### Compétences Développées
- Programmation : Algorithmes complexes et programmation événementielle (VBA, App Script)
- Interface Utilisateur (UI/UX) : Création de formulaires ergonomiques et web-app
- Bases de Données & Automatisation : Manipulation de données structurées
- Analyse de Données : Création de tableaux de bord interactifs

#### Résultats et Apprentissages
**Résultats obtenus :** Une application intuitive remplaçant la saisie papier par un outil numérique performant, offrant une vision claire de l'attractivité de la formation et de la satisfaction des visiteurs.

**Ce que j'ai appris :** Ce projet m'a permis de pousser l'automatisation dans ses retranchements, de structurer une application complexe, de gérer les erreurs utilisateurs et de produire un code maintenable et documenté.

---

### Prédiction du Cours de l'Or (Analyse de Séries Temporelles)

**Date :** BUT2  
**Tags :** Excel, Word, Modèles, Tests statistiques  

#### Description du Projet
Ce projet "Flash" avait pour objectif d'analyser et de prédire l'évolution du cours de l'or à partir de données historiques. C'est une application classique et rigoureuse de l'analyse de séries temporelles.

La démarche a consisté à identifier les composantes de la série (tendance, saisonnalité, bruit), à stationnariser la série, et à sélectionner un modèle prédictif performant. Les résultats permettent de dégager des tendances futures (intervalles de confiance, prévisions à court terme) utiles pour l'aide à la décision financière.

#### Compétences Développées
- Traitement et nettoyage de données financières
- Analyse exploratoire de séries temporelles
- Modélisation statistique et prévision
- Visualisation des données et des résultats
- Interprétation des indicateurs de performance

#### Résultats et Apprentissages
**Résultats obtenus :** Un modèle prédictif capable d'anticiper les variations du cours de l'or avec une marge d'erreur contrôlée, présenté via un rapport d'analyse détaillé.

**Ce que j'ai appris :** L'importance de la qualité des données dans l'analyse prédictive, les limites des modèles statistiques pour les marchés financiers, et la nécessité de communiquer clairement les incertitudes (intervalles de confiance) dans un rapport d'aide à la décision.

---

### Hexa-Duo : Comparaison Interactive de Villes Françaises

**Date :** BUT2  
**Tags :** JavaScript / Python, D3.js / Plotly, APIs (Météo, etc.), Données Ouvertes (INSEE), Web Dev  

#### Description du Projet
Ce projet a été réalisé dans le cadre d'un challenge de data visualisation. L'objectif était de créer une application web interactive permettant de comparer deux villes françaises de plus de 20 000 habitants sous de nombreux aspects.

**J'ai réalisé entièrement le développement du site web pour ce projet.** Nous avons sourcé et intégré plusieurs jeux de données (INSEE, Open Data, APIs externes) pour construire un tableau de bord regroupant des statistiques clés telles que :
- Données générales (démographie, économie).
- Emploi et Logement.
- Climatologie à l’année et prévisions météo sur les prochains jours.
- Cartographie automatisée des villes concernées.

Le livrable prend la forme d'un site web regroupant tous ces indicateurs avec une navigation par onglets/pages pour offrir une expérience utilisateur fluide et agréable.  
**Lien vers le site web :** [https://hexa-duo.vercel.app](https://hexa-duo.vercel.app)

#### Compétences Développées
- Requêtage et manipulation d'APIs externes et de bases Open Data
- Développement Web (HTML/CSS/JS) et Python
- Création de visualisations interactives avec D3.js et Plotly
- Intégration d'outils cartographiques web
- Organisation de l'architecture d'un projet de développement web complet

#### Résultats et Apprentissages
**Résultats obtenus :** Une application web totalement fonctionnelle, déployable et permettant à l'utilisateur de confronter instantanément les atouts de deux villes distinctes en s'appuyant sur des données fiables et à jour.

**Ce que j'ai appris :** J'ai pu renforcer mes compétences en ingénierie de données (connexion à des flux dynamiques, nettoyage en temps réel) et surtout en développement d'interfaces Front-End claires, réactives et "user-friendly". Confronter une quantité massive de données statistiques (INSEE) tout en garantissant des temps de chargement minimes a été un excellent défi.

---

### Géo-McDo : Modélisation et Analyse Spatiale

**Date :** BUT2  
**Tags :** QGIS, Cartographie, Bases de Données Spatiales, Traitements SIG  

#### Description du Projet
Dans le cadre d'un domaine d'étude axé sur l'analyse spatiale (SIG), ce projet nous a amené à manipuler des données géographiques afin de répondre à des problématiques concrètes concernant la distribution spatiale des fast-foods en France.

En utilisant le logiciel de cartographie QGIS, notre objectif était de recouper des données démographiques, des contours de territoires et les coordonnées GPS d'enseignes (notamment McDonald's) pour :
- Exécuter des requêtes spatiales et attributaires avancées.
- Identifier des croisements stratégiques pour l'implantation.
- Générer des cartes thématiques claires et esthétiques.
- Déployer nos réponses et livrables sur un site internet vitrine dédié.

**J'ai réalisé entièrement le développement du site web pour ce projet.** Les résultats et la méthodologie y ont été encapsulés, prouvant ainsi la capacité à allier l'univers des Systèmes d'Information Géographique avec la restitution en développement web.  
**Lien vers le site web :** [https://geo-mcdo.vercel.app](https://geo-mcdo.vercel.app)

#### Compétences Développées
- Maîtrise du logiciel SIG : QGIS
- Requêtes attributaires et spatiales sur données géoréférencées
- Jointures géographiques et création de cartes thématiques
- Structuration de bases de données spatiales
- Restitution des résultats sur une plateforme web

#### Résultats et Apprentissages
**Résultats obtenus :** La réalisation d'analyses poussées mettant en lumière la relation entre la démographie, la topologie du territoire et l'implantation commerciale. Les réponses à l'étude ont été condensées de manière interactive.

**Ce que j'ai appris :** Je me suis familiarisé avec la puissance des Systèmes d'Information Géographique, ce qui m'a appris que la "donnée géolocalisée" nécessitait des méthodes de traitement spécifiques bien différentes des bases de données traditionnelles.
