import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {History} from "../models/history";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<History[]>{
    return this.httpClient.get<History[]>(this.apiServerUrl + "/admin/historique");
  }
}
