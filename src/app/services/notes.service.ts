import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {StagiaireNote} from "../models/stagiaireNote";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public saveListeNotes(seanceId: number, listeNotes: StagiaireNote[], typeExam: string):Observable<any>{
    return this.http.post(this.apiServerUrl + "/note/ajouterListe/" + seanceId, {typeExam, listeNotes})
  }
}
