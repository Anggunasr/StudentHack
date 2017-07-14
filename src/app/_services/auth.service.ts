import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;
  UrlKu:"http://localhost:4000";


  constructor(private http:Http) {
    this.isDev = true; // Change to false before deployment

  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/user/register', user,{headers: headers})
      .map(res => res.json());
  }

  registerStudent(user){ 
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/user/registerstudent',user,{headers:headers})
      .map(res=> res.json());
  }

  registerTeacher(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post(this.UrlKu+'/user/registerteacher',user,{headers:headers})
      .map(res=> res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:4000/user/login', user,{headers: headers})
      .map(res => {
          let user = res.json();
          console.log(user);
          return user;
      });
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/profile');
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}
