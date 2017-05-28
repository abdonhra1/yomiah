import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternshipsService } from "../../services/Internships.service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private internServ: InternshipsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Internships');
  }

}
