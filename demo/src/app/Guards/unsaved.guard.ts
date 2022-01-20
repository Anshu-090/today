import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationComponent } from '../registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<unknown> {

  // canDeactivate(component:RegistrationComponent) {
  //   if (component.fname.dirty) {
  //     return window.confirm("are you sure you want to navigate")
  //   } else {
  //     return true
    }
  }
}


