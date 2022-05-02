import { Component, OnInit } from '@angular/core';
import {Specialite} from "../../models/specialite";
import {SpecialiteService} from "../../services/specialite.service";
import {Groupe} from "../../models/groupe";
import {GroupeService} from "../../services/groupe.service";

@Component({
  selector: 'app-groupes',
  templateUrl: './groupes.component.html',
  styleUrls: ['./groupes.component.css']
})
export class GroupesComponent implements OnInit {
  groupes: Groupe[] = [];
  sucess: boolean = false;
  constructor(private groupeService: GroupeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.groupeService.getAll().subscribe({
      next: (response: Groupe[]) => {
        this.groupes = response
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public delete(id: number): void {
    this.groupeService.delete(id).subscribe({
      next: (response) => {
        console.log(response.status);
        this.showSuccess();
        this.getAll();
      },
      error: (error) => {
        console.log(error);
        this.getAll();
      }
    });
  }

  private showSuccess(): void{
    this.sucess = true;
  }
}
