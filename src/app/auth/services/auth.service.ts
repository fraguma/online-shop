import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

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
                this.router.navigate(['/']);
            })
            .catch(error => 
            {
                alert(error.message);
            })
    }
}