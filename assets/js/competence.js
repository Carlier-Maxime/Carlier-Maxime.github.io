const Category = Object.freeze({
    LANGUAGE: "Language",
    SOFTWARE: "Logiciel",
    FRAMEWORK: "Framework",
    OS: "Système d'Exploitation"
});

export var competences = {};
export var languages = {};
export var software = {};
export var frameworks = {};
export var oss = {};

function addCompetence(key, name, link, category) {
    if (competences[key]) {
        console.warn(`⚠️ La compétence "${key}" existe déjà.`);
        return;
    }
    competences[key] = { name: name, link: link, category: category };
    switch (category) {
        case Category.LANGUAGE:
            languages[key] = competences[key];
            break;
        case Category.SOFTWARE:
            software[key] = competences[key];
            break;
        case Category.FRAMEWORK:
            frameworks[key] = competences[key];
            break;
        case Category.OS:
            oss[key] = competences[key];
    }
}

addCompetence("PHP", "PHP", "https://www.php.net/", Category.LANGUAGE);
addCompetence("Java", "Java", "https://www.oracle.com/fr/java/", Category.LANGUAGE);
addCompetence("HTML", "HTML", "https://html.spec.whatwg.org/multipage/", Category.LANGUAGE);
addCompetence("CSS", "CSS", "https://www.w3.org/Style/CSS/", Category.LANGUAGE);
addCompetence("Angular", "Angular", "https://angular.io/", Category.FRAMEWORK);
addCompetence("TS", "TypeScript", "https://www.typescriptlang.org/", Category.LANGUAGE);
addCompetence("Git", "Git", "https://git-scm.com/", Category.SOFTWARE);
addCompetence("JavaSwing", "JavaSwing", "https://docs.oracle.com/javase/6/docs/technotes/guides/swing/", Category.FRAMEWORK);
addCompetence("Laravel", "Laravel", "https://laravel.com/", Category.FRAMEWORK);
addCompetence("SQL", "SQL", "https://sql.sh/", Category.LANGUAGE);
addCompetence("Python", "Python", "https://www.python.org/", Category.LANGUAGE);
addCompetence("PyQt", "PyQt", "https://wiki.python.org/moin/PyQt", Category.FRAMEWORK);
addCompetence("C", "C", "https://fr.wikipedia.org/wiki/C_(langage)", Category.LANGUAGE);
addCompetence("SDL", "SDL", "https://www.libsdl.org/", Category.FRAMEWORK);
addCompetence("CPlusPlus", "C++", "https://fr.wikipedia.org/wiki/C%2B%2B", Category.LANGUAGE);
addCompetence("Shell", "Shell", "https://fr.wikipedia.org/wiki/Shell_Unix", Category.LANGUAGE);
addCompetence("Bash", "Bash", "https://www.gnu.org/software/bash/", Category.LANGUAGE);
addCompetence("JS", "JavaScript", "https://developer.mozilla.org/fr/docs/Web/JavaScript", Category.LANGUAGE);
addCompetence("Rider", "Rider", "https://www.jetbrains.com/fr-fr/rider/", Category.SOFTWARE);
addCompetence("CLion", "CLion", "https://www.jetbrains.com/fr-fr/clion/", Category.SOFTWARE);
addCompetence("Intellij_IDEA", "Intellij IDEA", "https://www.jetbrains.com/idea/", Category.SOFTWARE);
addCompetence("PhpStorm", "PhpStorm", "https://www.jetbrains.com/fr-fr/phpstorm/", Category.SOFTWARE);
addCompetence("PyCharm", "PyCharm", "https://www.jetbrains.com/fr-fr/pycharm/", Category.SOFTWARE);
addCompetence("WebStorm", "WebStorm", "https://www.jetbrains.com/fr-fr/webstorm/", Category.SOFTWARE);
addCompetence("VS_Code", "VS Code", "https://code.visualstudio.com/", Category.SOFTWARE);
addCompetence("VisualStudio", "Visual Studio", "https://visualstudio.microsoft.com/fr/", Category.SOFTWARE);
addCompetence("NotepadPlusPlus", "Notepad++", "https://notepad-plus-plus.org/", Category.SOFTWARE);
addCompetence("UnrealEngine", "Unreal Engine", "https://www.unrealengine.com/fr", Category.SOFTWARE);
addCompetence("Unity", "Unity", "https://unity.com/fr", Category.SOFTWARE);
addCompetence("Qt", "Qt", "https://www.qt.io/", Category.FRAMEWORK);
addCompetence("Bootstrap", "Bootstrap", "https://getbootstrap.com/", Category.FRAMEWORK);
addCompetence("Tensorflow", "Tensorflow", "https://www.tensorflow.org/?hl=fr", Category.FRAMEWORK);
addCompetence("Keras", "Keras", "https://keras.io/", Category.FRAMEWORK);
addCompetence("PyTorch", "PyTorch", "https://pytorch.org/", Category.FRAMEWORK);
addCompetence("OpenGL", "OpenGL", "https://www.opengl.org/", Category.FRAMEWORK);
addCompetence("GLFW", "GLFW", "https://www.glfw.org/", Category.FRAMEWORK);
addCompetence("GLM", "GLM", "https://glm.g-truc.net/0.9.9/index.html", Category.FRAMEWORK);
addCompetence("Vulkan", "Vulkan", "https://www.vulkan.org/", Category.FRAMEWORK);
addCompetence("Manjaro", "Manjaro (KDE Plasma)", "https://manjaro.org/products/download/x86", Category.OS);
addCompetence("Ubuntu", "Ubuntu", "https://www.ubuntu-fr.org/", Category.OS);
addCompetence("Fedora", "Fedora", "https://fedoraproject.org/fr/", Category.OS);
addCompetence("Windows", "Windows", "https://www.microsoft.com/fr-fr/windows/", Category.OS);
