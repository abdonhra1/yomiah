import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferEdit } from './offer-edit';
import { TranslateModule } from "@ngx-translate/core";
import { PlusminusModule } from "../../components/plusminus/plusminus.module";

@NgModule({
  declarations: [
    OfferEdit,
  ],
  imports: [
    IonicPageModule.forChild(OfferEdit),
    TranslateModule.forChild(),
    PlusminusModule
  ],
  exports: [
    OfferEdit
  ]
})
export class OfferEditModule {}
