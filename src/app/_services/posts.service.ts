import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

   url:"http://localhost:4000";
   constructor(private http:Http) {  }

  getAllPosts(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/post/getallpost', {headers: headers})
      .map(res => res.json());
  }

  plusLike(_id){
  let headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.http.post(this.url+'/post/plusLike', _id,{headers: headers})
      .map(res => res.json());
  }
}