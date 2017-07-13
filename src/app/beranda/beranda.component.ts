import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

	messageClass;
	message;
	newPost = false;
	loadDash = false;

  constructor() { }

  newPostDash(){
  	this.newPost = true;
  }

  reloadDash(){
  	this.loadDash = true;

  	//get all post
  	setTimeout(() =>{
  		this.loadDash = false;
  	}, 3000);
  }

  draftComment(){
  	
  }

  ngOnInit() {
  }

}
