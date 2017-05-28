import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JrWorkerMng } from './jr-worker-mng';

@NgModule({
  declarations: [
    JrWorkerMng,
  ],
  imports: [
    IonicPageModule.forChild(JrWorkerMng),
  ],
  exports: [
    JrWorkerMng
  ]
})
export class JrWorkerMngModule {}
