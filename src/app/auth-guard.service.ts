import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn:'root'
})
export class AuthGaurd implements  CanActivate{

    constructor(private AuthService: AuthService, private router: Router) {
  }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> |boolean{
    if (this.AuthService.isAuthenticated()){

      return this.router.navigate(['/postItem']);

    }else {
      return this.router.navigate(['/login'])
    }


  }

}
