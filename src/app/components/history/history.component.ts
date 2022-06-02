import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";
import {History} from "../../models/history";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  listHistory: History[] = [];
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  public getHistory(){
    this.historyService.getAll().subscribe({
      next: (response: History[]) => {
        this.listHistory = response;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.error)
      }
    })
  }

}
