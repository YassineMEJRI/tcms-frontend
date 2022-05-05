import { Component, OnInit } from '@angular/core';
import {Matiere} from "../../models/matiere";
import {MatiereService} from "../../services/matiere.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  matieres: Matiere[] = [];

  constructor(private matiereService: MatiereService) { }

  ngOnInit(): void {
    this.getAll();
  }


  private getAll() {
    this.matiereService.getAll().subscribe({
      next: (response: Matiere[]) => {
        this.matieres = response;
        },
      error: (error: HttpErrorResponse) => {
        console.log(error.error)
      }
    })
  }

  public delete(id: number){
    this.matiereService.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.showMessageComponent("success", "Supprimé avec succés!");
      },
      error: (error) =>{
        console.log(error);
        this.showMessageComponent("error", "Erreur lors de la suppression!")
      }
    })
  }

  private showMessageComponent(type: String, text: String): void{
    this.showMessage = true;
    this.messageText = text;
    this.messageType = type;
  }
}
