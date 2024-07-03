# Web App Hackathon Project

## Description

Ce projet est une application web développée en utilisant Create React App. Il s'agit d'une application front-end conçue pour un hackathon, offrant une interface utilisateur riche et interactive.

## Structure du projet

```
web-app-hackaton-dev/
│
├── public/
│   ├── favicon.ico             # Icône du site web
│   ├── index.html              # Page HTML principale
│   ├── logo192.png             # Logo de l'application (192x192)
│   ├── logo512.png             # Logo de l'application (512x512)
│   ├── manifest.json           # Manifest du PWA
│   └── robots.txt              # Fichier de configuration pour les robots d'indexation
│
├── src/
│   ├── images/                 # Dossier contenant les images et vidéos
│   │   ├── Modern Brain Tech Logo.png
│   │   ├── pexels-anais-virel-1288641963-264049497.jpg
│   │   ├── pexels-diva-20153179.jpg
│   │   └── TechTornadoes.mp4
│   │
│   ├── pages/                  # Dossier contenant les pages de l'application
│   │   ├── LoginPage.js
│   │   └── Main.js
│   │
│   ├── App.css                 # Feuille de style pour l'application
│   ├── App.js                  # Composant principal de l'application
│   ├── index.css               # Feuille de style globale
│   └── index.js                # Point d'entrée de l'application
│
├── .gitignore                  # Fichiers et dossiers à ignorer par Git
├── package.json                # Fichier de configuration npm
├── package-lock.json           # Fichier de verrouillage des dépendances npm
└── README.md                   # Documentation du projet
```

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Node.js
- npm (Node Package Manager)

## Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/TechTornadoes/web-app-hackaton.git
```

2. Naviguez dans le répertoire du projet :

```bash
cd web-app-hackaton-dev
```

3. Installez les dépendances :

```bash
npm install
```

## Utilisation

Pour démarrer l'application en mode développement, utilisez la commande suivante :

```bash
npm start
```

Cela lancera l'application et vous pourrez y accéder via `http://localhost:3000` dans votre navigateur. La page se rechargera automatiquement lorsque vous apportez des modifications.

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter les scripts suivants :

- `npm start`: Exécute l'application en mode développement.
- `npm test`: Lance le runner de tests en mode interactif.
- `npm run build`: Construit l'application pour la production dans le dossier `build`. Il regroupe correctement React en mode production et optimise la construction pour obtenir les meilleures performances.
- `npm run eject`: Si vous souhaitez avoir un contrôle total sur la configuration des fichiers, vous pouvez exécuter ce script. **Note:** cette action est irréversible.

## Déploiement

Pour déployer l'application en production, exécutez la commande suivante :

```bash
npm run build
```

Cela créera un dossier `build` contenant les fichiers optimisés pour la production. Vous pouvez ensuite déployer le contenu de ce dossier sur un service d'hébergement de votre choix.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
