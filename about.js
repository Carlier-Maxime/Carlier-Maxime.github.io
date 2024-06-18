const languages = ['C','C++','Java','Python','PHP','HTML','CSS','Typescript','SQL','Bash','JavaScript'];
const logiciels = ['CLion','Intellij IDEA','PhpStorm','PyCharm','WebStorm','Visual studio code','Visual studio','Notepad++','Unreal Engine','Git'];
const frameworks = ['SDL','Laravel','Angular','Qt','Pyqt','Java Swing','Bootstrap','Tensorflow','Keras','PyTorch','OpenGL','GLFW','Vulkan'];
const se = ['Linux','Ubuntu','Fedora','Windows 11','Windows 10','Windows 7'];

const len = Math.max(languages.length,logiciels.length,frameworks.length,se.length);

let tab = document.getElementById("tabCompBody");

for (let i=0; i<len; i++) {
    let line = "<tr>";
    line += "<td>"+(languages[i] ? languages[i] : "")+"</td>";
    line += "<td>"+(logiciels[i] ? logiciels[i] : "")+"</td>";
    line += "<td>"+(frameworks[i] ? frameworks[i] : "")+"</td>";
    line += "<td>"+(se[i] ? se[i] : "")+"</td>";
    line += "</tr>";
    tab.innerHTML += line;
}