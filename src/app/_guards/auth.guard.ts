import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../_services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private users : UsersService) {}
  canActivate(  
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLoggedIn()) {
      if (route.data['trackable']) {
        this.users.updateUserPage(route.data['name']);
      }
      return true;
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
