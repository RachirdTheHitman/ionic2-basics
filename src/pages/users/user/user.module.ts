import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { UsersNewPage } from './users-new';
import {UserPage} from "./user";

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserModule {}
