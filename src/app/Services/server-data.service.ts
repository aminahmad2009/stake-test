import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {

  server:any = 'https://jsonplaceholder.typicode.com/';

  constructor(public http: HttpClient, public nav: NavController, public l: LoadingController, public t: ToastController) { }

  back(){
    this.nav.back();
  }

  next(page, data =[]){
    this.nav.navigateForward(page, {state: data})
  }

  async loading(msg ='Loading more data ...', duration= 10000){
    let a = await this.l.create({
      duration: duration,
      message: msg
    });
    a.present();
  }

  stopLoading(){
    this.l.dismiss();
  }

  async toast(msg){
    let a = await this.t.create({
      duration: 2000,
      message: msg,
      color: 'danger'
    })
    a.present();
  }

  getUsers(){
    return this.http.get(this.server + 'users');
  }

  getSingleUser(id){
    return this.http.get(this.server + 'users/' + id);
  }

  getPosts(page=1, limit=10){
    return this.http.get(this.server + 'posts/?_page=' + page + '&_limit=' + limit);
  }
}
