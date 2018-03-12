import { Component } from '@angular/core';
import { NavController} from "ionic-angular";
import {UserPage} from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor (private navCtrl: NavController) {}

  onLoadUser(name: string) {
    // console.log('enter onLoadUser');
    this.navCtrl.push(UserPage, {userName: name},
    //   {
    //   direction: 'forward',
    //   duration: 2000,
    //   easing: 'ease-out'
    // }
    );
  }

  ionViewCanEnter(): boolean | Promise<void> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    // return rnd > 0.5 ? true : false;
    return rnd > 0.1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000
      );
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

}
