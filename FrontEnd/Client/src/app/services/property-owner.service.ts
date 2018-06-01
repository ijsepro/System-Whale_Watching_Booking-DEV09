import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { UrlService } from './url.service';

@Injectable()
export class PropertyOwnerService extends UrlService<Property_Owner> {
  
  constructor(http : HttpClient) {
    super('Property_Owner/', http);
  }

}



export interface Property_Owner {

  property_owner_id : number;
  property_owner_name : string;
  address_postal_code : string;
  address_street_and_num : string;
  address_city : string; 
  address_country : string;
  fax : string;
  email : string;
  registerd_date : string;
  username : string;
  password : string;

}

