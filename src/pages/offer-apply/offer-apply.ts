import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferModel } from "../../models/offer.model";
import { UserInfoService } from "../../services/user-info.service";
import { OfferApplicantsService } from "../../services/offer-applicants.service";
import { OfferApplicantModel } from "../../models/offer-applicant.model";


@IonicPage()
@Component({
  selector: 'page-offer-apply',
  templateUrl: 'offer-apply.html',
})
export class OfferApply {

  offer:OfferModel;
  addedBy:any;
  aplcTxt:string;
  from_time:any=[];
  to_time:any=[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userInfoServ:UserInfoService,
    private offAppServ: OfferApplicantsService
  ) { }

  ngOnInit() {
    let offer=this.navParams.get("offer");
    this.offer=offer;

    if(offer)
      this.userInfoServ.getUserById(offer.owner).then(user=>this.addedBy=user);
  }

  aplc_confirm(){
    console.log(this.aplcTxt);
    let offerApp = new OfferApplicantModel();
    offerApp.status = 'application';
    offerApp.notes = this.aplcTxt;
    this.offAppServ.saveOfferApplicant(offerApp);
  }

  goBack() {
    this.navCtrl.setRoot('Offers');
  }

}
