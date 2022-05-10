import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupeService} from "../../services/groupe.service";
import {Groupe} from "../../models/groupe";
import {HttpErrorResponse} from "@angular/common/http";
import {SeanceService} from "../../services/seance.service";
import {Seance} from "../../models/seance";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public groupes: Groupe[] = [];
  public seances: Seance[] = [];
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  constructor(private groupeService: GroupeService, private seanceService: SeanceService) {
    this.getSeances();
  }

  ngOnInit(): void {
  }


  private getGroupes() {
    this.groupeService.getAll().subscribe({
        next: (response: Groupe[]) => {
          this.groupes = response;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.error)
        }
      });
  }

  closeMenu() {
    this.isOpen = false;
    this.close.emit(true);
  }

  private getSeances(){
    this.seanceService.getSeancesFormateurAuthentifie().subscribe({
      next:(response: Seance[]) =>{
        this.seances = response;
      },
      error:(err)=>{
        console.log(JSON.stringify(err));
    }
    })
  }
}
