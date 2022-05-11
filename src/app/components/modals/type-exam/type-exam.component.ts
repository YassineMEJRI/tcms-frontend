import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-type-exam',
  templateUrl: './type-exam.component.html',
  styleUrls: ['./type-exam.component.css']
})
export class TypeExamComponent implements OnInit {
  @Input() show: boolean = false;
  customType: string = "";
  typeExamen: string = "";

  @Output() type = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  hideModal() {
    this.show = false;
  }

  onSubmit() {
    let chosen = this.typeExamen=='autre'?this.customType:this.typeExamen;
    if(chosen != "") {
      this.type.emit(chosen);
      this.hideModal();
    }
  }
}
