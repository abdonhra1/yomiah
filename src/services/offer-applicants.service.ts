import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { UserInfoService } from "./user-info.service";
import { AppConfigService } from "./appconfig.service";
//import 'rxjs/add/operator/map';

@Injectable()
export class OfferApplicantsService {

    offerApplicants: FirebaseListObservable<any>;


    readonly DB_REF='/offer_applicants';


    constructor(private db: AngularFireDatabase,
    private userInfoServ: UserInfoService,
    private confServ: AppConfigService) {

    }


}