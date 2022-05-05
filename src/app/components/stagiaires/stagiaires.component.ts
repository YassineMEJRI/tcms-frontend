import { Component, OnInit } from '@angular/core';
import {Groupe} from "../../models/groupe";
import {GroupeService} from "../../services/groupe.service";
import {Stagiaire} from "../../models/stagiaire";
import {StagiaireService} from "../../services/stagiaire.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css']
})
export class StagiairesComponent implements OnInit {

  stagiaires: Stagiaire[] = [];
  constructor(private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.stagiaireService.getAll().subscribe({
      next: (response: Stagiaire[]) => {
        this.stagiaires = response
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  public delete(id: number): void {
    this.stagiaireService.delete(id).subscribe({
      next: (response) => {
        console.log(response.status);
        this.getAll();
      },
      error: (error) => {
        console.log(error);
        this.getAll();
      }
    });
  }

}
