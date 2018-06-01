export class SharedDataService {

  private shared_date : any;
  private static shared_data_service: SharedDataService;

  private constructor(){ }

  public static get Instance(){
    return this.shared_data_service || (this.shared_data_service = new this());
  }
  
  setSharedData(shared_date : any){
    this.shared_date = shared_date;
  }

  getSharedData() : any{
    return this.shared_date;
  }

}
