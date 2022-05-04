import { Component, OnInit } from '@angular/core';
import {Specialite} from "../../../models/specialite";
import {Groupe} from "../../../models/groupe";
import {GroupeService} from "../../../services/groupe.service";
import {SpecialiteService} from "../../../services/specialite.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-groupe',
  templateUrl: './ajouter-groupe.component.html',
  styleUrls: ['./ajouter-groupe.component.css']
})
export class AjouterGroupeComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  public error: boolean = false;
  public groupe: Groupe = new Groupe();
  public specialites: Specialite[] = []

  constructor(private groupeService: GroupeService,
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

  onSubmit() {
    this.groupeService.save(this.groupe).subscribe(
      {
        next: (response => {
          this.showMessageComponent("success", "Groupe ajouté avec succés!")
          console.log("next: " + JSON.stringify(response))
        }),
        error: ((error: HttpErrorResponse) => {
          if (error.error === "org.springframework.dao.DataIntegrityViolationException: nom_groupe_ne_peut_pas_etre_dupliqué")
            this.showMessageComponent("error", "Nom de groupe existe déja et doit être unique!");
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
