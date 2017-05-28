export class OfferApplicantModel {

    $key:string;

    aplct_id: string;
    status: string;
    trans: any[];

    constructor(){};

    /*
    static fromJsonList(array,uid=''): OfferModel[] {

        if(uid)
            return array.map(OfferModel.fromJson).filter(OfferModel.filterArchived).reverse();
        else
            return array.map(OfferModel.fromJson).filter(OfferModel.filterPaused);
    }
    */

    static fromJson({$key,
        aplct_id,
        status,
        trans
    }):OfferApplicantModel {
        let offerApplicant= new OfferApplicantModel();

        if($key)
            offerApplicant.$key=$key;
            
        offerApplicant.aplct_id= aplct_id;
        offerApplicant.status = status || null;
        offerApplicant.trans = trans || [] ;
        return offerApplicant;
    }
}