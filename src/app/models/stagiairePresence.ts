export class StagiairePresence {
  id: number;
  nom: string;
  prenom: string;
  absent: boolean;

  constructor(id: number, nom: string, prenom: string, absent?: boolean) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.absent = absent?? false;
  }
}
