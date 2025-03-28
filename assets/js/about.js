import * as skill from "./competence.js";

const languages = Object.values(skill.languages);
const software = Object.values(skill.software);
const frameworks = Object.values(skill.frameworks);
const oss = Object.values(skill.oss);

const len = Math.max(languages.length, software.length, frameworks.length, oss.length);
let tab = document.getElementById("tabCompBody");

for (let i = 0; i < len; i++) {
    let line = "<tr>";
    line += `<td>${languages[i] ? `<a href="${languages[i].link}" target="_blank">${languages[i].name}</a>` : ""}</td>`;
    line += `<td>${software[i] ? `<a href="${software[i].link}" target="_blank">${software[i].name}</a>` : ""}</td>`;
    line += `<td>${frameworks[i] ? `<a href="${frameworks[i].link}" target="_blank">${frameworks[i].name}</a>` : ""}</td>`;
    line += `<td>${oss[i] ? `<a href="${oss[i].link}" target="_blank">${oss[i].name}</a>` : ""}</td>`;
    line += "</tr>";
    tab.innerHTML += line;
}
