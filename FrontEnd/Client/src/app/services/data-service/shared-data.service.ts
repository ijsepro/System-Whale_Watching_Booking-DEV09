import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

  private shared_date : any;
  
  constructor() { }

  setSharedData(shared_date : any){
    this.shared_date = shared_date;
  }

  getSharedData(){
    return this.shared_date;
  }

}
