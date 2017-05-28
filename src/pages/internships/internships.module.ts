import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Internships } from './internships';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    Internships,
  ],
  imports: [
    IonicPageModule.forChild(Internships),
    TranslateModule.forChild()
  ],
  exports: [
    Internships
  ]
})
export class InternshipsModule {}
