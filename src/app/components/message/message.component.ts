import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() type: String = "";
  @Input() show: boolean = false;
  @Input() message: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.show = false;
  }
}
