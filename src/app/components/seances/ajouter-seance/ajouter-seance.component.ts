import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Seance} from "../../../models/seance";
import {SeanceService} from "../../../services/seance.service";
import {FormateurService} from "../../../services/formateur.service";
import {SpecialiteService} from "../../../services/specialite.service";
import {Formateur} from "../../../models/formateur";
import {Specialite} from "../../../models/specialite";
import {Groupe} from "../../../models/groupe";
import {Matiere} from "../../../models/matiere";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-seance',
  templateUrl: './ajouter-seance.component.html',
  styleUrls: ['./ajouter-seance.component.css']
})
export class AjouterSeanceComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  public seance: Seance = new Seance();

  public formateurs: Formateur[] = [];
  public specialites: Specialite[] = [];
  public groupes: Groupe[] = [];
  public matieres: Matiere[] = [];

  public specialiteId: number = 0;

  constructor(private seanceService: SeanceService,
              private formateurService: FormateurService,
              private specialiteService: SpecialiteService) { }

  ngOnInit(): void {
    this.getFormateurs();
    this.getSpecialites();
  }

  private getFormateurs(){
    this.formateurService.getAll().subscribe({
      next: (response: Formateur[]) => {
        this.formateurs = response
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  onSubmit(formSeance: NgForm) {
    this.seanceService.save(this.seance).subscribe(
      {
        next: (response => {
          this.showMessageComponent("success", "Seance ajouté avec succés!");
          console.log("next: " + JSON.stringify(response));
          formSeance.reset();
        }),
        error: ((error) => {
          console.log(error)
          this.showMessageComponent("error", "Erreur lors de l'ajout!");
        })
      }
    );
  }

  private showMessageComponent(type: String, text: String): void{
    this.showMessage = true;
    this.messageText = text;
    this.messageType = type;
  }

  private getSpecialites(): void {
    this.specialiteService.getAll().subscribe({
      next: (response: Specialite[]) => {
        this.specialites = response
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  updateGroupesAndMatieres() {
    this.specialiteService.getGroupes(this.specialiteId).subscribe({
      next: (response: Groupe[]) => {
        this.groupes = response;
    },
    error: (error: HttpErrorResponse) => {
        console.log(error)
    }
    });

    this.specialiteService.getMatieres(this.specialiteId).subscribe({
      next: (response: Matiere[]) => {
        this.matieres = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    });
  }
}
