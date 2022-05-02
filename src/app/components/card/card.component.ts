import {Component, Input, OnInit} from '@angular/core';
import {StatsService} from "../../services/stats.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() color = 'red';
  @Input() statName = '';
  @Input() link: string = '';
  stat: number = 0;

  constructor(private statsService: StatsService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.statName === 'Stagiaires') {
      this.link = "/stagiaires";
      this.getStagiairesStat();
    }
    else if(this.statName === 'Formateurs') {
      this.link = "/formateurs";
      this.getFormatuersStat();
    }
    else if(this.statName === 'Specialités') {
      this.link = "/specialites";
      this.getSpecialitesStat();
    }
    else if(this.statName === 'Groupes') {
      this.link = "/groupes";
      this.getGroupesStat();
    }
  }

  private getStagiairesStat(): void {
    this.statsService.getStagiaresStat().subscribe(
      (response: number) => {
        this.stat = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }
  private getFormatuersStat(): void {
    this.statsService.getFormateursStat().subscribe(
      (response: number) => {
        this.stat = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

  private getGroupesStat(): void {
    this.statsService.getGroupesStat().subscribe(
      (response: number) => {
        this.stat = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

  private getSpecialitesStat(): void {
    this.statsService.getSpecialitesStat().subscribe(
      (response: number) => {
        this.stat = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message)
      }
    )
  }

  onClick() {
    this.router.navigate(['/stagiaires']);
  }
}
