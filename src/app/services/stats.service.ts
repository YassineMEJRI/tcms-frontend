import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private apiServerUrl = environment.apiBaseUrl;

  private token: string = "";

  constructor(private http: HttpClient, private loginService: AuthService) {
  }

  public getStagiaresStat(): Observable<number>{
    this.getToken();
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

  private getToken(): string{
    return this.loginService.getAccessToken()?.access_token?? ""
  }

}
