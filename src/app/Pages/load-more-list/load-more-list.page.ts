import { ServerDataService } from './../../Services/server-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-more-list',
  templateUrl: './load-more-list.page.html',
  styleUrls: ['./load-more-list.page.scss'],
})
export class LoadMoreListPage implements OnInit {

  page:any = 1;
  posts:any = [];

  constructor(public sd: ServerDataService) { }

  ngOnInit() {
    this.sd.loading()
    this.sd.getPosts(this.page, 20).subscribe(d=>{
      
      for(let [k,v] of Object.entries(d)){
        this.sd.getSingleUser(v.userId).subscribe(u => {
          v['user'] = u;
          this.posts.push(v)
        })
      }

      this.sd.stopLoading()
    })
  }

  loadMore(event){
    this.page += 1;
    this.sd.getPosts(this.page, 20).subscribe(d=>{

      for(let [k,v] of Object.entries(d)){
        this.sd.getSingleUser(v.userId).subscribe(u => {
          v['user'] = u;
          this.posts.push(v)
        })
      }
      event.target.complete();
    })
  }

}
