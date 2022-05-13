export class StagiaireNote{
  id: number;
  nom: string;
  prenom: string;
  note: number;


  constructor(id: number, nom: string, prenom: string, note: number) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.note = note;
  }
}
