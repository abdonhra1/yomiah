import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { UserInfoService } from "../../services/user-info.service";

/**
 * Generated class for the SignIn page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignIn {

  constructor(public navCtrl: NavController,
    private authService: AuthService,
    private userInfoServ: UserInfoService,
    public navParams: NavParams) {
  }

  goBack() {
    this.navCtrl.pop().then().catch(error => {
      this.navCtrl.setRoot('AboutApp');
    });
  }

  onSignIn(form: NgForm){
    var values=form.value;
    this.authService.signin(values.phone_num+'@yomiah.com',values.password).then(data=>{
        // TODO: retrive user info too // as promise ??
        this.userInfoServ.retriveUserByUid();
        // TODO: BETTER HANDELING HERE CUZ CUZ CUZ
        this.navCtrl.setRoot('Dashboard');
    });
  }

}
