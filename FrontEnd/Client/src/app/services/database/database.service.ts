import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { BadInput } from "../../common/bad-input";
import { NotFoundError } from "../../common/not-found-error";
import { AppError } from "../../common/app-error";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

export class DatabaseService {

    constructor(private base_class_url : string, private http : HttpClient) {}

    public getAll (function_url : string, options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      return this.http.get (this.base_class_url + function_url, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
      
    public insert (function_url : string, body : FormData , options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      return this.http.post (this.base_class_url + function_url, body, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
        
    public search (function_url : string, options?: {headers?: HttpHeaders; observe?: 'body'; params?: HttpParams; reportProgress?: boolean; responseType?: 'json'; withCredentials?: boolean;}) {
      return this.http.get (this.base_class_url + function_url, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
      
    public update (function_url : string, body : FormData, options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      return this.http.patch (this.base_class_url + function_url, body, options)
        .map(responce => responce)
        .catch(this.handleError);
    }
      
    public delete (function_url : string, options?: {headers?: HttpHeaders;observe?: 'body';params?: HttpParams;reportProgress?: boolean;responseType?: 'json';withCredentials?: boolean;}) {
      return this.http.delete (this.base_class_url + function_url, options)
      .map(responce => responce)
      .catch(this.handleError);
    }
      
    public check_username_unique (function_url : string, options?: {headers?: HttpHeaders; observe?: 'body'; params?: HttpParams; reportProgress?: boolean; responseType?: 'json'; withCredentials?: boolean;}) {
      return this.http.get (this.base_class_url + function_url, options)
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

