---
title: 'Catcha : Plateforme Microservices'
description: 'Écosystème de cartes à collectionner conteneurisé, construit avec JavaScript, Astro, React et une architecture Microservices Node.js.'
publishDate: 2024-04-10
tags: ['JavaScript', 'Astro', 'React', 'Node.js', 'Express', 'MongoDB', 'Microservices']
category: 'academic'
github: 'https://github.com/lboeglin/microservices-card-platform'
image: '../../../assets/projets/catcha-architecture.png'
featured: true
teamSize: 4
---

Ce projet, intitulé "Catcha", est une application web distribuée de collection de cartes numériques. Réalisé en équipe de 4, l'objectif était de concevoir une **Architecture Microservices** évolutive, orchestrée via **Podman**.

## Architecture & Infrastructure

L'application est composée de quatre services distincts communiquant via des API REST :

- **Frontend :** Une Single Page Application (SPA) réactive construite avec **Astro** et **React**. Nous avons choisi **JavaScript** pour l'ensemble de la stack afin de garantir une cohérence entre le frontend et le backend.
- **API Gateway :** Un service centralisé sous **Express** qui route les requêtes et sécurise la plateforme via une **Authentification JWT**.
- **Service User :** Un microservice **Express** gérant les comptes utilisateurs, l'inventaire et la logique du timer de 12h pour les boosters gratuits.
- **Service Cards :** Un microservice **Express** responsable de la génération procédurale de contenu. Il agrège des données d'API externes (The Cat API, Randommer.io) pour créer des cartes uniques.

## Logique Backend & Qualité

- **Runtime :** Tous les services backend fonctionnent sur **Node.js** avec le framework **Express**.
- **Persistance :** Les données sont stockées dans **MongoDB**, utilisant **Mongoose** pour la validation stricte des schémas.
- **Logique Économique :** Le système inclut une gestion automatisée des doublons : lors de l'ouverture d'un booster, les cartes possédées sont vendues et le solde de l'utilisateur est mis à jour de manière atomique.
- **Tests :** Nous avons priorisé la qualité du code en implémentant des **Tests Unitaires** complets pour les Contrôleurs, Modèles et DAO.

## DevOps & Déploiement

L'infrastructure est entièrement conteneurisée. Nous avons utilisé **Podman** pour créer un pod unifié, mappant les ports internes (3939-3941) et orchestrant le démarrage simultané de la Gateway, de la Base de données et des Microservices.
