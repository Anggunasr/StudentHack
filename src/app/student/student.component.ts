import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../_services/validate.service'
import { Http } from '@angular/http';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'toastr-ng2';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
	name_student: String;
	email_student: String;
	handphone_student: String;
	gender_student: String;
	birthday_student: Date;
	address_student: String;
	password_student: String;
	submitted: boolean = false;

  constructor(private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    public dataService: DataService) {}

  ngOnInit() {}

  onStudentSubmit(){
    const student = {

    name_student: this.name_student,
	email_student: this.email_student,
	handphone_student: this.handphone_student,
	gender_student: this.gender_student,
	birthday_student: this.birthday_student,
	address_student: this.address_student,
	password_student: this.password_student,
}
// Register userguru
    this.authService.registerStudent(student).subscribe(data => {
      console.log(data);
      if(data.status==true){
      //  this.flashMessage.show('Succes to register a student', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/student']);
      } else {
      //  this.flashMessage.show('Something went wrong');
        this.router.navigate(['/student']);
      }
    });


}
}