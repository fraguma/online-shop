import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

import * as firebase from 'firebase';

import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../../shared/services/data-storage.service';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public token: string=null;

  constructor(private authService: AuthService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
    .then(
      response => this.authService.signinUser(email, password)
    )
    .then(
     response => {
        this.dataStorageService.saveUserOnFirebase(email, password,[new Item('', 0, '')])
          .subscribe((response: Response) =>(console.log('onSignupData() response: ', response)))
      })
      .catch(error => 
      {
          alert(error.message);
      })
  }
}
