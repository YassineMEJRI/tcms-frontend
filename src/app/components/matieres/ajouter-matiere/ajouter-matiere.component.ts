import { Component, OnInit } from '@angular/core';
import {Specialite} from "../../../models/specialite";
import {SpecialiteService} from "../../../services/specialite.service";
import {Matiere} from "../../../models/matiere";
import {MatiereService} from "../../../services/matiere.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ajouter-matiere',
  templateUrl: './ajouter-matiere.component.html',
  styleUrls: ['./ajouter-matiere.component.css']
})
export class AjouterMatiereComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  public matiere: Matiere = new Matiere(1, 30);
  public specialites: Specialite[] = []

  constructor(private matiereService: MatiereService,
              private specialiteService: SpecialiteService) { }

  ngOnInit(): void {
    this.getSpecialites();
  }

  getSpecialites(): void {
    this.specialiteService.getAll().subscribe({
      next: (response: Specialite[]) => {
        this.specialites = response
      },
      error: (error) => {
        console.log(error.getAll())
      }
    })
  }

  onSubmit(formMatiere: NgForm) {
    this.matiereService.save(this.matiere).subscribe(
      {
        next: (response => {
          this.showMessageComponent("success", "Matiere ajouté avec succés!");
          console.log("next: " + JSON.stringify(response));
          formMatiere.reset();
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
}
