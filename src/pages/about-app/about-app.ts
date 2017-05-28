import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoService } from "../../services/user-info.service";

/**
 * Generated class for the AboutApp page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about-app',
  templateUrl: 'about-app.html',
})
export class AboutApp {

  slides = [
    {
      title: "Welcome to the Docs ",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> <div class='ar'>8750 ج بدل من 10500 ج للرك </div>",
      image: "assets/img/ica-slidebox-img-2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private userInfoServ: UserInfoService) {
  }

  ngOnInit() {

  }
}
