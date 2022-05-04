import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Stagiaire} from "../models/stagiaire";
import {Observable} from "rxjs";
import {Groupe} from "../models/groupe";
import {Specialite} from "../models/specialite";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private apiServerUrl = environment.apiBaseUrl;
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Groupe[]>{
    return this.http.get<Groupe[]>(this.apiServerUrl + "/groupe/tous")
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/groupe/supprimer/" + id);
  }

  save(groupe: Groupe): Observable<Groupe>{
    return this.http.post<Groupe>(this.apiServerUrl + "/groupe/ajouter", JSON.stringify(groupe),
      {headers: this.headers});
  }
}
