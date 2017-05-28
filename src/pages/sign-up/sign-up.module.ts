import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUp } from './sign-up';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    SignUp,
  ],
  imports: [
    IonicPageModule.forChild(SignUp),
    TranslateModule.forChild()
  ],
  exports: [
    SignUp
  ]
})
export class SignUpModule {}

