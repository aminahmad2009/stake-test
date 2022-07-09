import { ServerDataService } from './../../Services/server-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  users:any=[];
  query:any='';
  constructor(public sd: ServerDataService) { }

  ngOnInit() {
    this.sd.getUsers().subscribe(d=>{
      console.log(d)
      this.users = d;
    })
  }

  search(){
    console.log(this.query)
    this.sd.getUsers(this.query).subscribe(d=>{
      console.log(d)
      this.users = d;
    })
  }

}
