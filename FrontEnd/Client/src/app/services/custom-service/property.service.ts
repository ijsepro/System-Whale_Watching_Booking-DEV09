import { Injectable } from '@angular/core';
import { UrlService } from '../resources-service/url.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PropertyService {

  private url_service : UrlService;
    
  constructor(http : HttpClient){
      let class_url : string = 'Property/';
      this.url_service = new UrlService(class_url, http);
  }

  get_Properties(){
    return this.url_service.getAll('get_Properties');
  }

  insert_Property(data : FormData) {
    return this.url_service.insert('insert_Property', data);
  }

  search_Property(params : HttpParams) {
    return this.url_service.search('search_Property', {params : params});
  }

  update_Property(data : FormData) {
    return this.url_service.update('update_Property', data);
  }
  
  delete_Property(params : HttpParams){
    return this.url_service.delete('delete_Property', {params : params});
  }

}
