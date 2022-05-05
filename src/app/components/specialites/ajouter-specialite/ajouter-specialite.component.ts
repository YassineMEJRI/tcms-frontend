import { Component, OnInit } from '@angular/core';
import {Specialite} from "../../../models/specialite";
import {SpecialiteService} from "../../../services/specialite.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-ajouter-specialite',
  templateUrl: './ajouter-specialite.component.html',
  styleUrls: ['./ajouter-specialite.component.css']
})
export class AjouterSpecialiteComponent implements OnInit {
  sucess: boolean = false;

  public specialite: Specialite = new class implements Specialite {
    id: number = 0;
    titre: string = "";
    description = "";
  };

  constructor(private specialiteService: SpecialiteService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.specialiteService.save(this.specialite).subscribe(
      {
        next: (response => {this.showSuccess()}),
        error: (error => {console.log("error" + error.message)})
      }
    );
  }

  private showSuccess(): void{
    this.sucess = true;
  }
}
