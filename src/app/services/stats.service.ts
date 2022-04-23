import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getStagiaresStat(): Observable<number>{
    return this.http.get<number>(this.apiServerUrl + "/stagiaires/stat")
  }

  public getFormateursStat(): Observable<number>{
    return this.http.get<number>(this.apiServerUrl + "/formateur/stat")
  }

  public getGroupesStat(): Observable<number>{
    return this.http.get<number>(this.apiServerUrl + "/groupe/stat")
  }

  public getSpecialitesStat(): Observable<number>{
    return this.http.get<number>(this.apiServerUrl + "/specialite/stat")
  }
}
