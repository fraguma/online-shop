import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

public token: string=null;

constructor(private router: Router){}

    signupUser(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                alert('User created successfully');
                this.router.navigate(['/']);
            })
            .catch(error => 
            {
                alert(error.message);
            })
    }

    signinUser(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => this.token = token);
                this.router.navigate(['/']);
            })
            .catch(error => 
            {
                alert(error.message);
            })
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((token: string) => this.token = token)
            .catch(error => console.log('getToken() error: ', error));
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }
}