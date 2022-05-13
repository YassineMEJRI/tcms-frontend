import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Tokens} from "../models/tokens";
import {Authority} from "../models/Authority";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;

  public isLoggedIn$ = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<Tokens>{
    let loginForm = new FormData();
    loginForm.append('username', username);
    loginForm.append('password', password);
    return this.http.post<Tokens>(this.apiServerUrl + "/login", loginForm);
  }

  public setSession(tokens: Tokens){
    if (typeof tokens.access_token === "string") {
      localStorage.setItem('access_token', tokens.access_token);
    }
    if (typeof tokens.refresh_token === "string") {
      localStorage.setItem('refresh_token', tokens.refresh_token);
    }
    this.isLoggedIn$.next(true);
  }

  public getAccessToken(): Tokens | null{
    if(localStorage.getItem('access_token') == null)
      return null;
    return {
      'access_token': localStorage.getItem('access_token'),
      'refresh_token': localStorage.getItem('access_token')
    }
  }

  public isLoggedIn(): boolean{
    return localStorage.getItem('access_token') != null;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.isLoggedIn$.next(false);
  }

  public isLoggedInAsObservable(){
    return this.isLoggedIn$.asObservable();
  }

  public getAuthority(): Observable<Authority>{
    return this.http.get<Authority>(this.apiServerUrl + "/auth/userrole");
  }
}
