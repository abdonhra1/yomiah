import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { InternshipModel } from "../models/internship.model";

//import 'rxjs/add/operator/map';

@Injectable()
export class InternshipsService {

    offerApplicants: FirebaseListObservable<any>;


    readonly DB_REF='/internships';


    constructor(private db: AngularFireDatabase) {

    }

    saveInternship(internship: InternshipModel): Promise<string>{

        return new Promise((resolve,reject) => {
            
            if(internship.$key){
                this.db.object(this.DB_REF+'/'+ internship.$key).update(internship).then(odata=>resolve(internship.$key));
            }
            else {
                this.db.list(this.DB_REF).push(internship).then(odata=>{
                    resolve(odata.key);
                });
            }
        });
    }


}