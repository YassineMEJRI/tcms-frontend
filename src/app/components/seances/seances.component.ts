import { Component, OnInit } from '@angular/core';
import {Matiere} from "../../models/matiere";
import {MatiereService} from "../../services/matiere.service";
import {HttpErrorResponse} from "@angular/common/http";
import {SeanceService} from "../../services/seance.service";
import {Seance} from "../../models/seance";

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent implements OnInit {
  public showMessage: boolean = false;
  public messageText: String = "";
  public messageType: String = "";

  seances: Seance[] = [];

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
    this.getAll();
  }


  private getAll() {
    this.seanceService.getAll().subscribe({
      next: (response: Seance[]) => {
        this.seances = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.error)
      }
    })
  }

  public delete(id: number){
    this.seanceService.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.showMessageComponent("success", "Supprimé avec succés!");
        this.getAll();
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
