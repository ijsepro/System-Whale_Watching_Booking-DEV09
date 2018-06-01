import { DatabaseService } from "../database/database.service";
import { HttpClient } from "@angular/common/http";

export class UrlService extends DatabaseService{

    constructor(class_url : string, http : HttpClient){
        let base_url = 'http://localhost/PlayGround/whalewatching/BackEnd/index.php/';
        super(base_url + class_url, http);
    }

}

