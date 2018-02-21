import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

public token: string=null;

constructor(private router: Router){}

    signupUser(email:string, password:string){
        return new Promise((resolve, reject) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                resolve('done');
                alert('User created successfully');
            })
            .catch(error => 
            {
                alert(error.message);
                reject('error');
            })
        );
    }

    signinUser(email:string, password:string){
        return new Promise((resolve, reject) =>
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => this.token = token);
                this.router.navigate(['/']);
                resolve('done');
            })
            .catch(error => 
            {
                alert(error.message);
                reject('error');
            })
        );
    }

    getToken() { 
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token)
            .catch(error => console.log('getToken() error: ', error));
        return this.token;
    }

    isAuthenticated() {
        if(!firebase.auth().currentUser) return false
        if(firebase.auth().currentUser.isAnonymous){
            return false
        }
        else{
            return true
        }
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    signInAnonymously(){
        firebase.auth().signInAnonymously()
        .catch(error => 
        {
            alert(error.message);
        })
    }
}