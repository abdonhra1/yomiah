import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSetting } from './user-setting';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    UserSetting,
  ],
  imports: [
    IonicPageModule.forChild(UserSetting),
    TranslateModule.forChild()
  ],
  exports: [
    UserSetting
  ]
})
export class UserSettingModule {}
