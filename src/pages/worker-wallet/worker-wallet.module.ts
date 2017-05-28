import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerWallet } from './worker-wallet';

@NgModule({
  declarations: [
    WorkerWallet,
  ],
  imports: [
    IonicPageModule.forChild(WorkerWallet),
  ],
  exports: [
    WorkerWallet
  ]
})
export class WorkerWalletModule {}
