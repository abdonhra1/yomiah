import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferEditCalc } from './offer-edit-calc';
import { TranslateModule } from "@ngx-translate/core";
import { PlusminusModule } from "../../components/plusminus/plusminus.module";

@NgModule({
  declarations: [
    OfferEditCalc,
  ],
  imports: [
    IonicPageModule.forChild(OfferEditCalc),
    TranslateModule.forChild(),
    PlusminusModule
  ],
  exports: [
    OfferEditCalc
  ]
})
export class OfferEditCalcModule {}
