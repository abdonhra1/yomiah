import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffersClientMng } from './offers-client-mng';

@NgModule({
  declarations: [
    OffersClientMng,
  ],
  imports: [
    IonicPageModule.forChild(OffersClientMng),
  ],
  exports: [
    OffersClientMng
  ]
})
export class OffersClientMngModule {}
