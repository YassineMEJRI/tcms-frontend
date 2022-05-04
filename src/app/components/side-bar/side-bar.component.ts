import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupeService} from "../../services/groupe.service";
import {Groupe} from "../../models/groupe";
import {HttpErrorResponse} from "@angular/common/http";
import {SpecialiteService} from "../../services/specialite.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public groupes: Groupe[] = [];
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  constructor(private groupeService: GroupeService,
              private specialiteService: SpecialiteService) {
    this.getGroupes();
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  private getGroupes() {
    this.groupeService.getAll().subscribe(
      (response: Groupe[]) => {
        this.groupes = response;
        this.getGroupeSpecialite();
      },
      (error: HttpErrorResponse) => {
        console.log(error.error)
      }
    )
  }

  private getGroupeSpecialite(){
    for (const groupe of this.groupes) {
        this.specialiteService.getSpecialite(groupe.specialite.id).subscribe({
        next: (response)=>{
          groupe.specialite = response;
        }
        }
      );
    }
  }

  closeMenu() {
    this.isOpen = false;
    this.close.emit(true);
  }
}
