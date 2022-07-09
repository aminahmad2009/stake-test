import { ServerDataService } from './../../Services/server-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.page.html',
  styleUrls: ['./user-posts.page.scss'],
})
export class UserPostsPage implements OnInit {

  posts:any=[];
  userId:any;
  user:any;
  constructor(public sd: ServerDataService, public router: Router) { 
    this.user = this.router.getCurrentNavigation().extras.state;
    this.userId = this.user['id'];
  }

  ngOnInit() {
    this.sd.getUserPosts(this.userId).subscribe(d=>{
      console.log(d)
      for(let [k,v] of Object.entries(d)){
        v['user'] = this.user;
        this.posts.push(v);
      }
    })
  }

}
