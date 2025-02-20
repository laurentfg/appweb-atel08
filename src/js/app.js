let listeChampsObligatoires = ["joueur", "personnage"];
let listeDeroulantsObligatoires = [
    "historique",
    "alignement",
    "race",
    "classe",
];
let listeChampsNumeriques = [
    { id: "niveau", minimum: 1, maximum: 20 },
    { id: "experience", minimum: 0, maximum: 355000 },
    { id: "vie", minimum: 0, maximum: 400 },
    { id: "armure", minimum: 10, maximum: 40 },
    { id: "initiative", minimum: -5, maximum: 25 },
    { id: "vitesse", minimum: 0, maximum: 50 },
];
let listeChampsStats = [
    "force",
    "dexterite",
    "constitution",
    "intelligence",
    "sagesse",
    "charisme",
];

const STATS_MINIMUM = 8;
const STATS_MAXIMUM = 15;

document.getElementById("creerPersonnage").addEventListener("click", () => {
    ValiderForm();
});

function ValiderForm() {
    let formValide = true;

    erreur.textContent = "";

    //identification
    listeChampsObligatoires.forEach((id) => {
        const verifierInput = document.getElementById(id);
        const texteInput = verifierInput.value.trim();

        const messageErreur = document.getElementById("err_" + id);
        messageErreur.textContent = "";

        if (!texteInput) {
            formValide = false;
            messageErreur.textContent = "champ obligatoire";
            erreur.textContent += id + ", ";
        }
    });

    //information roleplay
    listeDeroulantsObligatoires.forEach((id) => {
        const verifierInput = document.getElementById(id);
        const choixInput = verifierInput.value.trim();

        const messageErreur = document.getElementById("err_" + id);
        messageErreur.textContent = "";

        if (!choixInput) {
            formValide = false;
            messageErreur.textContent = "Doit choisir un choix";
            erreur.textContent += id + ", ";
        }
    });

    //compétences, multiples choix
    const verifierInput = document.getElementById("competences");
    const choixInput = verifierInput.value.trim();
    console.log(choixInput);

    const messageErreur = document.getElementById("err_" + "competences");
    messageErreur.textContent = "";

    if (!choixInput) {
        formValide = false;
        messageErreur.textContent = "Doit choisir au moins une compétence";
        erreur.textContent += "competences, ";
    }

    //informations numérique
    listeChampsNumeriques.forEach((id) => {
        const verifierInput = document.getElementById(id.id);
        const texteInput = verifierInput.value.trim();

        const messageErreur = document.getElementById("err_" + id.id);
        console.log(messageErreur);
        messageErreur.textContent = "";

        if (
            texteInput < id.minimum ||
            texteInput > id.maximum ||
            texteInput == null
        ) {
            formValide = false;
            messageErreur.textContent =
                "Doit entrer entre " + id.minimum + " et " + id.maximum;
            erreur.textContent += id.id + ", ";
        }
    });

    //points de caractéristique
    listeChampsStats.forEach((id) => {
        const verifierInput = document.getElementById(id);
        const nombreInput = verifierInput.value.trim();

        const messageErreur = document.getElementById("err_" + id);
        messageErreur.textContent = "";

        if (nombreInput < STATS_MINIMUM || nombreInput > STATS_MAXIMUM) {
            formValide = false;
            messageErreur.textContent =
                "Doit entrer entre " + STATS_MINIMUM + " et " + STATS_MAXIMUM;
            erreur.textContent += id + ", ";
        }
    });

    if (formValide == true) {
        CreerPersonnage();
    }
}

function CreerPersonnage() {
    //aucune idée quoi faire, j'assume que ça sera géré plus tard, alors message console en attendant
    console.log("Créé le personnage");
}
