import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Stagiaire } from '../models/stagiaire';
import {Specialite} from "../models/specialite";

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private apiServerUrl = environment.apiBaseUrl;
  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });
  constructor(private http : HttpClient) { }

  public getAll(): Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(this.apiServerUrl + "/stagiaires/tous")
  }

  save(satgiaire: Stagiaire): Observable<Stagiaire>{
    return this.http.post<Stagiaire>(this.apiServerUrl + "/stagiaires/ajouter", JSON.stringify(satgiaire),
      {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/stagiaires/supprimer/" + id);
  }

  public getByGroupe(idGroupe: number): Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(this.apiServerUrl + "/groupe/" + idGroupe + "/stagiaires");
  }

  public getBySeance(idSeance: number): Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(this.apiServerUrl + "/seance/" + idSeance + "/stagiaires");
  }
}
