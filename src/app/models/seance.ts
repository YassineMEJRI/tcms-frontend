import {Formateur} from "./formateur";
import {Groupe} from "./groupe";
import {Matiere} from "./matiere";

export class Seance{
  id: number = 0;
  formateur: Formateur = new Formateur();
  groupe: Groupe = new Groupe();
  matiere: Matiere = new Matiere();
}
