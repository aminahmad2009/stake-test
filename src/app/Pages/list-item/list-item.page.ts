import { ServerDataService } from './../../Services/server-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.page.html',
  styleUrls: ['./list-item.page.scss'],
})
export class ListItemPage implements OnInit {

  data:any;
  constructor(public sd: ServerDataService, public router: Router) { 
    this.data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    console.log(this.data)
  }

}
