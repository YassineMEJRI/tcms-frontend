import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Specialite} from "../models/specialite";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private  http: HttpClient) { }

  public getSpecialite(id: number): Observable<Specialite>{
    return  this.http.get<Specialite>(this.apiServerUrl + "/specialite/" + id);
  }

  public getAll(): Observable<Specialite[]>{
    return  this.http.get<Specialite[]>(this.apiServerUrl + "/specialite/tous");
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(this.apiServerUrl + "/specialite/supprimer/" + id);
  }
}
