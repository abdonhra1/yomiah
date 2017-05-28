export class OfferModel {

    $key:string;
    _id:string;
    job_title: string;
    job_details: string;
    from_time:number;
    to_time:number;
    from_time_label:string;
    to_time_label:string;
    period_hours:number;
    period_days:number;
    owner:string;
    hour_rate: number;
    payout: number;
    workers_count: number;
    paused:boolean;
    archived:boolean;
    req_after:string;
    location:any;
    loct_text:string;
    date_updated:any;
    starts_at;// TODO date !!

    constructor(){};


    static fromJsonList(array,uid=''): OfferModel[] {

        if(uid)
            return array.map(OfferModel.fromJson).filter(OfferModel.filterArchived).reverse();
        else
            return array.map(OfferModel.fromJson).filter(OfferModel.filterPaused);
    }

    static filterArchived(offer:OfferModel): boolean{
        return !offer.archived;
    }

    static filterPaused(offer:OfferModel): boolean{
        return !offer.paused;
    }

    static fromJson({$key,
        job_title,
        job_details,
        payout,
        from_time,
        to_time,
        from_time_label,
        to_time_label,
        period_hours,
        workers_count,
        owner,
        period_days,
        paused,
        req_after,
        archived,
        location,
        loct_text,
        hour_rate,
        date_updated
    }):OfferModel {
            let offer= new OfferModel();

            if($key)
                offer.$key=$key;

            offer.job_title= job_title;
            
            offer.from_time= from_time;
            offer.to_time= to_time;
            offer.from_time_label = from_time_label || null;
            offer.to_time_label = to_time_label || null;
            offer.period_hours= period_hours;
            offer.period_days= period_days;
            offer.owner= owner;
            offer.hour_rate= hour_rate || null;
            offer.payout= payout;
            offer.workers_count= workers_count;
            offer.paused= paused || null;
            offer.location= location || null;
            offer.loct_text= loct_text || null;
            offer.archived= archived || null;
            offer.req_after=req_after || null;
            offer.job_details= job_details || null;
            offer.date_updated= date_updated || null;
            return offer;
    }
}