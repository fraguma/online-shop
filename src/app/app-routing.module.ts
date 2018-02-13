import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path:'welcome', component: WelcomeComponent  },
    { path:'signin', component: SigninComponent }, 
    { path:'signup', component: SignupComponent }, 
    { path:'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }