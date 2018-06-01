import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { PropertyOwnerService } from '../custom-service/property-owner.service';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private service : PropertyOwnerService) { }

  logIn(params : HttpParams){
    return this.service.property_Owner_Login(params)
      .map(responce => {
        if(responce['status']){
          localStorage.setItem('token', responce['token']);
          return responce; 
        } 
        return responce;
      });
  }

  logOut(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return tokenNotExpired();
  }

  get curruntUser(){
    let token = localStorage.getItem('token');
    return new JwtHelper().decodeToken(token);
  }

}

