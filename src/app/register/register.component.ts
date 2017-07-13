import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../_services/validate.service'
import { Http } from '@angular/http';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'toastr-ng2';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DataService} from '../providers/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	username_school: String;
	name_school: String;
	email_school: String;
	password_school: String;

	constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

	ngOnInit(){}
	
	onRegisterSubmit(){
    const user = {
      username_school: this.username_school,
      name_school: this.name_school,
      email_school: this.email_school,
      password_school: this.password_school
}


// Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email_school)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      if(data.status==true){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong');
        this.router.navigate(['/register']);
      }
    });

  }

}




    

    