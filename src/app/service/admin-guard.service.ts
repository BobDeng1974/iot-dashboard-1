import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApplicationStateService } from './application-state.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private appState: ApplicationStateService, private router: Router) { }


  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(this.appState.userType == "admin"){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
}
