import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { UserInfoModel } from "../../models/user-info.model";
import { UserInfoService } from "../../services/user-info.service";
import { OffersService } from "../../services/offers.service";
import { OfferModel } from "../../models/offer.model";

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})

export class Offers {

  offers: FirebaseListObservable<OfferModel[]>;
  single_offer: FirebaseObjectObservable<any>;
  userInfo: UserInfoModel=new UserInfoModel();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    translate: TranslateService,
    private userInfoServ: UserInfoService,
    private offersServ:OffersService) {
    // this.offers = db.list('/job_offers');
  }

  showOffer(offer:OfferModel){
    console.log(offer);
  }

  applyToOffer(offer:OfferModel){
    this.navCtrl.push('OfferApply',{offer:offer});
  }

  ngOnInit(){
    this.userInfoServ.getUser().then((userInfo:UserInfoModel)=>{
        this.userInfo=userInfo ;
        this.offersServ.getUserOffers().then(data=>{
        this.offers=data;
      });
    });
  }

  add_client_offer() {

  }
  
}
