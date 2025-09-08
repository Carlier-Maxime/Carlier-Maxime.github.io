import { projects } from "./project.js";

function competenceToHTML(competence) {
    let name = competence.name;
    let link = competence.link;
    if (link) return '<li><a href="'+link+'">'+name+'</a></li>';
    return '<li>'+name+'</li>';
}

function dateToHTML(name, date) {
    return '<div class="date"><span class="date-name">'+name+'</span><br><span class="date">'+date+'</span></div>';
}

function addProject(project) {
    let container = document.getElementById("container");
    let add = '<div id="project"><div class="project-details">'+
    '<h1>'+project['name']+'</h1>'+'<p class="description">'+project['description']+'</p>'+
    '<div class="control">'+dateToHTML('Date de début', project['startDate'])+'<button class="btn"><a href="'+project['link']+'"><span class="code">Code</span>'+
    '<span class="logo-github"><i class="fa-brands fa-github"></i></span><span class="github">Github</span>'+
    '</a></button>'+dateToHTML('Dernière MAJ', project['lastUpdate'])+'</div></div><div class="project-img"><img src="./assets/images/'+project['img']+'" alt="apercu\">'+
    '<div class="info"><h2>Compétences</h2><ul>';
    project['competences'].forEach(competence => {
        add+=competenceToHTML(competence);
    });
    container.innerHTML += add+'</ul></div></div></div>';
}

projects.forEach(project => {
    addProject(project);
});