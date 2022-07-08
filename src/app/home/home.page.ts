import { Component } from '@angular/core';
import { ServerDataService } from '../Services/server-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public sd: ServerDataService) {

  }
}
