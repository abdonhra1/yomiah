import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternshipsService } from "../../services/internships.service";
import { UserInfoService } from "../../services/user-info.service";
import { UserInfoModel } from "../../models/user-info.model";
import { FirebaseListObservable } from "angularfire2/database";
import { InternshipModel } from "../../models/internship.model";

/**
 * Generated class for the Internships page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-internships',
  templateUrl: 'internships.html',
})
export class Internships {

  userInfo: UserInfoModel;
  internships:FirebaseListObservable<InternshipModel[]>;
  
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private userInfoServ: UserInfoService,
  private internServ: InternshipsService) {
  }

  ngOnInit(){
    this.userInfoServ.getUser().then((userInfo:UserInfoModel)=>{
        this.userInfo=userInfo ;
        this.internServ.getAllInternships().then(data=>this.internships=data);
    });
  }

}
