export class InternshipModel {

    $key:string;

    title: string;
    status: string;
    date_created: any;
    notes: string;

    constructor(){};

    static fromJsonList(array): InternshipModel[] {
        return array.map(InternshipModel.fromJson);
    }


    static fromJson({$key,
        title,
        status,
        date_created,
        notes
    }):InternshipModel {
        let internship= new InternshipModel();

        if($key)
            internship.$key=$key;
            
        internship.title= title;
        internship.status = status || null;
        internship.notes= notes || null;
        internship.date_created = date_created || [] ;
        return internship;
    }
}