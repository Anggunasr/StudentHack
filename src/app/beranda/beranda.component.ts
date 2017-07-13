import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { PostsService } from './_services/posts.service';


@Component({
  selector: 'beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

	messageClass;
	message;
  username;
  post: false;
	loadDash = false;
  processing = false;
  postData;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private postsService : PostsService
  ) { }

  reloadDash(){
  	this.loadDash = true;
    this.getAllPosts();
  	//get all post
  	setTimeout(() =>{
  		this.loadDash = false;
  	}, 3000);
  }

  getAllPosts(){
    this.postsService.getAllPosts().subscribe(data =>{
      this.postdata = data.posts;
    })
  }
  plusLike(){
    this.postService.plusLike.subscribe(data=>{
      this.getAllPosts();
    })
  }

  draftComment(){
  	
  }

  cancel(){
    window.location.reload();
  }

  submitted(){
    this.processing = true;
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile =>{
      this.username = profile.user.username;
    })
  }

}
