import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserInfoService } from "./user-info.service";
import { AppConfigService } from "./appconfig.service";
import { OfferApplicantModel } from "../models/offer-applicant.model";
//import 'rxjs/add/operator/map';

@Injectable()
export class OfferApplicantsService {

    offerApplicants: FirebaseListObservable<any>;


    readonly DB_REF='/offer_applicants';


    constructor(private db: AngularFireDatabase,
    private userInfoServ: UserInfoService,
    private confServ: AppConfigService) {

    }

    saveOfferApplicant(offApp: OfferApplicantModel): Promise<string>{
        offApp.date_created = AppConfigService.firetime();
        console.log(offApp);
        return new Promise((resolve,reject) => {
            
            if(offApp.$key){
                this.db.object(this.DB_REF+'/'+ offApp.$key).update(offApp).then(odata=>resolve(offApp.$key));
            }
            else {
                this.db.list(this.DB_REF).push(offApp).then(odata=>{
                    resolve(odata.key);
                });
            }
        });
    }


}