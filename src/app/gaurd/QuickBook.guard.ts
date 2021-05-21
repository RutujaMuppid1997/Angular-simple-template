import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickBookGuard implements CanActivate {
  constructor(private router: Router,){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let auth = localStorage.getItem("auth")
      if(auth === 'true'){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
  
}
