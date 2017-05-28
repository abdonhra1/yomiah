import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferApply } from './offer-apply';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    OfferApply,
  ],
  imports: [
    IonicPageModule.forChild(OfferApply),
    TranslateModule.forChild(),
  ],
  exports: [
    OfferApply
  ]
})
export class OfferApplyModule {}
