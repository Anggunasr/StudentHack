import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService{
	public token: string;
	public loginUrl: string;
	public userdata: any;
	public id_user: number;
	public isLoggedIn = new Subject<boolean>();

	public baseUrl = 'http://localhost:4200';

	/* User */
	public urlLogin = this.baseUrl+'/api/user/login';
	public urlRegisterSR = this.baseUrl+'/api/user/register';
	public urlRegisterTeacher = this.baseUrl+'/api/user/tegisterteacher';
	public urlRegisterStudent = this.baseUrl+'/api/user/registerstudent';


	/* Teacher */
	public urlGetAllTeacher = this.baseUrl+'/api/teacher/getall';

	/* Class */
	public urlCreateClass = this.baseUrl+'/api/class/create';
	
	/* Admin */
	public urlRegisterAdmin = this.baseUrl+'/api/admin/register'; /* because cannot add the admin in mongo manually :/ */
	public urlLoginAdmin = this.baseUrl+'/api/admin/login';
	public urlShowAll = this.baseUrl+'/api/admin/showall'; /* show all school regulator */
	public urlShowSR = this.baseUrl+'/api/admin/showsr'; /* show all school regulator who don't confirmed */
	public urlConfirm = this.baseUrl+'/api/admin/confirm';

	/* Post */

	loginAnnounced$ = this.isLoggedIn.asObservable();

	constructor(public http: Http){}

	public loginState(state){
			this.isLoggedIn.next(state);
	}
}