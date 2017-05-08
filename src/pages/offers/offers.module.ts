import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Offers } from './offers';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    Offers,
  ],
  imports: [
    IonicPageModule.forChild(Offers),
    TranslateModule.forChild()
  ],
  exports: [
    Offers
  ]
})
export class OffersModule {}
