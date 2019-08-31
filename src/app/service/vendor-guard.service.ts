import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApplicationStateService } from './application-state.service';

@Injectable({
  providedIn: 'root'
})
export class VendorGuardService implements CanActivate {

  constructor(private appState: ApplicationStateService) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.appState.userType == "vendor") {
      return true;
    } else {
      return false;      
    }
  }
}
