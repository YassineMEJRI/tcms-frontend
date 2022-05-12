import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {MatiereNoteAbsences} from "../models/MatiereNoteAbsences";

@Injectable({
  providedIn: 'root'
})
export class UserstagiaireService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMatiereNotesAbsenceOfAuthentificatedStagiaire(): Observable<MatiereNoteAbsences[]>{
    return this.http.get<MatiereNoteAbsences[]>(this.apiServerUrl + "/matieres/");
  }
}
