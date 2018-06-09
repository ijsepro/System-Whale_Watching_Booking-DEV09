import { Injectable } from '@angular/core';
import { UrlService } from '../resources-service/url.service';
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
  
  check_Property_Owner_If_Exists(params : HttpParams){
    return this.url_service.if_exists('property_Owner_If_Exists', {params : params});
  }
  
  property_Owner_Login(params : HttpParams){
    return this.url_service.login('property_Owner_Login', {params : params});
  }

}
