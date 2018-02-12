import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

constructor(private router: Router){}

    signupUser(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => console.error('signupUser error: ', error));
        this.router.navigate(['/']);
    }

}