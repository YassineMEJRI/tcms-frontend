import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Tokens} from "../../models/tokens";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  tokens: Tokens | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.tokens = response;
        this.authService.setSession(this.tokens);
        console.log(this.tokens);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(JSON.stringify(err))
      }
    });
  }

}
