import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component'
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/services/auth.service';
import { ItemService } from './shared/services/item.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { DataStorageService } from './shared/services/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    WelcomeComponent,
    ShoppingListComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule
  ],
  providers: [AuthService, ItemService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
