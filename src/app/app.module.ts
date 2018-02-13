import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component'
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/services/auth.service';
import { ItemService } from './shared/services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule
  ],
  providers: [AuthService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
