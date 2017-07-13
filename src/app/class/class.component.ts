import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../_services/validate.service'
import { Http } from '@angular/http';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'toastr-ng2';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {
	name_class: String;
	walikelas: String;
	submitted: boolean = false;

  constructor(private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    public dataService: DataService) {}

  ngOnInit() {}

  onClassSubmit(){
    const kelas = {
      name_class: this.name_class,
      walikelas: this.walikelas,
}


}
}