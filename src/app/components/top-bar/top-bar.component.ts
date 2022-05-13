import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() sideBarIsOpen: boolean = false;
  @Output() toggleSideBar = new  EventEmitter<boolean>();

  isLoggedIn: Observable<boolean> = new Observable<boolean>();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedInAsObservable();
  }

  public setIsOpen(close: boolean): void{
    this.sideBarIsOpen = close;
  }


  toggleMenu() {
    this.sideBarIsOpen = !this.sideBarIsOpen;
    this.toggleSideBar.emit(this.sideBarIsOpen);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }
}
