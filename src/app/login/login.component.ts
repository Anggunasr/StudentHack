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
  username: String;
  password: String;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }
   
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.succes){
        localStorage.setItem('token', data.token);
       // this.flashMessage.show('Login Succes', {cssClass: 'alert-success', timeout: 3000});
        if (data.type == 3){
           this.router.navigate(['/student']);
        }else{
         // this.flashMessage.show('still failed:/', {cssClass: 'alert-danger', timeout: 3000});

        }
      }else{
          this.router.navigate(['/login']);
      }

    });
  }

}
