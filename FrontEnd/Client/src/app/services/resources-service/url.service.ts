import { Injectable } from '@angular/core';
import { DatabaseService } from "../database-service/database.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UrlService extends DatabaseService{

    constructor(class_url : string, http : HttpClient){
        let base_url = 'http://localhost/PlayGround/WhaleWatchingGit2/System-Whale_Watching_Booking-DEV09/BackEnd/index.php/';
        super(base_url + class_url, http);
    }

}