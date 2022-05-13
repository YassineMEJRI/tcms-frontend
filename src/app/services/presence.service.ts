import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {StagiairePresence} from "../models/stagiairePresence";
import {Stagiaire} from "../models/stagiaire";
import {StagiaireAbsence} from "../models/stagiaireAbsence";

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  private apiServerUrl = environment.apiBaseUrl;

  private headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private http: HttpClient) { }

  public savePresenceList(listePresence: StagiairePresence[], id: number): Observable<any>{
    return this.http.post(this.apiServerUrl + "/presence/ajouterliste/" + id, listePresence,
      {headers: this.headers});
  }

  getElimineBySeance(seanceId: number): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.apiServerUrl + "/presence/elimination/" + seanceId,
      {headers: this.headers});
  }

  getNbAbsencesBySeance(seanceId: number): Observable<StagiaireAbsence[]> {
    return this.http.get<StagiaireAbsence[]>(this.apiServerUrl + "/presence/absences/" + seanceId,
      {headers: this.headers});
  }
}
