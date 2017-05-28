
import { Injectable } from '@angular/core';

// Do not import from 'firebase' as you'll lose the tree shaking benefits
import  firebase from 'firebase';

@Injectable()
export class AuthService {

    isAuthenticated:boolean = false;

    constructor(){}

    signup(email: string, password: string ){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signin(email: string, password: string ){
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    signout(){
        return firebase.auth().signOut();
    }

    getActiveUser(){
        return firebase.auth().currentUser;
    }

}