import { Component, OnInit } from '@angular/core';
import {FormateurService} from "../../../services/formateur.service";
import {Stagiaire} from "../../../models/stagiaire";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Formateur} from "../../../models/formateur";

@Component({
  selector: 'app-ajouter-formateur',
  templateUrl: './ajouter-formateur.component.html',
  styleUrls: ['./ajouter-formateur.component.css']
})
export class AjouterFormateurComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  public formateur: Formateur = new Formateur();

  constructor(private formateurService: FormateurService) { }

  ngOnInit(): void {
  }


  onSubmit(formFormateur: NgForm) {
    this.formateurService.save(this.formateur).subscribe({
      next: (response: Formateur) => {
        console.log(response);
        this.showMessageComponent("success", "Formateur ajouté avec succés!");
        formFormateur.reset();
        this.formateur = new Formateur();
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
