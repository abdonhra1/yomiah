import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Plusminus } from './plusminus';

@NgModule({
  declarations: [
    Plusminus,
  ],
  imports: [
    IonicPageModule.forChild(Plusminus),
  ],
  exports: [
    Plusminus
  ]
})
export class PlusminusModule {}
