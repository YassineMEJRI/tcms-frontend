import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './models/stagiaire';
import { StagiaireService } from './services/stagiaire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public stagiaires: Stagiaire[] = [];

  constructor(private stagiaireService: StagiaireService){}
  ngOnInit() {
    this.getStagiaires();
  }

  public getStagiaires(): void{
    this.stagiaireService.getStagiaires().subscribe(
      (response: Stagiaire[]) => {
        this.stagiaires = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }
}
