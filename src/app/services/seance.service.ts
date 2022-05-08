import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Matiere} from "../models/matiere";
import {Groupe} from "../models/groupe";
import {Seance} from "../models/seance";

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private apiServerUrl = environment.apiBaseUrl;
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Seance[]>{
    return this.http.get<Seance[]>(this.apiServerUrl + "/seance/tous")
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/seance/supprimer/" + id);
  }

  save(seance: Seance): Observable<Seance>{
    return this.http.post<Seance>(this.apiServerUrl + "/seance/ajouter", JSON.stringify(seance),
      {headers: this.headers});
  }

}
