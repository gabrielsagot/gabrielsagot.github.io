# Documentation — Portfolio 2026

## Structure du projet

```
portfolio 2026/
├── redirigeur/        → Page d'accueil / portail de navigation
├── Portfolio_pro/     → Portfolio universitaire (en construction)
├── doc/               → Documentation (ce dossier)
└── profile_info.md    → Données de référence du profil Gabriel Sagot
```

Serveur de développement : `python3 -m http.server 8080` depuis la racine `portfolio 2026/`.

---

## redirigeur/

**Rôle :** Page d'entrée du portfolio. Présente une interface de sélection permettant de naviguer vers le(s) portfolio(s) disponible(s).

**Fichiers :**
- `index.html` — Structure HTML
- `style.css` — Styles
- `script.js` — Logique du loader et animations d'entrée

### Fonctionnement

**Fond 3D (Spline)**
La scène 3D de fond est chargée via `@splinetool/viewer` (version 1.11.6) :
```html
<script type="module" src="https://unpkg.com/@splinetool/viewer@1.11.6/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/fpycavKQQi6wxnXg/scene.splinecode"></spline-viewer>
```
La balise `<spline-viewer>` est positionnée en `absolute` sur toute la page (z-index 1), derrière l'interface.

**Loader**
Au chargement, un écran noir (`#loader`) couvre toute la page. Il contient :
- Un compteur numérique (`#counter`) qui monte de 0 à 100
- Une barre de progression (`#bar`)
- Un texte de statut animé

La progression est simulée par incréments aléatoires jusqu'à 90 %. Le passage à 100 % et la disparition du loader se déclenchent dès que la scène Spline est prête (événement `load`, détection du canvas dans le shadow DOM, ou fallback à 2,5 s).

**Interface**
L'UI (`.ui-container`) est positionnée à droite (40 % de la largeur), avec un dégradé noir transparent de droite à gauche. Elle contient :
- Un bloc identité : nom "Gabriel Sagot" + tag "Hub"
- Un bloc de sélection : phrase d'accroche + carte(s) de navigation

**Carte de navigation**
Une seule carte active : `.card.pro` → redirige vers `../Portfolio_pro/index.html`.

Comportement au survol :
- Fond violet sombre `rgba(40, 10, 60, 0.25)`
- Bordure violette `rgba(160, 80, 220, 0.5)`
- Titre en violet clair `#c084fc`
- Icône avec fond `rgba(120, 40, 180, 0.4)` et rotation `-15deg`

**Suppression du watermark Spline**
Injecté dans `script.js` au moment où le loader se termine :
```js
const style = document.createElement('style');
style.textContent = '#logo { display: none !important; }';
viewer.shadowRoot.appendChild(style);
```

---

## Portfolio_pro/

**Rôle :** Portfolio universitaire de Gabriel Sagot. Page en cours de construction — actuellement constituée uniquement de la scène Spline de fond et du loader.

**Fichiers :**
- `index.html` — Structure, styles et logique (tout-en-un pour l'instant)

### Fonctionnement

**Fond 3D (Spline)**
Scène chargée via `@splinetool/viewer` version 1.12.81 :
```html
<spline-viewer id="spline" loading-anim-type="none"
  url="https://prod.spline.design/2WIqMBkYXIbNLWkW/scene.splinecode">
</spline-viewer>
```
Positionnement CSS :
```css
spline-viewer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -38%) scale(1.1);
    width: 100%;
    height: 100%;
}
```
- `scale(1.1)` : légèrement zoomé pour éviter les bandes noires sur les côtés
- `translateY(-38%)` au lieu de `-50%` : décalage vers le bas pour que le bas de la scène coïncide avec le bas du viewport

**Loader**
Identique au redirigeur (même design, même mécanique), avec 3 niveaux de déclenchement :
1. Événement `load` natif de `<spline-viewer>`
2. Détection du `<canvas>` dans le shadow DOM (polling toutes les 150 ms)
3. Fallback dur à 6 secondes

La suppression du watermark Spline est effectuée au moment du déclenchement du loader (polling dans le shadow DOM toutes les 100 ms jusqu'à trouver `#logo`).

**Bouton retour**
Lien discret en haut à gauche, visible uniquement après la fin du loader :
- Fond glassmorphism `rgba(255,255,255,0.04)` + `backdrop-filter: blur(10px)`
- Bordure subtile, texte en blanc à 40 % d'opacité
- Apparaît via classe `.visible` (transition `opacity`)
- Pointe vers `../redirigeur/index.html`
