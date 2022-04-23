import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Stagiaire } from '../models/stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getStagiaires(): Observable<Stagiaire[]>{
    return this.http.get<Stagiaire[]>(this.apiServerUrl + "/stagiaires/tous")
  }
}
