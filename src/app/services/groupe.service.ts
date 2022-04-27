import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Stagiaire} from "../models/stagiaire";
import {Observable} from "rxjs";
import {Groupe} from "../models/groupe";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getGroupes(): Observable<Groupe[]>{
    return this.http.get<Groupe[]>(this.apiServerUrl + "/groupe/tous")
  }
}
