import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../services/auth.service";
import { UserInfoModel } from "../../models/user-info.model";
import { UserInfoService } from "../../services/user-info.service";

/**
 * Generated class for the JobRequestsList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-job-requests-list',
  templateUrl: 'job-requests-list.html',
})
export class JobRequestsList {

  userInfo:UserInfoModel=new UserInfoModel();

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private userInfoServ: UserInfoService,
  private authServ: AuthService) {
  }

  ngOnInit(){
    this.userInfoServ.getUser().then(data=>{
      this.userInfo= data;
    });
    
    //var user=this.authServ.getActiveUser();
    //this.userInfo=
  }

}
