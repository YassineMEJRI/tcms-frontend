import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../services/seance.service";
import {Seance} from "../../../models/seance";
import {ActivatedRoute} from "@angular/router";
import {StagiaireService} from "../../../services/stagiaire.service";
import {Stagiaire} from "../../../models/stagiaire";
import {StagiairePresence} from "../../../models/stagiairePresence";
import {Presence} from "../../../models/presence";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {

  public seance: Seance = new Seance();
  public stagiaires: Stagiaire[] = [];
  public listePresence: StagiairePresence[] = [];
  public date = new Date();

  constructor(private seanceService: SeanceService, private activatedRoute: ActivatedRoute, private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      const seanceId = routeParams['seanceId'];
      this.getSeance(seanceId);
      this.getStagiaires(seanceId);
    });
  }

  public getStagiaires(id: number){
    this.stagiaireService.getBySeance(id).subscribe({
      next: (response: Stagiaire[]) => {
        this.stagiaires = response;
      },
      error: (error) => {
        console.log(JSON.stringify(error));
      }
    })
  }

  private async getSeance(seanceId: number) {
    this.seanceService.getSeance(seanceId).subscribe({
      next: (response: Seance) => {
        this.seance = response;
      },
      error: (err) => {
        console.log(JSON.stringify(err))
      }
    });
  }

  marquerPresence() {
    this.stagiaires.forEach(stagiaire => {
      this.listePresence.push(new StagiairePresence(stagiaire.id, stagiaire.nom, stagiaire.prenom))
    })
  }

  togglePresent(id: number, state: boolean) {
    this.listePresence.forEach(s => {
      if(s.id == id)
        s.present = state;
    })
  }

  enregistrer() {
    let presence = new Presence(this.seance, this.listePresence, this.date);
    console.log(presence);
  }
}
