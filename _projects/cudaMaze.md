---
name: cudaMaze
description: >
  Outil d'ingénierie logicielle haute performance dédié à la génération et à la résolution de labyrinthes parfaits, 
  optimisé via une architecture hybride CPU/GPU (C++20 / CUDA). L'application repose sur un pipeline asynchrone : 
  la génération massivement parallélisée utilise l'algorithme de Kruskal sur GPU, tandis que le pathfinding (résolution) 
  est déporté sur le CPU via un algorithme BFS, tirant parti de la topologie séquentielle de la grille. Le projet intègre 
  un moteur de rendu accéléré par GPU pour la préparation des données d'image, couplé à un exportateur de fichiers. 
  L'accent a été mis sur le profilage de données, l'analyse fine des goulots d'étranglement (bottlenecks de compression single-thread) 
  et la gestion de la mémoire inter-hardware.
link: https://github.com/Carlier-Maxime/cudaMaze
competences: [CUDA, CPlusPlus, Git, CLion]
startDate: "2025-05-05"
lastUpdate: "2026-01-05"
category: highlight
---