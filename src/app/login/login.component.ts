import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email_school: String;
  password_school: String;

  constructor(
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email_school: this.email_school,
      password_school: this.password_school
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

}
