import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the Offers page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class Offers {

  constructor(public navCtrl: NavController, public navParams: NavParams, translate: TranslateService) {
    translate.setDefaultLang('ar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Offers');
  }

}
