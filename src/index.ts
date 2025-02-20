import "./css/style.css";
import "./css/bootstrap.min.css";
import "./js/bootstrap.bundle.min.js";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="container mt-5 p-3">
            <h2>Formulaire de création de personnage</h2>
            <section class="erreur_message" id="erreur">
                <!-- ==================== vide par défaut ==================== -->
            </section>
            <form id="creationPersonnage" method="post" action="creer-perso.html">
                <!-- ==================== Identification (2) ==================== -->
                <h3>Identification</h3>
                <div class="row">
                    <!-- Nom du Joueur -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="joueur" class="form-label">Nom du Joueur</label>
                        <input type="text" class="form-control" name="joueur" id="joueur"
                            placeholder="Nom du Joueur réel">
                        <div class="erreur_message" id="err_joueur"></div>
                    </div>
                    <!-- Nom du Personnage -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="personnage" class="form-label">Nom du Personnage</label>
                        <input type="text" class="form-control" name="personnage" id="personnage"
                            placeholder="Nom du Personnage">
                        <div class="erreur_message" id="err_personnage"></div>
                    </div>
                </div>
                <!-- ====================  ==================== -->

                <!-- ==================== Informations Roleplay (4) ==================== -->
                <h3>Informations Roleplay</h3>
                <div class="row">
                    <!-- Historique: choix obligatoire -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="historique" class="form-label">Historique :</label>
                        <select class="form-select" name="historique" id="historique">
                            <option value="" selected>Choisir...</option>
                            <option value="acolyte">Acolyte</option>
                            <option value="charlatan">Charlatan</option>
                            <option value="criminel">Criminel</option>
                            <option value="artiste">Artiste</option>
                            <option value="hermite">Hermite</option>
                            <option value="marchand">Marchand itinérant</option>
                            <option value="noble">Noble</option>
                            <option value="érudit">Érudit</option>
                            <option value="marin">Marin</option>
                            <option value="soldat">Soldat</option>
                            <option value="orphelin">Orphelin</option>
                            <option value="sage">Sage</option>
                            <option value="sauvage">Sauvage</option>
                        </select>
                        <div class="erreur_message" id="err_historique"></div>
                    </div>

                    <!-- Alignement: choix obligatoire -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="alignement" class="form-label">Alignement</label>
                        <select class="form-select" name="alignement" id="alignement">
                            <option value="" selected>Choisir...</option>
                            <option value="loyalBon">Loyal Bon</option>
                            <option value="neutreBon">Neutre Bon</option>
                            <option value="chaotiqueBon">Chaotique Bon</option>
                            <option value="loyalNeutre">Loyal Neutre</option>
                            <option value="neutre">Neutre</option>
                            <option value="chaotiqueNeutre">Chaotique Neutre</option>
                            <option value="loyalMauvais">Loyal Mauvais</option>
                            <option value="neutreMauvais">Neutre Mauvais</option>
                            <option value="chaotiqueMauvais">Chaotique Mauvais</option>
                        </select>
                        <div class="erreur_message" id="err_alignement"></div>
                    </div>
                </div>
                <div class="row">
                    <!-- Race: choix obligatoire -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="race" class="form-label">Race</label>
                        <select class="form-select" name="race" id="race">
                            <option value="" selected>Choisir...</option>
                            <option value="elfe">Elfe</option>
                            <option value="halfelin">Halfelin</option>
                            <option value="humain">Humain</option>
                            <option value="nain">Nain</option>
                            <option value="demi-elfe">Demi-elfe</option>
                            <option value="demi-orc">Demi-orc</option>
                            <option value="gnome">Gnome</option>
                            <option value="sangdragon">Sangdragon</option>
                            <option value="tieffelin">Tieffelin</option>
                        </select>
                        <div class="erreur_message" id="err_race"></div>
                    </div>

                    <!-- Classe: choix obligatoire -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="classe" class="form-label">Classe</label>
                        <select class="form-select" name="classe" id="classe">
                            <option value="" selected>Choisir...</option>
                            <option value="barbare">Barbare</option>
                            <option value="barde">Barde</option>
                            <option value="clerc">Clerc</option>
                            <option value="druide">Druide</option>
                            <option value="ensorceleur">Ensorceleur</option>
                            <option value="guerrier">Guerrier</option>
                            <option value="magicien">Magicien</option>
                            <option value="moine">Moine</option>
                            <option value="paladin">Paladin</option>
                            <option value="rodeur">Rôdeur</option>
                            <option value="roublard">Roublard</option>
                            <option value="sorcier">Sorcier</option>
                        </select>
                        <div class="erreur_message" id="err_classe"></div>
                    </div>
                    <!-- ==================== Compétences ==================== -->
                    <!-- Plusieurs choix possible, au minimum 1 choix -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="competences" class="form-label">Compétences (multiples)</label>
                        <select multiple class="form-select" name="competences" id="competences">
                            <option value="acrobatie">Acrobatie</option>
                            <option value="arcane">Arcane</option>
                            <option value="athletisme">Athlétisme</option>
                            <option value="discretion">Discrétion</option>
                            <option value="duperie">Duperie</option>
                            <option value="histoire">Histoire</option>
                            <option value="intimidation">Intimidation</option>
                            <option value="investigation">Investigation</option>
                            <option value="medecine">Médecine</option>
                            <option value="nature">Nature</option>
                            <option value="perception">Perception</option>
                            <option value="perspicacite">Perspicacité</option>
                            <option value="persuasion">Persuasion</option>
                            <option value="religion">Religion</option>
                            <option value="representation">Représentation</option>
                            <option value="survie">Survie</option>
                            <option value="tromperie">Tromperie</option>
                        </select>
                        <div class="erreur_message" id="err_competences"></div>
                    </div>
                    <!-- ====================  ==================== -->
                </div>
                <!-- ====================  ==================== -->

                <!-- ==================== Informations numériques (6) ==================== -->
                <h3>Informations numériques</h3>
                <div class="row">
                    <!-- Niveau du joueur: entre 1 et 20 -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="niveau" class="form-label">Niveau du joueur</label>
                        <input type="number" class="form-control" name="niveau" id="niveau">
                        <div class="erreur_message" id="err_niveau"></div>
                    </div>
                    <!-- Points d'expérience: entre 0 et 355 000  -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="experience" class="form-label">Points d'expérience</label>
                        <input type="number" class="form-control" name="experience" id="experience">
                        <div class="erreur_message" id="err_experience"></div>
                    </div>
                    <!-- Points de Vie: entre 0 et 400 -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="vie" class="form-label">Points de vie</label>
                        <input type="number" class="form-control" name="vie" id="vie">
                        <div class="erreur_message" id="err_vie"></div>
                    </div>
                </div>
                <div class="row">
                    <!-- Classe d'armure: entre 10 et 40 -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="armure" class="form-label">Classe d'armure</label>
                        <input type="number" class="form-control" name="armure" id="armure">
                        <div class="erreur_message" id="err_armure"></div>
                    </div>
                    <!-- Initiative: entre -5 et 25 -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="initiative" class="form-label">Initiative</label>
                        <input type="number" class="form-control" name="initiative" id="initiative">
                        <div class="erreur_message" id="err_initiative"></div>
                    </div>
                    <!-- Vitesse: entre 0 et 50 -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="vitesse" class="form-label">Vitesse (pieds par tour)</label>
                        <input type="number" class="form-control" name="vitesse" id="vitesse">
                        <div class="erreur_message" id="err_vitesse"></div>
                    </div>
                </div>
                <!-- ====================  ==================== -->

                <!-- ==================== Points de caractéristique (6) ==================== --> <!-- Force -->
                <h3>Points de caractéristique</h3>
                <div class="row">
                    <!-- Force: entre 8 et 15 -->
                    <div class="col-lg-2 col-12 mb-3">
                        <label for="force" class="form-label">Force</label>
                        <input type="number" class="form-control" name="force" id="force" placeholder="Force">
                        <div class="erreur_message" id="err_force"></div>
                    </div>
                    <!-- Dextérité: entre 8 et 15 -->
                    <div class="col-lg-2 col-12 mb-3">
                        <label for="dexterite" class="form-label">Dextérité</label>
                        <input type="number" class="form-control" name="dexterite" id="dexterite"
                            placeholder="Dextérité">
                        <div class="erreur_message" id="err_dexterite"></div>
                    </div>
                    <!-- Constitution: entre 8 et 15 -->
                    <div class="col-lg-2 col-12 mb-3">
                        <label for="constitution" class="form-label">Constitution</label>
                        <input type="number" class="form-control" name="constitution" id="constitution"
                            placeholder="Constitution">
                        <div class="erreur_message" id="err_constitution"></div>
                    </div>
                    <!-- Intelligence: entre 8 et 15 -->
                    <div class="col-lg-2 col-12 mb-3">
                        <label for="intelligence" class="form-label">Intelligence</label>
                        <input type="number" class="form-control" name="intelligence" id="intelligence"
                            placeholder="Intelligence">
                        <div class="erreur_message" id="err_intelligence"></div>
                    </div>
                    <!-- Sagesse: entre 8 et 15 -->
                    <div class="col-lg-2 col-12 mb-3">
                        <label for="sagesse" class="form-label">Sagesse</label>
                        <input type="number" class="form-control" name="sagesse" id="sagesse" placeholder="Sagesse">
                        <div class="erreur_message" id="err_sagesse"></div>
                    </div>
                    <!-- Charisme: entre 8 et 15 -->
                    <div class="col-lg-2 col-12 mb-3">
                        <label for="charisme" class="form-label">Charisme</label>
                        <input type="number" class="form-control" name="charisme" id="charisme" placeholder="Charisme">
                        <div class="erreur_message" id="err_charisme"></div>
                    </div>
                </div>
                <!-- ====================  ==================== -->

                <!-- ==================== Informations optionnelles ==================== -->
                <h3>Informations optionnelles</h3>
                <div class="row">
                    <!-- Attaques: optionnel -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="attaques" class="form-label">Attaques (si applicable)</label>
                        <textarea class="form-control" name="attaques" id="attaques" rows="3"></textarea>
                    </div>
                    <!-- Sorts: optionnel -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="sorts" class="form-label">Sorts (si applicable)</label>
                        <textarea class="form-control" name="sorts" id="sorts" rows="3"></textarea>
                    </div>
                    <!-- Équipement: optionnel -->
                    <div class="col-lg-4 col-12 mb-3">
                        <label for="equipement" class="form-label">Équipement</label>
                        <textarea class="form-control" name="equipment" id="equipment" rows="3"></textarea>
                    </div>
                </div>
                <div class="row">
                    <!-- Traits de Personnalité: optionnel -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="personalite" class="form-label">Traits de Personnalité</label>
                        <textarea class="form-control" name="personalite" id="personalite" rows="3"></textarea>
                    </div>
                    <!-- Idéaux: optionnel -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="ideaux" class="form-label">Idéaux</label>
                        <textarea class="form-control" name="ideaux" id="ideaux" rows="3"></textarea>
                    </div>
                </div>
                <div class="row">
                    <!-- Liens: optionnel -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="liens" class="form-label">Liens</label>
                        <textarea class="form-control" name="liens" id="liens" rows="3"></textarea>
                    </div>
                    <!-- Défauts: optionnel -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="defauts" class="form-label">Défauts</label>
                        <textarea class="form-control" name="defauts" id="defauts" rows="3"></textarea>
                    </div>
                </div>
                <div class="row">
                    <!-- Caractéristiques et traits: optionnel -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="traits" class="form-label">Caractéristiques et traits</label>
                        <textarea class="form-control" name="traits" id="traits" rows="3"></textarea>
                    </div>
                    <!-- Capacités et langages: optionnel -->
                    <div class="col-lg-6 col-12 mb-3">
                        <label for="capacites" class="form-label">Capacités et langages</label>
                        <textarea class="form-control" name="capacites" id="capacites" rows="3"></textarea>
                    </div>
                </div>
                <!-- ====================  ==================== -->

                <button type="button" class="btn btn-primary" id="creerPersonnage">Créer mon personnage!</button>
            </form>
        </div>
 `;

const listeChampsObligatoires: readonly string[] = ["joueur", "personnage"];
const listeDeroulantsObligatoires: readonly string[] = [
    "historique",
    "alignement",
    "race",
    "classe",
];

type ChampsNumeriques = {
    id: string;
    minimum: number;
    maximum: number;
};
const listeChampsNumeriques: ChampsNumeriques[] = [
    { id: "niveau", minimum: 1, maximum: 20 },
    { id: "experience", minimum: 0, maximum: 355000 },
    { id: "vie", minimum: 0, maximum: 400 },
    { id: "armure", minimum: 10, maximum: 40 },
    { id: "initiative", minimum: -5, maximum: 25 },
    { id: "vitesse", minimum: 0, maximum: 50 },
];
const listeChampsStats: readonly string[] = [
    "force",
    "dexterite",
    "constitution",
    "intelligence",
    "sagesse",
    "charisme",
];

const STATS_MINIMUM: number = 8;
const STATS_MAXIMUM: number = 15;
const TOTAL_STATS_MAXIMUM: number = 27;
const tableauCoutStats: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 7, 9,
];
const CHAMP_OBLIGATOIRE: string = "champ obligatoire";
const DOIT_CHOISIR: string = "Doit choisir un choix";
const DOIT_CHOISIR_UNE_COMPETENCE: string =
    "Doit choisir au moins une compétence";
const TOTAL_COUT_DEPASSE: string =
    "total de score dépassé, il faut rester en-dessous de " +
    TOTAL_STATS_MAXIMUM;

function afficherErreurEntreDeuxNombres(min: number, max: number): string {
    return "Doit entrer entre " + min + " et " + max;
}

document.getElementById("creerPersonnage")!.addEventListener("click", () => {
    ValiderForm();
});

function ValiderForm() {
    let formValide: boolean = true;

    //erreur du champ dans le HTML

    const erreur: HTMLElement | null = document.getElementById(
        "erreur"
    ) as HTMLElement;

    erreur.textContent = "";

    //identification
    listeChampsObligatoires.forEach((id) => {
        const verifierInput: HTMLInputElement | null = <HTMLInputElement>(
            document.getElementById(id)
        );
        const texteInput: string = verifierInput!.value.trim();

        const messageErreur: HTMLElement | null = document.getElementById(
            "err_" + id
        );
        messageErreur!.textContent = "";

        if (!texteInput) {
            formValide = false;
            messageErreur!.textContent = CHAMP_OBLIGATOIRE;
            erreur.textContent += id + ", ";
        }
    });

    //information roleplay
    listeDeroulantsObligatoires.forEach((id) => {
        const verifierInput: HTMLInputElement | null = <HTMLInputElement>(
            document.getElementById(id)
        );
        const choixInput: string = verifierInput.value.trim();

        const messageErreur = document.getElementById("err_" + id);
        messageErreur!.textContent = "";

        if (!choixInput) {
            formValide = false;
            messageErreur!.textContent = DOIT_CHOISIR;
            erreur.textContent += id + ", ";
        }
    });

    //compétences, multiples choix
    const verifierInput: HTMLInputElement | null = <HTMLInputElement>(
        document.getElementById("competences")
    );
    const choixInput: string = verifierInput.value.trim();

    const messageErreur: HTMLElement | null = document.getElementById(
        "err_" + "competences"
    );
    messageErreur!.textContent = "";

    if (!choixInput) {
        formValide = false;
        messageErreur!.textContent = DOIT_CHOISIR_UNE_COMPETENCE;
    }

    //informations numérique
    listeChampsNumeriques.forEach((id) => {
        const verifierInput: HTMLInputElement | null = <HTMLInputElement>(
            document.getElementById(id.id)
        );
        const entierInput: number = Number(verifierInput.value);

        const messageErreur = document.getElementById("err_" + id.id);
        console.log(verifierInput.value.length);
        messageErreur!.textContent = "";

        if (
            entierInput < id.minimum ||
            entierInput > id.maximum ||
            verifierInput.value.length === 0 ||
            isNaN(entierInput)
        ) {
            formValide = false;
            messageErreur!.textContent = afficherErreurEntreDeuxNombres(
                id.minimum,
                id.maximum
            );
        }
    });

    //points de caractéristique
    let statsCoutTotal: number = 0;
    listeChampsStats.forEach((id) => {
        const verifierInput: HTMLInputElement | null = <HTMLInputElement>(
            document.getElementById(id)
        );
        const nombreInput: number = Number(verifierInput.value.trim());
        //le nombre correspond à l'entrée dans la table, pas d'ajustement dans le tableau
        //donc le stats 9 qui coûte 1 point est à l'endroit [9], pas le 9e élément de la table
        statsCoutTotal += tableauCoutStats[nombreInput];

        const messageErreur: HTMLElement | null = document.getElementById(
            "err_" + id
        );

        messageErreur!.textContent = "";
        if (statsCoutTotal > TOTAL_STATS_MAXIMUM) {
            formValide = false;
            messageErreur!.textContent = TOTAL_COUT_DEPASSE;
        }

        if (nombreInput < STATS_MINIMUM || nombreInput > STATS_MAXIMUM) {
            formValide = false;
            messageErreur!.textContent = afficherErreurEntreDeuxNombres(
                STATS_MINIMUM,
                STATS_MAXIMUM
            );
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