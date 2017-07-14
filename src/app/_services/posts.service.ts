import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get('/api/getallpost')
      .map(res => res.json());
  }

  //like
  plusLike() {
    return this.http.post('/api/plusLike')
      .map(res => res.json());
  }
  
/*  addComment(username,commentcontent){
  	const postData = {
  		username=username,
  		commentcontent = commentcontent
  	}
  	return this.http.post('/api/getallpost', postData)
      .map(res => res.json());
  }*/
}
