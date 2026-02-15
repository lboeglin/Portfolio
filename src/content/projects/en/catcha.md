---
title: 'Catcha: Distributed Card Platform'
description: 'A scalable, containerized trading card ecosystem built with JavaScript, Astro, React, and a Node.js Microservices architecture.'
publishDate: 2024-04-10
tags: ['JavaScript', 'Astro', 'React', 'Node.js', 'Express', 'MongoDB', 'Microservices']
category: 'academic'
github: 'https://github.com/lboeglin/microservices-card-platform'
image: '../../../assets/projets/catcha-architecture.png'
featured: true
teamSize: 4
---

This project, titled "Catcha," is a distributed web application for collecting digital cards. Developed by a team of 4, the goal was to move away from monolithic structures and design a scalable **Microservices Architecture** orchestrated via **Podman**.

## Architecture & Infrastructure

The application is composed of four distinct services communicating via REST APIs:

- **Frontend:** A responsive Single Page Application (SPA) built with **Astro** and **React**. We chose **JavaScript** for the entire stack to ensure consistency between frontend and backend.
- **API Gateway:** A centralized **Express** service that routes requests and secures the platform using **JWT Authentication**.
- **User Service:** An **Express** microservice handling user accounts, inventory management, and the logic for the 12-hour free booster timer.
- **Cards Service:** An **Express** microservice responsible for procedural content generation. It aggregates data from external APIs (The Cat API, Randommer.io) to create unique cards.

## Backend Logic & Quality

- **Runtime:** All backend services run on **Node.js** using the **Express** framework.
- **Persistence:** Data is stored in **MongoDB**, using **Mongoose** for strict schema validation.
- **Economy Logic:** The system includes automated logic to detect duplicate cards upon booster opening, automatically selling them and updating the user's currency balance atomically.
- **Testing:** We prioritized code quality by implementing comprehensive **Unit Tests** for Controllers, Models, and DAOs to ensure system reliability.

## DevOps & Deployment

The infrastructure is fully containerized. We used **Podman** to create a unified pod, mapping internal ports (3939-3941) and orchestrating the startup of the Gateway, Database, and Microservices simultaneously.
