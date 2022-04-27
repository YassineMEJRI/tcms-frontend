import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  sideBarIsOpen: boolean = false;
  @Output() toggleSideBar = new  EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.sideBarIsOpen = !this.sideBarIsOpen;
    this.toggleSideBar.emit(this.sideBarIsOpen);
  }
}
