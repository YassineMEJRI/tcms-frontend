import { Component, OnInit } from '@angular/core';
import {Stagiaire} from "../../models/stagiaire";
import {StagiaireService} from "../../services/stagiaire.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Formateur} from "../../models/formateur";
import {FormateurService} from "../../services/formateur.service";

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  formateurs: Formateur[] = [];
  constructor(private formateurService: FormateurService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.formateurService.getAll().subscribe({
      next: (response: Formateur[]) => {
        this.formateurs = response
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  public delete(id: number): void {
    this.formateurService.delete(id).subscribe({
      next: (response) => {
        console.log(response.message);
        this.showMessageComponent("success", "Formateur supprimé avec succés!")
        this.getAll();
      },
      error: (error) => {
        console.log(error);
        this.showMessageComponent("error", "Erreur lors de la suppression!")
        this.getAll();
      }
    });
  }

  private showMessageComponent(type: String, text: String): void{
    this.showMessage = true;
    this.messageText = text;
    this.messageType = type;
  }
}
