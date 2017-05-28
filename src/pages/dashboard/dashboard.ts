import { Component, animate, transition, trigger, state, style } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { OffersService } from "../../services/offers.service";
import { FirebaseListObservable } from "angularfire2/database";
import { OfferModel } from "../../models/offer.model";
import { UserInfoService } from "../../services/user-info.service";
import { UserInfoModel } from "../../models/user-info.model";
import { TransHelpService } from "../../services/transHelp.service";


//import { OfferModel } from "../../models/offer.model";
/**
 * Generated class for the Dashboard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('flyOutIn', [
      state('out', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(0)', opacity: 0}))
      ])
    ]),
    trigger('easeInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(150%, 0, 0)'
      })),
      transition('in => out', animate('300ms ease-in')),
      transition('out => in', animate('300ms ease-out')),
      transition('* => void', [
      animate('300ms 10 ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
    ])
  ]
})
export class Dashboard {

  offers:FirebaseListObservable<OfferModel[]>;
  userInfo: UserInfoModel=new UserInfoModel();
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private userInfoServ: UserInfoService,
    private toastCtrl: ToastController,
    private trans: TransHelpService,
    private offersServ:OffersService) {}

  ngOnInit(){
    this.userInfoServ.getUser().then((userInfo:UserInfoModel)=>{
      this.userInfo=userInfo;
        this.offersServ.getUserOffers(userInfo._uid).then(data=>{
        this.offers=data;
      });
    });
  }

  showOffer(offer:OfferModel){
    this.navCtrl.push('OfferEditDetails',{key:offer.$key});
  }

  changePaused(offer,paused:boolean){
    this.offers.update(offer.$key,{paused:paused});
    let state= paused? this.trans.get('PAUSE'):this.trans.get('UN_PAUSE');
    this.toastCtrl.create({message:this.trans.get('DONE')+' '+state, duration:1000}).present();
  }

  archive(offer){
    this.offers.update(offer.$key,{archived:true});
    this.toastCtrl.create({message:this.trans.get('MESSAGE.ARCHIVE_OFFER'), duration:1000}).present();
  }

  swipeStatus(ev, offer){

    /*if( (ev.direction == 4 && ! offer.swiped) ||
        (ev.direction == 2 && offer.swiped) ){
      offer.swiped = !offer.swiped;
    }*/
    offer.swiped = !offer.swiped;
  }

  editOffer(offer){
    console.log(offer);
    this.navCtrl.push('OfferEdit',{offer:offer});
  }
}
