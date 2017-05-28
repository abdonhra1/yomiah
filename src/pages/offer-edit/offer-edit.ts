import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { hours_options } from '../../app_rsrs/configs';
import { OffersService } from "../../services/offers.service";
import { AngularFireDatabase } from "angularfire2/database";
import { TransHelpService } from "../../services/transHelp.service";
import { OfferModel } from "../../models/offer.model";
import { UserInfoService } from "../../services/user-info.service";
/**
 * Generated class for the OfferEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-offer-edit',
  templateUrl: 'offer-edit.html',
})

export class OfferEdit {

  offer:OfferModel;

  fromHoursOptions = hours_options;
  toHoursOptions = hours_options;
  jobTitle = '';
  periodHours= 0;
  fromTimeInit=8;
  toTime=0;
  periodDays= 1;
  hourRate=12;
  minHourRate=10;
  sugPayment= 0;
  minPayment=1;
  workersCount=1;

  $key:string;
  editMode = false;

  periodDaysList: Array<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  db: AngularFireDatabase,
  private loadingCtrl: LoadingController,
  private trnsHelp: TransHelpService,
  private modalCtrl: ModalController,
  private userInfoServ: UserInfoService,
  private offersServ: OffersService) {

  }

  ngOnInit(offer: OfferModel){
    offer = this.navParams.get('offer');
    if(offer){
      // Todo minimize and organize page probs
      this.offer=offer;
      console.log(offer);
      
      this.$key=offer.$key;
      this.jobTitle=offer.job_title;
      this.workersCount=offer.workers_count;
      this.fromTimeInit=offer.from_time;
      this.toTime=offer.to_time;
      this.sugPayment=offer.payout;
      this.periodHours=offer.to_time-offer.from_time;
      this.periodDays=offer.period_days;
      this.editMode=true;

    }
    else {
      this.offer=new OfferModel();
    }
    
    this.shaveToListHours(this.fromTimeInit);
  }

  editOffer(){

  }

  saveOffer(f: NgForm){

    let offerData = f.value;

    this.offer.job_title= offerData.job_title;
    this.offer.workers_count= this.workersCount;
    this.offer.payout= this.sugPayment;
    this.offer.from_time= offerData.from_time;
    this.offer.to_time= offerData.to_time;
    this.offer.period_hours= offerData.to_time - offerData.from_time;
    this.offer.period_days = offerData.period_days;
    this.offer.owner= this.userInfoServ.getCurrentUID();

    this.offer.from_time_label= hours_options.filter(opt=>{return opt.index == offerData.from_time})[0].label;
    this.offer.to_time_label= hours_options.filter(opt=>{return opt.index == offerData.to_time;})[0].label;

    const loading = this.loadingCtrl.create({
      content: this.trnsHelp.get('SAVE_WAIT'),
    });
    console.log(this.offer);

    loading.present();

    this.offersServ.saveOffer(this.offer,this.editMode).then(key =>{
      loading.dismiss();
      // Form Reset
      f.resetForm();
      // so back in next mean go to dashboard
      this.navCtrl.push('OfferEditDetails',{key:key});

    }).catch(error=>console.log(error));

  }


  shaveToListHours(from_val){
    this.toHoursOptions= [];// reset

    for( let opt of hours_options){
      if(opt.index > from_val ){
        this.toHoursOptions.push(opt);
      }
    }
  }

  onCalcModal(f: NgForm){
    
    f.value.workers_count=this.workersCount;
    f.value.sug_payment=this.sugPayment;
    console.log(f.value);
    const modal= this.modalCtrl.create('OfferEditCalc',f.value);
    modal.present();
    modal.onDidDismiss((paymentData:any) => {
      let sugPayment:number=paymentData.sugPayment;
      if(sugPayment>0){
        this.sugPayment=sugPayment;
      }
    });
  }

  onFromTimeChange(from_val , f: NgForm){
    this.sugPayment=0;
    this.shaveToListHours(from_val);

    if(f.value.to_time)
      this.periodHours= f.value.to_time - from_val;
  }

  onToTimeChange(val,f: NgForm) {
    this.sugPayment=0;
    this.periodHours= val- f.value.from_time;
  }

  onPeriodDaysChange(ev,f: NgForm) {
    this.sugPayment=0;
  }

  goBack() {
    this.navCtrl.pop().then().catch(error => {
      this.navCtrl.setRoot('Dashboard');
    });
  }

}
