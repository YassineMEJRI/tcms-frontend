export interface Stagiaire{
    id: number;
    nom: string;
    prenom: string;
    sexe: "Homme" | "Femme";
    email: string;
    num_tel: string;
    nom_parent: string;
    num_parent: string;
    adresse: string;
}