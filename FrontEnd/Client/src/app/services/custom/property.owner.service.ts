import { Injectable } from '@angular/core';
import { UrlService } from '../resources/url.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PropertyOwnerService {

    private url_service : UrlService;
    
    constructor(http : HttpClient){
        let class_url : string = 'Property_Owner/';
        this.url_service = new UrlService(class_url, http);
    }

    get_Property_Owners(){
        return this.url_service.getAll('get_Property_Owner');
    }
    insert_Property_Owner(data : FormData) {
        return this.url_service.insert('insert_Property_Owner', data);
    }
    search_Property_Owner(params : HttpParams) {
        return this.url_service.search('search_Property_Owner', {params : params});
    }
    update_Property_Owner(data : FormData) {
        return this.url_service.update('update_Property_Owner', data);
    }
    delete_Property_Owner(params : HttpParams){
        return this.url_service.delete('delete_Property_Owner', {params : params});
    }
    check_Property_Owner_Data_Unique(params : HttpParams){
        return this.url_service.check_username_unique('check_Property_Owner_Username_Unique', {params : params});
    }
    check_Property_Owner_Email_IfExists(params : HttpParams){
        return this.url_service.check_username_unique('check_Property_Owner_Email_IfExists', {params : params});
    }
    check_Property_Owner_username_email(params : HttpParams){
        return this.url_service.check_username_unique('check_Property_Owner_username_email', {params : params});
    }

}
