export class InternshipModel {

    $key:string;

    title: string;
    status: string;
    date_created: any;
    details: string;
    image: string;

    constructor(){};

    static fromJsonList(array): InternshipModel[] {
        return array.map(InternshipModel.fromJson);
    }


    static fromJson({$key,
        title,
        status,
        date_created,
        details,
        image
    }):InternshipModel {
        let internship= new InternshipModel();

        if($key)
            internship.$key=$key;
            
        internship.title= title;
        internship.status = status || null;
        internship.details= details || null;
        internship.date_created = date_created || [] ;
        internship.image = image || null;
        return internship;
    }
}