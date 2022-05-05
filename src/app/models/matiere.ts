import {Specialite} from "./specialite";

export class Matiere{
  id: number = 0;
  coefficient: number;
  description: string = "";
  nb_heures: number;
  nom: string = "";
  specialite: Specialite = new Specialite();

  constructor(coeff?: number, nb_heures?: number) {
    this.coefficient = coeff ?? 0;
    this.nb_heures = nb_heures ?? 0;
  }
}
