import { Component, OnInit } from '@angular/core';
import {MatiereNoteAbsences} from "../../../models/MatiereNoteAbsences";
import {UserstagiaireService} from "../../../services/userstagiaire.service";
import {Stagiaire} from "../../../models/stagiaire";

@Component({
  selector: 'app-liste-matieres',
  templateUrl: './liste-matieres.component.html',
  styleUrls: ['./liste-matieres.component.css']
})
export class ListeMatieresComponent implements OnInit {

  public listeMatieres: MatiereNoteAbsences[] = [];

  public stagiaire: Stagiaire = new Stagiaire();

  constructor(private userstagiaireService: UserstagiaireService) { }

  ngOnInit(): void {
    this.getMatiereNotesAbsenceOfAuthentificatedStagiaire();
    this.getAuthentificatedStagaire();
  }

  public getMatiereNotesAbsenceOfAuthentificatedStagiaire(){
    this.userstagiaireService.getMatiereNotesAbsenceOfAuthentificatedStagiaire().subscribe({
      next:(response: MatiereNoteAbsences[]) => {
        this.listeMatieres = response;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  public getAuthentificatedStagaire(){
    this.userstagiaireService.getAuthentificatedStagaire().subscribe({
      next:(response: Stagiaire) => {
        this.stagiaire = response;
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

}
