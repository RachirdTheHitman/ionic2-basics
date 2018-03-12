import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsersPage} from "../users/users";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //
  // constructor(public navCtrl: NavController) {
  //
  // }
  //
  // onGoToUsers() {
  //   this.navCtrl.push(UsersPage);
  // }
  // -----------        save property usrPage instead of using navCtrl

  usrPage = UsersPage;

  constructor(private navCtrl: NavController) {}

  onGoToUser() {
    this.navCtrl.push(this.usrPage)
      .then((msg) => msg ? console.log('access successful: ' + msg) : console.log('access failed: ' + msg));
  }
}
