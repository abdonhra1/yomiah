import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../services/auth.service";
import { UserInfoService } from "../../services/user-info.service";

/**
 * Generated class for the UserSetting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-setting',
  templateUrl: 'user-setting.html',
})
export class UserSetting {

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private authServ: AuthService,
  private userInfoServ: UserInfoService) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  signOut(){
    this.authServ.signout();
    this.userInfoServ.destroyUser();
    this.navCtrl.popToRoot();
  }
}
