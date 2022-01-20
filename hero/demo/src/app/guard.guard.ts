import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private passData: ServicesService){}
  canActivate(){
  if(this.passData.verify()){
    return true
  }else{
    window.alert("invalid data")
    return false
 
  }
  }
}
  

