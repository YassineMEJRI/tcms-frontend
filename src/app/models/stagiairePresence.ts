export class StagiairePresence {
  id: number;
  nom: string;
  prenom: string;
  present: boolean;

  constructor(id: number, nom: string, prenom: string, present?: boolean) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.present = present?? true;
  }
}
