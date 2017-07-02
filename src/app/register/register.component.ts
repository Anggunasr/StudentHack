import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, RouterModule } from '@angular/router';

import { AuthService } from '../_services/auth.service';
/*import { ToastrService } from 'toastr-ng2';*/


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
	private name: string;
	private email: string;
	private pwd: string;
	private repwd: string;
	private submitted: boolean = false;

	constructor( public Auth: AuthService,
					/*toast: ToastrService,*/
					public http: Http,
					public router: Router) {}

	ngOnInit(){}
	public submit(){
		this.submitted = true;
		let creds = JSON.stringify({nama_user: this.name, email_user: this.email, password_user: this.pwd, password_lagi: this.repwd});
	}

}