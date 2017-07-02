/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  data= {
  	email:'',
  	pwd:'',
  	rePwd:''
  };

  formSubmit(){
  	console.log(this.data.email);
  	}
  ngOnInit() {
  }

} */

import { Component, ViewEncapsulation } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';
import { DataService } from '../providers/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './login.component.css' ],
  templateUrl: './login.component.html'
})

export class LoginComponent{
  private email: string;
  private password: string;
  private remember_me: boolean = false;

  constructor(public title: Title, 
              public toast: ToastrService, 
              public http: Http, 
              public router: Router, 
              public dataService: DataService)
  {
    if(localStorage.getItem('token')){
      this.router.navigate(['/']);
    }
  }
  
  ngOnInit(){
    window.scrollTo(0,0);
    this.title.setTitle('Login | '+this.dataService.baseTitle);
  }

  public submit(){
     let creds = JSON.stringify({email_user: this.email, password_user: this.password, remember_me: this.remember_me});

     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     this.http.post(this.dataService.urlLogin, creds, {headers: headers})
      .subscribe(res => {
        let data = res.json();
        console.log(data);
        if(data.status){
          localStorage.setItem('token', data.token);
          this.dataService.loginState(true);
          this.router.navigate(['/user/dashboard']);
          this.toast.success(data.message, 'Success');
        }else{
          this.toast.warning(data.message, 'Failed');
        }
      }, err => {
        this.toast.error('No connection', 'Failed');
      });
  }
}

