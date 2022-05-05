import {Specialite} from "./specialite";

export class Matiere{
  id: number = 0;
  coefficient: number = 0;
  description: string = "";
  nb_heures: number = 0;
  nom: string = "";
  specialite: Specialite = new Specialite();
  constructor() {
  }
}
