import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "./auth.service";
import {createThrowErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = this.authService.getAccessToken()?.access_token;

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned).pipe(
        catchError((error) => {
            JSON.stringify(error.error).includes("The Token has expired on")
            this.authService.logout();
            this.router.navigate(['login'])
            return throwError(error.message);
        }));
    }
    else {
      return next.handle(req);
    }
  }
}
