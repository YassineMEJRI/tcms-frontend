import { Component, OnInit } from '@angular/core';
import {SeanceService} from "../../../services/seance.service";
import {Seance} from "../../../models/seance";
import {ActivatedRoute, Router} from "@angular/router";
import {StagiaireService} from "../../../services/stagiaire.service";
import {Stagiaire} from "../../../models/stagiaire";
import {StagiairePresence} from "../../../models/stagiairePresence";
import {PresenceService} from "../../../services/presence.service";
import {StagiaireAbsence} from "../../../models/stagiaireAbsence";

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  public seance: Seance = new Seance();
  public stagiaires: Stagiaire[] = [];
  public listePresence: StagiairePresence[] = [];
  public date = new Date().toLocaleDateString();

  public listeNbAbsences = new Map<number, number>();

  constructor(private seanceService: SeanceService,
              private activatedRoute: ActivatedRoute,
              private stagiaireService: StagiaireService,
              private presenceService: PresenceService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      const seanceId = routeParams['seanceId'];
      this.stagiaires= [];
      this.listePresence= [];

    this.listeNbAbsences = new Map<number, number>();
      this.getSeance(seanceId);
      this.getStagiaires(seanceId);
      this.getNbAbsences(seanceId);
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
    this.listePresence = []
    this.stagiaires.forEach(stagiaire => {
      this.listePresence.push(new StagiairePresence(stagiaire.id, stagiaire.nom, stagiaire.prenom))
    })
  }

  togglePresent(id: number, state: boolean) {
    this.listePresence.forEach(s => {
      if(s.id == id)
        s.absent = state;
    })
  }

  enregistrer() {
    console.log(JSON.stringify(this.listePresence));
    this.presenceService.savePresenceList(this.listePresence, this.seance.id).subscribe({
      next:(()=>{
        this.showMessageComponent("success", "Liste de présence eregistrée avec succés.");
      }),
      error:((err)=>{
        console.log(JSON.stringify(err));
        this.showMessageComponent("error", "Une erreur c'est produite.")
      })
    });
  }

  private getNbAbsences(seanceId: number) {
    this.presenceService.getNbAbsencesBySeance(seanceId).subscribe({
      next:(response: StagiaireAbsence[])=>{
        this.listeNbAbsences = new Map(response.map(i => [i.stagiaireId, i.nbAbsence]));
      },
      error:(err)=>{
        console.log(JSON.stringify(err));
        this.showMessageComponent("error", "Une erreur c'est produite.")
      }
    })
  }

  private showMessageComponent(type: String, text: String): void{
    this.showMessage = true;
    this.messageText = text;
    this.messageType = type;
  }

  hideModal() {
    this.showMessage = false;
    this.router.navigate(['']);
  }
}
