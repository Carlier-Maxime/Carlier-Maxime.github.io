import * as skill from "./competence.js";

export const projects = [
    {
        name: "Portfolio",
        description: "Portfolio avec tous mes projet et des information sur moi.",
        link: "https://github.com/Carlier-Maxime/Carlier-Maxime.github.io",
        img: "portfolio.jpg",
        competences: [skill.HTML,skill.CSS,skill.JS,skill.GIT,skill.WEB_STORM],
        startDate: "2023-03-18",
        lastUpdate: "2026-01-07"
    },
    {
        name: "cudaMaze",
        description: "cudaMaze est un projet personnel de génération de labyrinthe rectangle sans cycle avec cuda.\n"+
            "La génération du labyrinthe se fait en utilisant l'algorithme de kruskal sur GPU.\n"+
            "La résolution du labyrinthe se fait via un simple BFS sur CPU car plus rapide dans ce cas précis.\n"+
            "Le GPU est également utilisé pour faire le rendu du labyrinthe pour la sauvegarde au format png.",
        link: "https://github.com/Carlier-Maxime/cudaMaze",
        img: "cudaMaze.png",
        competences: [skill.CUDA, skill.CPP, skill.GIT, skill.CLION],
        startDate: "2025-05-05",
        lastUpdate: "2026-01-05"
    },
    {
        name: "MGAProject",
        description: "MGA Project est un jeu de type MMORPG inspiré du jeu The Witcher. Celui-ci à était réalisé dans le cadre de ma deuxième année de Master Informatique.\n" +
            "Ce jeu à était réalisé en duo avec Ahmed Zerrouk. Les mécanique sur lesquel j'ai travaillé sont : les statistique, les quêtes, l'inventaire, les items et un peu sur le Material Landscape.\n" +
            "Pour un lien vers le code source du projet, il faut d'abord que j'en discute avec mon collégue.",
        link: "https://gitlab.com/mga6514602/MGAProject",
        img: "MGAProject.gif",
        competences: [skill.UNREAL_ENGINE, skill.CPP, skill.GIT, skill.RIDER],
        startDate: "2025-01-08",
        lastUpdate: "2025-08-02"
    },
    {
        name: "IdleNonogram3D",
        description: "IdleNonogram3D est un jeu mobile pour smartphone android réalisée dans le cadre de ma deuxième année de Master Informatique.\n" +
            "L'objectif du projet était de réalisé une application mobile, de préférence de type jeux video afin d'enrichir notre portfolio.\n" +
            "Par conséquent on était libre de choisir l'application à réalisé. J'ai donc choisie de réaliser un jeu basé sur le jeu nonogram" +
            "aussi connue sous le nom picross mais en le fesant en 3D au lieu du jeu original qui est en 2D.\n" +
            "Et le 'Idle' dans le nom du jeu viens du fait que je compte rajouter les mécanique de jeu de type Idle.\n" +
            "Pour l'instant encore au stade de l'alpha",
        link: "https://github.com/Carlier-Maxime/IdleNonogram3D",
        img: "IdleNonogram3D.gif",
        competences: [skill.UNITY, skill.CSHARP, skill.GIT, skill.RIDER],
        startDate: "2025-02-26",
        lastUpdate: "2025-12-03"
    },
    {
        name: "Steering",
        description: "Steering est un projet dans le cadre de ma deuxième année de Master Informatique.\n" +
            "Lors du premier semestre l'object était de mettrent en palce les base du steering comprenant seek / flee, pursuit / evade, arrival, ...   \n" +
            "Et pour le second semestre l'objectif était que l'IA récolte quelque chose dans une ville et le dépose à un endroit spécifique comme un dépot/\n" +
            "Cela de manière autonomne en optimisant sont trajet et en évitant d'aller chercher des objets prochent du joueur afin de ne pas géner le joueur sur sa propre récolte.",
        link: "https://github.com/Carlier-Maxime/Steering",
        img: "Steering.gif",
        competences: [skill.UNREAL_ENGINE, skill.CPP, skill.GIT, skill.RIDER],
        startDate: "2025-01-07",
        lastUpdate: "2025-03-15"
    },
    {
        name: "MasqueFitting",
        description: "Masque Fitting est un programme python que j'ai réalisée pendant mes stage au sein du LML en collaboration avec l'institut faire faces.\n" +
            "celui-ci permet de faire correspondre un masque 3D d'un visage avec un visage FLAME et de extraire les marqueurs correspondant,\n" +
            "Et de créer des trou sur le masque 3D d'origine au emplacements de marqueurs obtenue.",
        link: "https://github.com/Carlier-Maxime/MasqueFitting",
        img: "MasqueFitting.png",
        competences: [skill.PYTHON, skill.GIT, skill.PYTORCH, skill.PY_CHARM],
        startDate: "2022-06-28",
        lastUpdate: "2023-04-05"
    },
    {
        name: "Visage-Generator",
        description: "Visage Generator est un programme python que j'ai réalisée pendant mes stage au sein du LML en collaboration avec l'institut faire faces.\n" +
            "celui-ci sert à générer des visages de synthèse à partir du model FLAME, cela permet de créer des dataset synthétique pour de l'entrainement d'IA",
        link: "https://github.com/Carlier-Maxime/Visage-Generator",
        img: "vgen.png",
        competences: [skill.PYTHON, skill.GIT, skill.PYTORCH, skill.OPENGL, skill.PY_CHARM],
        startDate: "2022-06-09",
        lastUpdate: "2025-03-31"
    },
    {
        name: "PixelArtisan",
        description: "PixelArtisan est un plugin minecraft pour un serveur spigot.\n" +
            "Il permet de créer des pixelArt a partir d'images.\n" +
            "\n" +
            "On peut choisir la direction, la taille, la position de départ de l'image.\n" +
            "Il est également possible d'utiliser des texture custom a la place de celle de base,\n" +
            "utile quand on utilise un pack de texture afin que l'image est la bonne apparence.",
        link: "https://github.com/Carlier-Maxime/PixelArtisan",
        img: "PixelArtisan.gif",
        competences: [skill.JAVA, skill.GIT, skill.INTELLIJ_IDEA],
        startDate: "2022-02-19",
        lastUpdate: "2025-04-11"
    },
    {
        name: "AnimalBattle",
        description: "Animal Battle est un projet personnel de type jeux vidéo Où le but est d'incarner un animal de son choix et de battre les autre animaux afin d’évoluer et de devenir le plus fort Un peu a la manière d'un jeu pokemon. (Alpha)",
        link: "https://github.com/Carlier-Maxime/AnimalBattle",
        img: "animalBattle.gif",
        competences: [skill.JAVA, skill.GIT, skill.JAVA_SWING, skill.INTELLIJ_IDEA],
        startDate: "2021-10-21",
        lastUpdate: "2022-02-04"
    },
    {
        name: "AvatarCreator",
        description: "AvatarCreator est une petite application permettant la création d'avatar. Actuellement vous pouvez juste génerer alèatoirement une 100 éne d'avatars a partir des assets présente. Vous pouvez configurer les paramètre via le fichier setting.txt. il est possible d'en rajouter vous même manuellement.",
        link: "https://github.com/Carlier-Maxime/avatarCreator",
        img: "avatarCreator.png",
        competences: [skill.CPP, skill.QT, skill.CLION],
        startDate: "2022-01-14",
        lastUpdate: "2022-02-07"
    },
    {
        name: "Demineur",
        description: "Demineur est un projet personelle.\n" +
            "Le but de ce projet est de recréer le célebre jeu le demineur en java avec l'interface graphique swing",
        link: "https://github.com/Carlier-Maxime/Demineur",
        img: "demineur.gif",
        competences: [skill.JAVA, skill.GIT, skill.JAVA_SWING, skill.INTELLIJ_IDEA],
        startDate: "2021-04-22",
        lastUpdate: "2022-01-25"
    },
    {
        name: "Labyrinthe",
        description: "Projet du semestre 2 de mon DUT informatique, fait en groupe de 4 étudiant. \n" +
            "\n" +
            "Le but de celui-ci était de coder le jeux de société labyrinthe de ravensberger,\n" +
            "on avait pour cela l'interface graphique déjà faite. et on devait faire tous ce qui était plus backend.\n" +
            "On avait le projet divisé en plusieurs étapes avec des jalons et a chaque étape on devait déposer le travail fait.\n" +
            "Le projet fut réaliser en java.",
        link: "https://github.com/Carlier-Maxime/labyrinthe",
        img: "labyrinthe.gif",
        competences: [skill.JAVA, skill.GIT, skill.INTELLIJ_IDEA],
        startDate: "2021-04-22",
        lastUpdate: "2021-06-09"
    },
    {
        name: "Interpreter Lisp",
        description: "Un interpréteur du language Lisp, plus précisément la version Scheme. Réalisée en Solo dans le cadre d'un projet de ma première année de Master Informatique",
        link: "https://github.com/Carlier-Maxime/InterpreterLisp",
        img: "interpreter_lisp.gif",
        competences: [skill.JAVA, skill.SHELL, skill.GIT, skill.INTELLIJ_IDEA],
        startDate: "2024-01-14",
        lastUpdate: "2024-03-23"
    },
    {
        name: "lanceur rayons",
        description: "un lanceur de rayons réalisé en C++ (GPU non pris en charge). fait en groupe de 2 étudiant",
        link: "https://github.com/Carlier-Maxime/lanceur-rayons",
        img: "lanceur-rayons.png",
        competences: [skill.CPP, skill.GIT, skill.CLION],
        startDate: "2023-01-24",
        lastUpdate: "2023-04-07"
    },
    {
        name: "Puissance4",
        description: "Le célébre jeu Puissance 4 réalisé en C avec la lib SDL2. fait en groupe de 2 étudiant",
        link: "https://github.com/Carlier-Maxime/Puissance4",
        img: "puissance4.gif",
        competences: [skill.C, skill.SDL, skill.GIT, skill.CLION],
        startDate: "2022-12-08",
        lastUpdate: "2023-01-08"
    },
    {
        name: "LabyCreator",
        description: "LabyCreator est une petite application java qui permet de créer et résoudre un labyrinthe automatiquement.",
        link: "https://github.com/Carlier-Maxime/labyCreator",
        img: "labyCreator.gif",
        competences: [skill.JAVA,skill.JAVA_SWING,skill.GIT,skill.INTELLIJ_IDEA],
        startDate: "2021-11-12",
        lastUpdate: "2021-12-06"
    },
    {
        name: "DrawIO",
        description: "DrawIO est une petite application java qui permet de dessiner a la souris.",
        link: "https://github.com/Carlier-Maxime/DrawIO",
        img: "drawIO.gif",
        competences: [skill.JAVA,skill.JAVA_SWING,skill.GIT,skill.INTELLIJ_IDEA],
        startDate: "2021-11-29",
        lastUpdate: "2022-01-04"
    },
    {
        name: "Boto",
        description: "boto est un site web de gestion de série qui a été créer en 2021 durant un marathon web.\
        ce marathon a duré 3 jour, du 15 décembre au 17 décembre 2021.\
        c'était un projet de fin de semestre 3 de mon DUT informatique a l'IUT de lens.\
        ce fut réalisée par groupe de 7 étudiant, 3 pour le back et 4 pour le front.\
        J'étais bien entendu du coté back-end. (non hébergé)",
        link: "https://github.com/Carlier-Maxime/boto",
        img: "boto.jpg",
        competences: [skill.PHP,skill.LARAVEL,skill.GIT,skill.SQL,skill.PHP_STORM],
        startDate: "2021-12-15",
        lastUpdate: "2021-12-17"
    },
    {
        name: "Sokoban",
        description: "le jeu du sokoban recréer en python avec la librairie pyqt5.\
        fait en groupe de 4 étudiant durant mon DUT info a l'IUT de lens.",
        link: "https://github.com/Carlier-Maxime/sokoban",
        img: "sokoban.gif",
        competences: [skill.PYTHON,skill.PYQT,skill.GIT,skill.PY_CHARM],
        startDate: "2021-06-01",
        lastUpdate: "2021-06-17"
    }
];

let portfolio = projects.shift();
projects.sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate));
projects.push(portfolio);