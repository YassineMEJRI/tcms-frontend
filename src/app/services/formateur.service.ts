import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Groupe} from "../models/groupe";
import {Formateur} from "../models/formateur";

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private apiServerUrl = environment.apiBaseUrl;
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.apiServerUrl + "/formateur/tous")
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/formateur/supprimer/" + id);
  }

  save(formateur: Formateur): Observable<Formateur>{
    return this.http.post<Formateur>(this.apiServerUrl + "/formateur/ajouter", JSON.stringify(formateur),
      {headers: this.headers});
  }

}
