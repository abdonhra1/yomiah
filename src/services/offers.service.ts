import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { OfferModel } from "../models/offer.model";
import { UserInfoService } from "./user-info.service";
import { Storage } from '@ionic/storage';
import { AppConfigService } from "./appconfig.service";
import 'rxjs/add/operator/map';

@Injectable()
export class OffersService {

    offers: FirebaseListObservable<any>;
    single_offer: FirebaseObjectObservable<any>;

    offerModel:OfferModel;
    offersList:OfferModel[]=[];

    readonly DB_REF='/offers';
    readonly STORAGE_PATH='user_offers';


    constructor(private db: AngularFireDatabase,
    private userInfoServ: UserInfoService,
    private confServ: AppConfigService,
    private storage: Storage) {
        //this.offers = db.list(this.DB_REF);
    }


    // elmafrood return new offer 3and elmakwagy
    saveOffer( offer:OfferModel , editMode:boolean = false) : Promise<string>{ //


        let offerKey = offer.$key;
        delete offer.$key;
        
        // Insert to db
        // TODO: offline !!

        return new Promise((resolve,reject) => {
            
            if(editMode){
                //console.log("db path => ",this.DB_REF+'/'+ offerKey);
                this.db.object(this.DB_REF+'/'+ offerKey).update(offer).then(odata=>resolve(offerKey));
            }
            else {
                /*
                offer.owner=this.userInfoServ.getCurrentUID();
                let offer:OfferModel=OfferModel.fromJson(data);
                console.log(offer);
                */
                
                this.db.list(this.DB_REF).push(offer).then(odata=>{
                    resolve(odata.key);
                });
            }
        });
    }

    getUserOffers(uid:string=''):Promise<FirebaseListObservable<OfferModel[]>>{
        let isOnline=this.confServ.checkOnlineStatus();
        this.offersList=[];

        console.log('owner',uid);

        return new Promise((resolve,reject) => {

            let queryobj={};

            if(uid)
                queryobj= {query:{orderByChild: 'owner',equalTo: uid}};
            else
                queryobj= {query:{limitToLast:10}}
                //queryobj={ query: {orderByChild: 'paused',equalTo: uid} };
            console.log("queryobj ",queryobj);

            if(isOnline){
                resolve( this.db.list(this.DB_REF, queryobj).map(arr=> OfferModel.fromJsonList(arr,uid)) );
            }
            else{
                this.storage.keys().then(keys=>{
                    console.log(keys);
                });
            }
        });
    }

    getByKey($key):Promise<FirebaseObjectObservable<OfferModel>>{
        return new Promise((resolve,reject) => {
            resolve(this.db.object(this.DB_REF+'/'+$key).map(OfferModel.fromJson));
        });
    }

    /*
    getUserOffers():Promise<OfferModel[]>{
        let isOnline=this.confServ.checkOnlineStatus();
        this.offersList=[];
        return new Promise((resolve,reject) => {
            if(isOnline){
                this.db.list(this.DB_REF).subscribe(snaps=>{
                    snaps.forEach(obj=>{
                        let offer= new OfferModel();
                        offer.fromObject(obj);
                        console.log(offer);
                        this.offersList.push(offer);
                    });
                });
                resolve(this.offersList);
            }
            else{
                this.storage.keys().then(keys=>{
                    console.log(keys);
                });
            }
        });
    }

    retriveOfferByKey(key:string): Promise<OfferModel>{

        console.log(key);
        return new Promise((resolve,reject) => {
            this.storage.get(this.STORAGE_PATH + '/' + key).then(data=>{
                if(! data){
                    // GET from DB
                    this.db.object(this.DB_REF + '/' +key).subscribe(snap=>{
                        // store it ?
                        this.storage.set(this.STORAGE_PATH + '/' + key,snap).then();
                    });
                    
                }
            });
        });
    }
    */
}