import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignIn } from './sign-in';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    SignIn,
  ],
  imports: [
    IonicPageModule.forChild(SignIn),
    TranslateModule.forChild()
  ],
  exports: [
    SignIn
  ]
})
export class SignInModule {}
