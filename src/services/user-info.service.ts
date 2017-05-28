
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

// Do not import from 'firebase' as you'll lose the tree shaking benefits
import  firebase from 'firebase';
import { UserInfoModel } from "../models/user-info.model";

@Injectable()
export class UserInfoService {

    readonly DB_REF= '/users_info';
    readonly USERINFO_STORAGE_PATH= 'logged_in_user_info';

    userInfo:UserInfoModel = new UserInfoModel();// Initial with empty

    constructor(private storage: Storage) {}

    newUser(user: UserInfoModel){
        var ref = firebase.database().ref(this.DB_REF);
        return ref.push(user);
    }

    destroyUser(){
        this.storage.remove(this.USERINFO_STORAGE_PATH);
    }

    getUser() : Promise<UserInfoModel> {
        // TODO get from service as current user if no then get from storage
        return new Promise((resolve,reject) => {
            this.storage.get(this.USERINFO_STORAGE_PATH).then(data=>{
                //console.log(data);
                this.userInfo.fromObject(data);
                resolve(this.userInfo);
            });
        });
    }

    getCurrentUID(){
        // NOPE just the current user id not auth id !!!
        return firebase.auth().currentUser.uid;
    }

    getUserById(uid:string) : Promise<any> {
        /*
        this.db.list(this.DB_REF,{query:{orderByChild:'_uid',equalTo:uid}}).subscribe(data=>{
            console.log(data);
        });
        */
        return new Promise((resolve,reject) => {
            firebase.database().ref(this.DB_REF).orderByChild('_uid')
            .equalTo(uid)
            .once('child_added').then(snap => {
                //console.log(snap.child(snap.key).val());
                resolve( snap.val() ); 
            });
        });
    }

    // TODO use promise !!!
    retriveUserByUid()  {
        var user=firebase.auth().currentUser;

        firebase.database().ref(this.DB_REF).orderByChild('_uid')
        .equalTo(user.uid)
        .once('child_added').then(snap =>{
            //If you use => fat arrows, the binding is done for you in ionic2
            //var key = snap.key;
            var info = snap.val();

            //console.log(key,info);
            this.userInfo.fromObject(info);
            this.storage.set(this.USERINFO_STORAGE_PATH,this.userInfo);
        });
    }
}