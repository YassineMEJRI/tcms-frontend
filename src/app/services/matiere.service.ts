import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Groupe} from "../models/groupe";
import {Matiere} from "../models/matiere";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiServerUrl = environment.apiBaseUrl;
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Matiere[]>{
    return this.http.get<Matiere[]>(this.apiServerUrl + "/matiere/tous")
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/matiere/supprimer/" + id);
  }

  save(matiere: Matiere): Observable<Groupe>{
    return this.http.post<Matiere>(this.apiServerUrl + "/matiere/ajouter", JSON.stringify(matiere),
      {headers: this.headers});
  }

}
