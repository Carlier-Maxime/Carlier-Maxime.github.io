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
    return competences[key];
}

function addCompetence_(keyName, link, category) {
    return addCompetence(keyName, keyName, link, category);
}

export const PHP = addCompetence_("PHP", "https://www.php.net/", Category.LANGUAGE);
export const JAVA = addCompetence_("Java", "https://www.oracle.com/fr/java/", Category.LANGUAGE);
export const HTML = addCompetence_("HTML", "https://html.spec.whatwg.org/multipage/", Category.LANGUAGE);
export const CSS = addCompetence_("CSS", "https://www.w3.org/Style/CSS/", Category.LANGUAGE);
export const ANGULAR = addCompetence_("Angular", "https://angular.io/", Category.FRAMEWORK);
export const TS = addCompetence("TS", "TypeScript", "https://www.typescriptlang.org/", Category.LANGUAGE);
export const GIT = addCompetence_("Git", "https://git-scm.com/", Category.SOFTWARE);
export const JAVA_SWING = addCompetence_("JavaSwing", "https://docs.oracle.com/javase/6/docs/technotes/guides/swing/", Category.FRAMEWORK);
export const LARAVEL = addCompetence_("Laravel", "https://laravel.com/", Category.FRAMEWORK);
export const SQL = addCompetence_("SQL", "https://sql.sh/", Category.LANGUAGE);
export const PYTHON = addCompetence_("Python", "https://www.python.org/", Category.LANGUAGE);
export const PYQT = addCompetence_("PyQt", "https://wiki.python.org/moin/PyQt", Category.FRAMEWORK);
export const C = addCompetence_("C", "https://fr.wikipedia.org/wiki/C_(langage)", Category.LANGUAGE);
export const SDL = addCompetence_("SDL", "https://www.libsdl.org/", Category.FRAMEWORK);
export const CPP = addCompetence("CPlusPlus", "C++", "https://fr.wikipedia.org/wiki/C%2B%2B", Category.LANGUAGE);
export const SHELL = addCompetence_("Shell", "https://fr.wikipedia.org/wiki/Shell_Unix", Category.LANGUAGE);
export const BASH = addCompetence_("Bash", "https://www.gnu.org/software/bash/", Category.LANGUAGE);
export const JS = addCompetence("JS", "JavaScript", "https://developer.mozilla.org/fr/docs/Web/JavaScript", Category.LANGUAGE);
export const RIDER = addCompetence_("Rider", "https://www.jetbrains.com/fr-fr/rider/", Category.SOFTWARE);
export const CLION = addCompetence_("CLion", "https://www.jetbrains.com/fr-fr/clion/", Category.SOFTWARE);
export const INTELLIJ_IDEA = addCompetence("Intellij_IDEA", "Intellij IDEA", "https://www.jetbrains.com/idea/", Category.SOFTWARE);
export const PHP_STORM = addCompetence_("PhpStorm", "https://www.jetbrains.com/fr-fr/phpstorm/", Category.SOFTWARE);
export const PY_CHARM = addCompetence_("PyCharm", "https://www.jetbrains.com/fr-fr/pycharm/", Category.SOFTWARE);
export const WEB_STORM = addCompetence_("WebStorm", "https://www.jetbrains.com/fr-fr/webstorm/", Category.SOFTWARE);
export const VS_CODE = addCompetence("VS_Code", "VS Code", "https://code.visualstudio.com/", Category.SOFTWARE);
export const VISUAL_STUDIO = addCompetence("VisualStudio", "Visual Studio", "https://visualstudio.microsoft.com/fr/", Category.SOFTWARE);
export const NOTEPAD_PLUS_PLUS = addCompetence("NotepadPlusPlus", "Notepad++", "https://notepad-plus-plus.org/", Category.SOFTWARE);
export const UNREAL_ENGINE = addCompetence("UnrealEngine", "Unreal Engine", "https://www.unrealengine.com/fr", Category.SOFTWARE);
export const UNITY = addCompetence_("Unity", "https://unity.com/fr", Category.SOFTWARE);
export const QT = addCompetence_("Qt", "https://www.qt.io/", Category.FRAMEWORK);
export const BOOTSTRAP = addCompetence_("Bootstrap", "https://getbootstrap.com/", Category.FRAMEWORK);
export const TENSORFLOW = addCompetence_("Tensorflow", "https://www.tensorflow.org/?hl=fr", Category.FRAMEWORK);
export const KERAS = addCompetence_("Keras", "https://keras.io/", Category.FRAMEWORK);
export const PYTORCH = addCompetence_("PyTorch", "https://pytorch.org/", Category.FRAMEWORK);
export const OPENGL = addCompetence_("OpenGL", "https://www.opengl.org/", Category.FRAMEWORK);
export const GLFW = addCompetence_("GLFW", "https://www.glfw.org/", Category.FRAMEWORK);
export const GLM = addCompetence_("GLM", "https://glm.g-truc.net/0.9.9/index.html", Category.FRAMEWORK);
export const VULKAN = addCompetence_("Vulkan", "https://www.vulkan.org/", Category.FRAMEWORK);
export const MANJARO = addCompetence("Manjaro", "Manjaro (KDE Plasma)", "https://manjaro.org/products/download/x86", Category.OS);
export const UBUNTU = addCompetence_("Ubuntu", "https://www.ubuntu-fr.org/", Category.OS);
export const FEDORA = addCompetence_("Fedora", "https://fedoraproject.org/fr/", Category.OS);
export const WINDOWS = addCompetence_("Windows", "https://www.microsoft.com/fr-fr/windows/", Category.OS);
export const CSHARP = addCompetence("CSHARP", "C#", "https://fr.wikipedia.org/wiki/C_Sharp", Category.LANGUAGE);
export const CUDA = addCompetence_("CUDA", "https://developer.nvidia.com/cuda-zone", Category.LANGUAGE);