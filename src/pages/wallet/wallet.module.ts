import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Wallet } from './wallet';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    Wallet,
  ],
  imports: [
    IonicPageModule.forChild(Wallet),
    TranslateModule.forChild()
  ],
  exports: [
    Wallet
  ]
})
export class WalletModule {}
