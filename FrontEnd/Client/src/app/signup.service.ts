import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SignupService {

  private url= 'http://localhost/Idea/Whale/BackEnd/ins';

  constructor(private http: Http) { }

  getEmail() {
    return this.http.get(this.url);
  }

}
