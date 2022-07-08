import { ServerDataService } from './../../Services/server-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.page.html',
  styleUrls: ['./list-posts.page.scss'],
})
export class ListPostsPage implements OnInit {

  page:any = 1;
  posts:any = [];
  moreNext:boolean = true;

  constructor(public sd: ServerDataService) { }

  ngOnInit() {
    this.loadData();
  }

  log(){
    console.log('click')
  }

  next(){
    this.page+=1;
    this.loadData();
  }

  prev(){
    this.page-=1;
    this.loadData();
  }

  loadData(){
    this.sd.getPosts(this.page, 10).subscribe((d:any)=>{
      console.log(d)
      if(!d.length){
        this.page = this.page - 1;
        this.sd.toast('No more posts available ...');
        this.moreNext = false;
      }else{
        this.moreNext = true;
        this.posts = d;
        for(let [k,v] of Object.entries(d)){
          this.sd.getSingleUser(v['userId']).subscribe(u => {
            v['user'] = u;
            this.posts.push(v)
          })
        }
      }

    })
  }
}
