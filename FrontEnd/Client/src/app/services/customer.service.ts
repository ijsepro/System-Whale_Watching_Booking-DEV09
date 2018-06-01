import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class CustomerService {

  private url= 'localhost://';

  constructor(private http: Http) {

  }
  registerCustomer(formdata){

    return this.http.post(this.url, formdata);
  }


}
