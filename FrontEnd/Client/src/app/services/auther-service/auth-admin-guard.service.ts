import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthAdminGuard implements CanActivate{

  constructor(private router : Router, private authService : AuthService) { }

  canActivate(){
    // if(this.authService.curruntUser && this.authService.curruntUser.admin) return true;
    if(this.authService.curruntUser && this.authService.curruntUser) return true;

    this.router.navigate(['/no-access']);
    return false;
  }

}
