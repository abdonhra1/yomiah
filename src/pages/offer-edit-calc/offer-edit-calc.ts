import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-offer-edit-calc',
  templateUrl: 'offer-edit-calc.html',
})
export class OfferEditCalc {

  sugPayment= 0;
  periodHours=0;
  periodDays=0;
  minPayment=0;
  hourRate=12;
  minHourRate=10;
  workersCount=0;


  constructor(public navCtrl: NavController,
    private viewCtrl:ViewController ,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {

    let data_obj=this.navParams.data
    this.periodDays=data_obj.period_days;
    this.workersCount=data_obj.workers_count;
    this.periodHours=data_obj.to_time-data_obj.from_time;
    
    if(data_obj && data_obj.sug_payment){
      this.sugPayment=data_obj.sug_payment;
    } else {
      this.changeSugPayment();
    }
    
  }

  changeSugPayment(){

    let minHours= (this.periodHours>4)?this.periodHours:4;
    this.minPayment=minHours*10*this.periodDays;

    this.sugPayment=this.periodHours*this.hourRate*this.periodDays;
    if(this.sugPayment < this.minPayment){
      this.sugPayment= this.minPayment;
    }
  }

  onClose() {
    this.viewCtrl.dismiss({sugPayment:this.sugPayment});
  }

}
