import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

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
    private flashMessage:FlashMessagesService,
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
        localStorage.setItem('token', data.token);
        this.flashMessage.show('Login Succes', {cssClass: 'alert-success', timeout: 3000});
        if (data.type == 3){
           this.router.navigate(['/teacher']);
        }else{
           this.router.navigate(['/beranda']);
        }
      }else{
          this.router.navigate(['/login']);
      }

    });
  }

}
