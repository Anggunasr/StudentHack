import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

post: any =[];
  constructor(private postService: PostService) { }

  ngOnInit() {
  this.postService.getAllPost().subscribe(post => {
  	this.post= post;
  });
  }

}
