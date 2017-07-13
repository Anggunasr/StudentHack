import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../_services/validate.service'
import { Http } from '@angular/http';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'toastr-ng2';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {
	name_teacher: String;
	email_teacher: String;
	handphone_teacher: String;
	gender_teacher: String;
	birthday_teacher: Date;
	address_teacher: String;
	password_teacher: String;
	submitted: boolean = false;

  constructor(private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    public dataService: DataService) {}

  ngOnInit() {}

  onTeacherSubmit(){
    const teacher = {

    name_teacher: this.name_teacher,
	email_teacher: this.email_teacher,
	handphone_teacher: this.handphone_teacher,
	gender_teacher: this.gender_teacher,
	birthday_teacher: this.birthday_teacher,
	address_teacher: this.address_teacher,
	password_teacher: this.password_teacher,
}
	// Register userguru
    this.authService.registerTeacher(teacher).subscribe(data => {
      console.log(data);
      if(data.status==true){
       // this.flashMessage.show('Succes to register a teacher', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/teacher']);
      } else {
      //  this.flashMessage.show('Something went wrong');
        this.router.navigate(['/teacher']);
      }
    });


}
}