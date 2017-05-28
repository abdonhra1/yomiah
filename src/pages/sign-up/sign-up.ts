import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { UserInfoModel } from "../../models/user-info.model";
import { AuthService } from "../../services/auth.service";
import { UserInfoService } from "../../services/user-info.service";

/**
 * Generated class for the SignUp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUp {

  userMode:string="worker";// TODO change according to user app about selection !!
  
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private userInfoServ: UserInfoService,
  private alertCtrl: AlertController,
  private authServ: AuthService) {
  }

  goBack() {
    this.navCtrl.pop();
  }

  onSignUp(form: NgForm){

    var userInfo=new UserInfoModel();
    userInfo.fromObject(form.value);
    this.authServ.signup(userInfo.phone_num+'@yomiah.com',userInfo.password)
    .then(
      data => {
        console.log(data);
        //loading.dismiss();
        userInfo._uid= data.uid;
        this.userInfoServ.newUser(userInfo);
        this.userInfoServ.retriveUserByUid();
        this.navCtrl.popToRoot();
      }
    )
    .catch(
      error => {
        console.error(error);
        //loading.dismiss();
        this.alertCtrl.create({
          title: 'Signing up failed !',
          message: error.message,
          buttons: ['Ok']
        }).present();
      } 
    );
    // chaining , error handling
    
    // Now log user in
  }

}
