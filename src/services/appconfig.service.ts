import { Injectable } from "@angular/core";
import { Network } from '@ionic-native/network';
import firebase from 'firebase';

@Injectable()
export class AppConfigService {

    appConfig:boolean = false;
    isOnline:boolean = false;

    constructor(private network: Network){
        this.checkOnlineStatus();
    }

    static firetime(): any{
        return firebase.database.ServerValue.TIMESTAMP;
    }

    checkOnlineStatus():boolean {

        console.log(this.network.type);

        if(this.network.type != 'none') this.isOnline = true;

        if( !this.network.type && !navigator.onLine ) this.isOnline = false;
        
        return this.isOnline;
        /*
        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            console.log('network was disconnected :-( ');
            this.isOnline = false;
        });

        let connectSubscription = this.network.onConnect().subscribe(()=>{
            console.log('network is connected :) ');
            this.isOnline = true;
        });

        //console.log("This conn type ", this.network.type);
        if(this.network.type != 'none') this.isOnline = true;
        
        connectSubscription.unsubscribe();
        // stop disconnect watch
        disconnectSubscription.unsubscribe();
        */
    }

}