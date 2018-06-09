import { Injectable } from '@angular/core';
import { ObjectTypes } from '../../common/enums/object-types.enum';

@Injectable()
export class SharedDataService {

  private static shared_data_service: SharedDataService;
  
  private shared_date : any = null;
  private type : ObjectTypes = null;

  private constructor(){ }

  public static get Instance(){
    return this.shared_data_service || (this.shared_data_service = new this());
  }
  
  setSharedData( type : ObjectTypes, shared_date : any){
    this.type = type;
    this.shared_date = shared_date;
  }

  get SharedData() : any{
    return this.shared_date;
  }

  get Type() : ObjectTypes{
    return this.type;
  }

}
