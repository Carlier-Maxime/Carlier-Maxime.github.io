const languages = ['C','C++','Java','Python','PHP','HTML','CSS','Typescript','SQL','Bash'];
const logiciels = ['CLion','Intellij IDEA','PhpStorm','PyCharm','WebStorm','Visual studio code','Visual studio','Notepad++','Unreal Engine','Git'];
const frameworks = ['SDL','Laravel','Angular','Qt','Pyqt','Java Swing','Bootstrap','Tensorflow','Keras'];
const se = ['Linux','Ubuntu','Fedora','Windows 11','Windows 10','Windows 7'];

const len = Math.max(languages.length,logiciels.length,frameworks.length,se.length);

let tab = document.getElementById("tabCompBody");

for (let i=0; i<len; i++) {
    let line = "<tr>";
    if (languages[i]) line += "<td>"+languages[i]+"</td>";
    if (logiciels[i]) line += "<td>"+logiciels[i]+"</td>";
    if (frameworks[i]) line += "<td>"+frameworks[i]+"</td>";
    if (se[i]) line += "<td>"+se[i]+"</td>";
    line += "</tr>";
    tab.innerHTML += line;
}