import { projects } from "./project.js";

function competenceToHTML(competence) {
    let name = competence.name;
    let link = competence.link;
    return `<a ${link ? `href="${link}"` : ''}> ${name} </a>`;
}

function dateToHTML(name, date) {
    return '<div class="date"><span class="date-name">'+name+'</span><br><span class="date">'+date+'</span></div>';
}

function addProject(project) {
    let container = document.getElementById("container");

    let mediaSrc = `./assets/images/${project['img']}`;
    let mediaHTML;
    if (project['img'].endsWith('.webm')) {
        mediaHTML = `<video src="${mediaSrc}" autoplay loop muted playsinline></video>`;
    } else {
        mediaHTML = `<img src="${mediaSrc}" alt="aperçu">`;
    }
    mediaHTML = `<div class="media">${mediaHTML}</div>`;

    let badgesHTML = '<div class="badges">';
    project['competences'].forEach(comp => {
        badgesHTML += competenceToHTML(comp);
    });
    badgesHTML += '</div>';

    let add = `
    <div id="project">
        <div class="project-details">
            <h1>${project['name']}</h1>
            <p class="description">${project['description']}</p>
            ${badgesHTML}
            <div class="control">
                ${dateToHTML('Date de début', project['startDate'])}
                <button class="btn">
                    <a href="${project['link']}">
                        <span class="code">Code</span>
                        <span class="logo-github"><i class="fa-brands fa-github"></i></span>
                        <span class="github">Github</span>
                    </a>
                </button>
                ${dateToHTML('Dernière MAJ', project['lastUpdate'])}
            </div>
        </div>
        ${mediaHTML}
    </div>`;

    container.innerHTML += add;
}

projects.forEach(project => {
    addProject(project);
});