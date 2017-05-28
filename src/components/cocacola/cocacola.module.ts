import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cocacola } from './cocacola';

@NgModule({
  declarations: [
    Cocacola,
  ],
  imports: [
    IonicPageModule.forChild(Cocacola),
  ],
  exports: [
    Cocacola
  ]
})
export class CocacolaModule {}
