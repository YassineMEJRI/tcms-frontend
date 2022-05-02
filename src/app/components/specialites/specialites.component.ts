import { Component, OnInit } from '@angular/core';
import {Specialite} from "../../models/specialite";
import {SpecialiteService} from "../../services/specialite.service";
import {delay, interval} from "rxjs";

@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
export class SpecialitesComponent implements OnInit {

  specialites: Specialite[] = [];
  sucess: boolean = false;
  constructor(private specialiteService: SpecialiteService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.specialiteService.getAll().subscribe({
      next: (response: Specialite[]) => {
        this.specialites = response
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  public delete(id: number): void {
    this.specialiteService.delete(id).subscribe({
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
    this.getAll();
  }

  private showSuccess(): void{
    this.sucess = true;
  }
}
