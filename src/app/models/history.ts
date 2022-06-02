import {Formateur} from "./formateur";

export interface History {
  id: number;
  description: string;
  utilisateur: Formateur;
  date: Date;
}
