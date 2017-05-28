
export class UserInfoModel {

    _id:string;
    _uid:string;
    first_name: string;
    last_name: string;
    phone_num: string;
    password: string;// to do private encoded
    user_mode: string;

    constructor(){};

    fromObject(obj){

        this.first_name= obj && obj.first_name || null;
        this.last_name= obj && obj.last_name || null;
        this.phone_num= obj && obj.phone_num || null;
        this.password= obj && obj.password || null;
        this.user_mode= obj && obj.user_mode || null;
        this._id= obj && obj._id || null;
        this._uid= obj && obj._uid || null;
    }
}
