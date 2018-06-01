  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
  import { Observable } from 'rxjs/Observable';
  import * as $ from 'jquery';
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/observable/throw';
  import { AppError } from '../common/app-error';
  import { NotFoundError } from '../common/not-found-error';
  import { BadInput } from '../common/bad-input';
  
  @Injectable()
  export class DatabaseService <T> {
  
    constructor(private url : string, private http : HttpClient) {}
  
    public getAll (url : string, options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) : Observable<T[]> {
      return this.http.get <T[]> (this.url + url, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
      
    public insert (url : string, body , options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      return this.http.post(this.url + url, body, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
        
    public search (url : string, options?: {headers?: HttpHeaders; observe?: 'body'; params?: HttpParams; reportProgress?: boolean; responseType?: 'json'; withCredentials?: boolean;}) : Observable <T> {
      return this.http.get <T> (this.url + url, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
      
    public update (url : string, body: T | null, options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      // return this.http.patch (this.url + url, body, options)
      //   .map(responce => responce)
      //   .catch(this.handleError);
        
      $.post(this.url + url, body, function (responce){
        return responce;
      });
    }
    
    public delete (url : string, options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      return this.http.delete (this.url + url, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
  
    private handleError(error : Response) {
      if(error.status === 400)
        return Observable.throw(new BadInput(error.json()));
      if(error.status === 404)
        return Observable.throw(new NotFoundError());
         
      return Observable.throw(new AppError(error));
    }
  
  }
  
