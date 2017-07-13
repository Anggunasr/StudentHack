import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../_services/validate.service'
import { Http } from '@angular/http';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'toastr-ng2';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
	name_parent: String;
	student_parent: String;
	email_parent: String;
	handphone_parent: String;
	address_parent: String;
	password_parent: String;
	
	submitted: boolean = false;

  constructor(private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    public dataService: DataService) {}

  ngOnInit() {}

  onParentSubmit(){
    const parent = {
  
    name_parent: this.name_parent,
	student_parent: this.student_parent,
	email_parent: this.email_parent,
	handphone_parent: this.handphone_parent,
	address_parent: this.address_parent,
	password_parent: this.password_parent,
}



}
}