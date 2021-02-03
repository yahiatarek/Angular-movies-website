import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterServiceService } from './register-service.service';
@Injectable({
  providedIn: 'root'
})
export class NoLoginOrRegisterGuard implements CanActivate {
  constructor(private _RegisterServiceService:RegisterServiceService,private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._RegisterServiceService.userCurrentData.getValue()== null){
        return true;
          }else{
          this._Router.navigate(['/movies'])  
            return false

            }  }
  
}
