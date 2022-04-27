import {Component, Input, OnInit} from '@angular/core';
import {StatsService} from "../../services/stats.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() color = 'red';
  @Input() statName = '';
  stat: number;

  constructor(private statsService: StatsService) {
    this.stat = 0;
  }

  ngOnInit(): void {
    if(this.statName === 'Stagiaires')
      this.getStagiairesStat();
    else if(this.statName === 'Formateurs')
      this.getFormatuersStat();
    else if(this.statName === 'Specialités')
    this.getSpecialitesStat();
    else if(this.statName === 'Groupes')
    this.getGroupesStat();
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
    console.log(this.statName);
  }
}
