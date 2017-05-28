import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferEditDetails } from './offer-edit-details';
import { TranslateModule } from "@ngx-translate/core";
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    OfferEditDetails,
  ],
  imports: [
    IonicPageModule.forChild(OfferEditDetails),
    TranslateModule.forChild(),
    AgmCoreModule,
  ],
  exports: [
    OfferEditDetails
  ]
})
export class OfferEditDetailsModule {}
