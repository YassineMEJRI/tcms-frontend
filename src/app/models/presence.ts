import {Seance} from "./seance";
import {StagiairePresence} from "./stagiairePresence";

export class Presence {
  seance: Seance;
  listePresence: StagiairePresence[];
  dateHeure: Date;

  constructor(seance: Seance, listePresence: StagiairePresence[], dateHeure: Date) {
    this.seance = seance;
    this.listePresence = listePresence;
    this.dateHeure = dateHeure;
  }
}
