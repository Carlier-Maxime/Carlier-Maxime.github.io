import * as skill from "./competence.js";

const cpt = skill.competences;

const projects = [
    {
        name: "Interpreter Lisp",
        description: "Un interpréteur du language Lisp, plus précisément la version Scheme. Réalisée en Solo dans le cadre d'un projet de ma première année de Master Informatique",
        link: "https://github.com/Carlier-Maxime/InterpreterLisp",
        img: "interpreter_lisp.gif",
        competences: [cpt['Java'], cpt['Shell'], cpt['Git']]
    },
    {
        name: "lanceur rayons",
        description: "un lanceur de rayons réalisé en C++ (GPU non pris en charge). fait en groupe de 2 étudiant",
        link: "https://github.com/Carlier-Maxime/lanceur-rayons",
        img: "lanceur-rayons.png",
        competences: [cpt['CPlusPlus'], cpt['Git']]
    },
    {
        name: "Puissance4",
        description: "Le célébre jeu Puissance 4 réalisé en C avec la lib SDL2. fait en groupe de 2 étudiant",
        link: "https://github.com/Carlier-Maxime/Puissance4",
        img: "puissance4.gif",
        competences: [cpt['C'], cpt['SDL'], cpt['Git']]
    },
    {
        name: "Portfolio",
        description: "Portfolio avec tous mes projet et des information sur moi.",
        link: "https://github.com/Carlier-Maxime/Carlier-Maxime.github.io",
        img: "portfolio.jpg",
        competences: [cpt['HTML'],cpt['CSS'],cpt['Angular'],cpt['TS'],cpt['Git']]
    },
    {
        name: "LabyCreator",
        description: "LabyCreator est une petite application java qui permet de créer et résoudre un labyrinthe automatiquement.",
        link: "https://github.com/Carlier-Maxime/labyCreator",
        img: "labyCreator.gif",
        competences: [cpt['Java'],cpt['JavaSwing'],cpt['Git']]
    },
    {
        name: "DrawIO",
        description: "DrawIO est une petite application java qui permet de dessiner a la souris.",
        link: "https://github.com/Carlier-Maxime/DrawIO",
        img: "drawIO.gif",
        competences: [cpt['Java'],cpt['JavaSwing'],cpt['Git']]
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
        competences: [cpt['PHP'],cpt['Laravel'],cpt['Git'],cpt['SQL']]
    },
    {
        name: "Sokoban",
        description: "le jeu du sokoban recréer en python avec la librairie pyqt5.\
        fait en groupe de 4 étudiant durant mon DUT info a l'IUT de lens.",
        link: "https://github.com/Carlier-Maxime/sokoban",
        img: "sokoban.gif",
        competences: [cpt['Python'],cpt['PyQt'],cpt['Git']]
    }
];

function competenceToHTML(competence) {
    let name = competence.name;
    let link = competence.link;
    if (link) return '<li><a href="'+link+'">'+name+'</a></li>';
    return '<li>'+name+'</li>';
}

function addProject(project) {
    let container = document.getElementById("container");
    let add = '<div id="project"><div class="project-details">'+
    '<h1>'+project['name']+'</h1>'+'<p class="description">'+project['description']+'</p>'+
    '<div class="control"><button class="btn"><a href="'+project['link']+'"><span class="code">Code</span>'+
    '<span class="logo-github"><i class="fa-brands fa-github"></i></span><span class="github">Github</span>'+
    '</a></button></div></div><div class="project-img"><img src="./assets/images/'+project['img']+'" alt="apercu\">'+
    '<div class="info"><h2>Compétences</h2><ul>';
    project['competences'].forEach(competence => {
        add+=competenceToHTML(competence);
    });
    container.innerHTML += add+'</ul></div></div></div>';
}

projects.forEach(project => {
    addProject(project);
});