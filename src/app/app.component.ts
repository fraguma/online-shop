import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    firebase.initializeApp({
      apiKey:'AIzaSyB-35S9lzbiY_eSJw4SvcNK3r3gV1JjGTc',
      authDomain:'shop-online-angular.firebaseapp.com'
    })
  }

}
