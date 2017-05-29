import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternshipData } from './internship-data';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    InternshipData,
  ],
  imports: [
    IonicPageModule.forChild(InternshipData),
    TranslateModule.forChild()
  ],
  exports: [
    InternshipData
  ]
})
export class InternshipDataModule {}
