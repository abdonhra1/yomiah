import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutApp } from './about-app';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    AboutApp,
  ],
  imports: [
    IonicPageModule.forChild(AboutApp),
    TranslateModule.forChild()
  ],
  exports: [
    AboutApp
  ]
})
export class AboutAppModule {}
