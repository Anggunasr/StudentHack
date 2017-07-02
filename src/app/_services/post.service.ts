import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) { }
  getAllPost(){
  	return this.http.get('../../../api/controllers/post.controller')
  	.map(res => res.json());
  }
}
