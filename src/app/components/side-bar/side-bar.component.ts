import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupeService} from "../../services/groupe.service";
import {Groupe} from "../../models/groupe";
import {HttpErrorResponse} from "@angular/common/http";
import {SeanceService} from "../../services/seance.service";
import {Seance} from "../../models/seance";
import {AuthService} from "../../services/auth.service";
import {Observable, Subject} from "rxjs";
import {Authority} from "../../models/Authority";
import {UserstagiaireService} from "../../services/userstagiaire.service";
import {Stagiaire} from "../../models/stagiaire";

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

  authority$ = new Subject<string>();

  isLoggedIn: Observable<boolean> = new Observable<boolean>();


  constructor(private groupeService: GroupeService,
              private seanceService: SeanceService,
              private authService: AuthService,
              private userstagiaireService: UserstagiaireService) {
    this.isLoggedIn = this.authService.isLoggedInAsObservable();
  }

  ngOnInit(): void {
    this.isLoggedIn.subscribe({
      next:(response: boolean) => {
        if(response){
          console.log("isLoggedIN = " + response)
          this.getAuthority();
        }
      },
      error: (err) => {
        console.log(err)
      }
    })

    this.authority$.asObservable().subscribe({
      next: (response: string)=>{
      if (response == "ROLE_FORMATEUR")
        this.getSeances();
    }
    })

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
    console.log("get seances is called")
    this.seanceService.getSeancesFormateurAuthentifie().subscribe({
      next:(response: Seance[]) =>{
        this.seances = response;
      },
      error:(err)=>{
        console.log(JSON.stringify(err));
    }
    })
  }

  private getAuthority(){
    this.authService.getAuthority().subscribe({
      next:(response: Authority)=>{
        console.log("getAuthority response = " + response.authority)
        this.authority$.next(response.authority);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  // //TODO FIX MAKE PERSON
  // private getStagiaire(){
  //   this.userstagiaireService.getAuthentificatedStagaire().subscribe({
  //     next:(response: Stagiaire) => {
  //       this.stagiaire = response;
  //     },
  //     error:(err) => {
  //       console.log(err)
  //     }
  //   })
  // }

}
