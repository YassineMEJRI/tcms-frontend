import {Groupe} from "./groupe";
import {Specialite} from "./specialite";

export class Stagiaire{
    id: number = 0;
    nom: string = "";
    prenom: string = "";
    sexe: number = 0;
    email: string = "";
    num_tel: string = "";
    nom_parent: string = "";
    num_parent: string = "";
    adresse: string = "";
    groupe: Groupe = new Groupe();
    specialite: Specialite = new Specialite();
    constructor() {
    }
}
