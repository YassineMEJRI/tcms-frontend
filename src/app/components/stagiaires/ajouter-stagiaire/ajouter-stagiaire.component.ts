import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../../../models/stagiaire";
import {Specialite} from "../../../models/specialite";
import {Groupe} from "../../../models/groupe";
import {StagiaireService} from "../../../services/stagiaire.service";
import {GroupeService} from "../../../services/groupe.service";
import {SpecialiteService} from "../../../services/specialite.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ajouter-stagiaire',
  templateUrl: './ajouter-stagiaire.component.html',
  styleUrls: ['./ajouter-stagiaire.component.css']
})
export class AjouterStagiaireComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  public stagiaire: Stagiaire = new Stagiaire();
  public specialites: Specialite[] = [];
  public groupes: Groupe[] = [];

  constructor(private stagiaireService: StagiaireService,
              private groupeService: GroupeService,
              private specialiteService: SpecialiteService) { }

  ngOnInit(): void {
    this.getSpecialites();
  }

  getSpecialites(): void {
    this.specialiteService.getAll().subscribe({
      next: (response: Specialite[]) => {
        this.specialites = response
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  getGroupesBySpecialite(specId: number){
    this.specialiteService.getGroupes(specId).subscribe({
      next: (response: Groupe[]) => {
        this.groupes = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    })
  }

  onSubmit(formStagiaire: NgForm) {
    this.stagiaireService.save(this.stagiaire).subscribe({
      next: (response: Stagiaire) => {
        console.log(response);
        this.showMessageComponent("success", "Stagiaire ajouté avec succés!");
        formStagiaire.reset();
        this.stagiaire = new Stagiaire();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        this.showMessageComponent("error", "Erreur lors de l'ajout!");
      }
    })
  }

  private showMessageComponent(type: String, text: String): void{
    this.showMessage = true;
    this.messageText = text;
    this.messageType = type;
  }

}
