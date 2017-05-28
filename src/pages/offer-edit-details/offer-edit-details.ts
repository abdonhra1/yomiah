import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { OffersService } from "../../services/offers.service";
import { OfferModel } from "../../models/offer.model";
import { FirebaseObjectObservable } from "angularfire2/database";
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-offer-edit-details',
  templateUrl: 'offer-edit-details.html',
})
export class OfferEditDetails {

  offer:OfferModel;
  offerObserv:FirebaseObjectObservable<OfferModel>;

  from_time:any=[];
  to_time:any=[];

  works:boolean;

  currLoct:any;
  marker:any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    private offersServ: OffersService,
    private geolocation: Geolocation,
    private popoverCtrl: PopoverController) {
  }
  

  ngOnInit(){

    //this.offersServ.retriveOfferByKey(this.navParams.get('key'));
    this.offersServ.getByKey(this.navParams.get('key')).then(obj=>{
      this.offerObserv=obj;
      this.offerObserv.subscribe(offer=>{
        console.log(offer.location);
        this.offer=offer;
        this.works=!offer.paused;
        if(offer.location){
          this.currLoct = offer.location;
          this.marker = offer.location;
        }
        else {
          this.geolocation.getCurrentPosition()
          .then(
            location => {
              console.log(location);
              this.currLoct= {lat:location.coords.latitude, lng:location.coords.longitude};
              this.marker= {lat:location.coords.latitude, lng:location.coords.longitude};
            }
          ).catch(error=>console.error(error));
        }
      });
    });
    // Now you saved the offer get it then from service ( online / storage)

  }

  editOffer(offer){
    this.navCtrl.push('OfferEdit',{offer:offer});
  }

  onLocate(){

  }
  
  onSetMarker(event: any) {
    this.marker.lat = event.coords.lat;
    this.marker.lng= event.coords.lng;
    this.offerObserv.update({location:this.marker});
  }

  textChanged(val,prop_changed){
    this.offerObserv.update({ [prop_changed]: val });
  }

  toggleChange(){
    this.offer.paused=!this.works;
    //console.log(this.offer);
    this.offerObserv.update({paused:this.offer.paused});
  }
  
  goBack() {
    this.navCtrl.setRoot('Dashboard');
  }

}
