import { Component, OnInit } from '@angular/core';
import {MatiereNoteAbsences} from "../../../models/MatiereNoteAbsences";
import {UserstagiaireService} from "../../../services/userstagiaire.service";

@Component({
  selector: 'app-liste-matieres',
  templateUrl: './liste-matieres.component.html',
  styleUrls: ['./liste-matieres.component.css']
})
export class ListeMatieresComponent implements OnInit {

  public listeMatieres: MatiereNoteAbsences[] = [];

  constructor(private userstagiaireService: UserstagiaireService) { }

  ngOnInit(): void {
    this.getMatiereNotesAbsenceOfAuthentificatedStagiaire();
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

}
