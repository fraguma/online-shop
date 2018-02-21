import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

import * as firebase from 'firebase';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
    this.authService.signInAnonymously();
  }

}
