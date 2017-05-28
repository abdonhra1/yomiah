import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dashboard } from './dashboard';
import { TranslateModule } from "@ngx-translate/core";
import { PlusminusModule } from "../../components/plusminus/plusminus.module";

@NgModule({
  declarations: [
    Dashboard,
  ],
  imports: [
    IonicPageModule.forChild(Dashboard),
    TranslateModule.forChild(),
    PlusminusModule
  ],
  exports: [
    Dashboard
  ]
})
export class DashboardModule {}
