# 🎮 Bibliothèque de Jeux Vidéo - App React avec API RAWG

Ce projet est une application web développée avec React basée sur RAWG.io, permettant de rechercher des jeux vidéo dans une base de données via l'API de [RAWG.io](https://rawg.io/). Il s’agit d’un projet réalisé dans le cadre d’un cours de développement web, avec des fonctionnalités telles que la recherche, le filtrage par plateforme/genre et le tri par différentes méthodes (popularité, note, etc.).

##  Fonctionnalités

- **Recherche de jeux** : Recherchez vos jeux préférés par titre.
- **Filtrage par plateforme et genre** : Filtrez les jeux selon vos préférences.
- **Tri des résultats** : Trier les jeux par popularité, date de sortie, et plus encore.
- **Interface responsive** : Adaptée aux différents types d'écrans.

##  Technologies Utilisées

- **React** : Pour l’interface utilisateur et la gestion des composants.
- **API RAWG.io** : Pour récupérer des données sur les jeux vidéo (titres, plateformes, genres, notes, etc.).
- **TypeScript** : Logique et manipulation des données.
- **ChakraUI et CSS3** : Styles et mise en page.

##  Installation et Utilisation

### Prérequis

- Node.js et npm installés sur votre machine.

### Installation

1. Clonez le dépôt GitHub :
   ```bash
   git clone https://github.com/Irnam1/game-hub
   ```

2. Installez les dépendances du projet :
   ```bash
   npm install
   ```

3. Obtenez une clé API sur [RAWG.io](https://rawg.io/apidocs) et créez un fichier `.env` à la racine du projet :
   ```bash
   REACT_APP_RAWG_API_KEY=VOTRE_CLE_API
   ```

4. Lancez l’application :
   ```bash
   npm start
   ```

### Utilisation

- **Page d’accueil** : Accédez à une liste de jeux populaires par défaut.
- **Recherche** : Utilisez la barre de recherche pour trouver un jeu spécifique.
- **Filtres** : Sélectionnez une plateforme ou un genre dans le menu pour filtrer les résultats.
- **Tri** : Utilisez les options de tri pour organiser les jeux selon vos préférences.

## 🔮 Améliorations Futures

- **Routing** : Implémentation de routing avec React Router DOM.
- **Infinite scrolling** : Ajoute la possibilité d'ajouter dynamiquement des résultats à mesure du scroll de l'utilisateur.

## 🌐 Voir le projet en ligne

Découvrez l'application en action ici : [Game Hub](https://vercel.live/link/game-hub-kappa-henna.vercel.app?via=project-dashboard-alias-list&p=1)


## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
