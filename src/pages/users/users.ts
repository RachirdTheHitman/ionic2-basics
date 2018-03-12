import { Component } from '@angular/core';
import {IonicPage, NavController} from "ionic-angular";
import {UserPage} from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor (private navCtrl: NavController) {}

  onLoadUser(name: string) {
    // console.log('enter onLoadUser');
    this.navCtrl.push(UserPage, {userName: name}, {
      direction: 'forward',
      duration: 2000,
      easing: 'ease-out'
    });
  }

}
