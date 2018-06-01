import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UrlService<T> extends DatabaseService<T>{

  constructor(url, http : HttpClient) {
    super('http://localhost/PlayGround/WhaleWaching/BackEnd/index.php/' + url , http);
  }

}
