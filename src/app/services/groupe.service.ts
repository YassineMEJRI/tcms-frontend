import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Stagiaire} from "../models/stagiaire";
import {Observable} from "rxjs";
import {Groupe} from "../models/groupe";
import {Specialite} from "../models/specialite";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Groupe[]>{
    return this.http.get<Groupe[]>(this.apiServerUrl + "/groupe/tous")
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/groupe/supprimer/" + id);
  }
}
