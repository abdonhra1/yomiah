import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JrEdit } from './jr-edit';

@NgModule({
  declarations: [
    JrEdit,
  ],
  imports: [
    IonicPageModule.forChild(JrEdit),
  ],
  exports: [
    JrEdit
  ]
})
export class JrEditModule {}
