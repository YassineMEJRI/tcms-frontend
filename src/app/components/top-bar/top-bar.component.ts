import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() sideBarIsOpen: boolean = false;
  @Output() toggleSideBar = new  EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public setIsOpen(close: boolean): void{
    this.sideBarIsOpen = close;
  }


  toggleMenu() {
    this.sideBarIsOpen = !this.sideBarIsOpen;
    this.toggleSideBar.emit(this.sideBarIsOpen);
  }
}
