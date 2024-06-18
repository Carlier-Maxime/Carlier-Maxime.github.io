const competences = {
    PHP: "https://www.php.net/",
    Java: "https://www.oracle.com/fr/java/",
    HTML: "https://html.spec.whatwg.org/multipage/",
    CSS: "https://www.w3.org/Style/CSS/",
    Angular: "https://angular.io/",
    Typescript: "https://www.typescriptlang.org/",
    Git: "https://git-scm.com/",
    JavaSwing: "https://docs.oracle.com/javase/6/docs/technotes/guides/swing/",
    Laravel: "https://laravel.com/",
    SQL: "https://sql.sh/",
    Python: "https://www.python.org/",
    PyQt: "https://wiki.python.org/moin/PyQt",
    C: "https://fr.wikipedia.org/wiki/C_(langage)",
    SDL: "https://www.libsdl.org/",
    CPlusPlus: "https://fr.wikipedia.org/wiki/C%2B%2B",
    Shell: "https://fr.wikipedia.org/wiki/Shell_Unix"
};

const projects = [
    {
        name: "Interpreter Lisp",
        description: "Un interpréteur du language Lisp, plus précisément la version Scheme. Réalisée en Solo dans le cadre d'un projet de ma première année de Master Informatique",
        link: "https://github.com/Carlier-Maxime/InterpreterLisp",
        img: "interpreter_lisp.gif",
        competences: ["Java", "Shell", "Git"]
    },
    {
        name: "lanceur rayons",
        description: "un lanceur de rayons réalisé en C++ (GPU non pris en charge). fait en groupe de 2 étudiant",
        link: "https://github.com/Carlier-Maxime/lanceur-rayons",
        img: "lanceur-rayons.png",
        competences: ["CPlusPlus", "Git"]
    },
    {
        name: "Puissance4",
        description: "Le célébre jeu Puissance 4 réalisé en C avec la lib SDL2. fait en groupe de 2 étudiant",
        link: "https://github.com/Carlier-Maxime/Puissance4",
        img: "puissance4.gif",
        competences: ["C", "SDL", "Git"]
    },
    {
        name: "Portfolio",
        description: "Portfolio avec tous mes projet et des information sur moi.",
        link: "https://github.com/Carlier-Maxime/Carlier-Maxime.github.io",
        img: "portfolio.jpg",
        competences: ['HTML','CSS','Angular','Typescript','Git']
    },
    {
        name: "LabyCreator",
        description: "LabyCreator est une petite application java qui permet de créer et résoudre un labyrinthe automatiquement.",
        link: "https://github.com/Carlier-Maxime/labyCreator",
        img: "labyCreator.gif",
        competences: ['Java','JavaSwing','Git']
    },
    {
        name: "DrawIO",
        description: "DrawIO est une petite application java qui permet de dessiner a la souris.",
        link: "https://github.com/Carlier-Maxime/DrawIO",
        img: "drawIO.gif",
        competences: ['Java','JavaSwing','Git']
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
        competences: ['PHP','Laravel','Git','SQL']
    },
    {
        name: "Sokoban",
        description: "le jeu du sokoban recréer en python avec la librairie pyqt5.\
        fait en groupe de 4 étudiant durant mon DUT info a l'IUT de lens.",
        link: "https://github.com/Carlier-Maxime/sokoban",
        img: "sokoban.gif",
        competences: ['Python','PyQt','Git']
    }
];

function competenceToHTML(competence) {
    let link = competences[competence];
    if (link) return '<li><a href="'+link+'">'+competence+'</a></li>';
    return '<li>'+competence+'</li>';
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