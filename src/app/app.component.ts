import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import firebase from 'firebase';
import { environment } from '../app_rsrs/env';
import { AuthService } from "../services/auth.service";
import { UserInfoService } from "../services/user-info.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  isAuthenticated:boolean= false;
  rootPage:any="Dashboard";
  rootForUnreg="AboutApp";
  userInfo:any;

  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
  statusBar: StatusBar,
  splashScreen: SplashScreen,
  private menuCtrl: MenuController,
  private authServ: AuthService,
  private userInfoServ:UserInfoService,
  translate: TranslateService) {

    // Init firebase
    firebase.initializeApp(environment.fbconfig);


    firebase.auth().onAuthStateChanged(userObserv =>{

      var was_auth = this.authServ.isAuthenticated;
      // Debending on restoring app state not some remote login
      // TODO: mish sa7 keda
      
        if(userObserv){
            //this.nav.setRoot('Offers');
            this.isAuthenticated= true;
            this.authServ.isAuthenticated= true;
        }
        else {
          if(was_auth){
            console.log("Logged Out");
            this.isAuthenticated= false;
            this.authServ.isAuthenticated=false;
            this.nav.setRoot(this.rootForUnreg);
          }
        }
    });

    // get user

    this.userInfoServ.getUser().then( userInfo =>{
      console.log(userInfo);
      // TODO change to uid
      if( ! userInfo || ! userInfo._uid){
          //this.navCtrl.setRoot('AboutApp');
          this.rootPage=this.rootForUnreg;
          // TODO dashboard is about app emped or ngif
      }
      else {
        this.userInfo=userInfo;
        //this.rootPage="Dashboard";
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      translate.setDefaultLang('ar');
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.menuCtrl.close();
    this.nav.setRoot(page);
  }

  translate(key){
    console.log(key);
  }

}
