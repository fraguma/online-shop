import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { AuthService } from '../../auth/services/auth.service'
import { ItemService } from '../services/item.service'
import { Item } from '../models/item.model';
import { User } from '../models/user.model';

@Injectable()
export class DataStorageService{

    private firebaseUrl = 'https://shop-online-angular.firebaseio.com/';

    constructor(private authService:AuthService, private itemService: ItemService, private http: Http){}

    saveItemsOnFirebase(){
        const token = this.authService.getToken();
        let items = this.itemService.getItems();
        console.log(items)
        return this.http.put(this.firebaseUrl + 'items.json?auth=' + token, items)
    }

    getItemsFromFirebase(){
        const token = this.authService.getToken();
        this.http.get(this.firebaseUrl + 'items.json?auth=' + token)
            .map((response:Response) => {
                console.log(response.json())
                let items: Item[]= response.json()
                return items;
        })
        return []
    }

    saveUserOnFirebase(email:string, password:string, listItems:Item[]){
        const token = this.authService.getToken();
        let user:User=new User(email, password,listItems);
        return this.http.post(this.firebaseUrl + 'users.json?auth=' + token, user)
    }   
}