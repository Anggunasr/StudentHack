import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

domain = "http://localhost:4200"

  constructor(
  	private http: Http
  ) { }

  register(user){
  	return this.http.post(this.domain+ '/register', user).map(res => res.json());
  }

}
