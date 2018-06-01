import { Injectable } from '@angular/core';
import { UrlService } from '../resources/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {

  private url_service : UrlService;
    
    constructor(http : HttpClient){
        let class_url : string = 'Customer/';
        this.url_service = new UrlService(class_url, http);
    }

    insert_Client(data : FormData) {
        // return this.url_service.insert('insert_customer', data);
        return this.url_service.insert('login', data);
    }

}
