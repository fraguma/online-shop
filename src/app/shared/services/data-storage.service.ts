import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { AuthService } from '../../auth/services/auth.service'
import { ItemService } from '../services/item.service'
import { Item } from '../models/item.model';

@Injectable()
export class DataStorageService{

    private firebaseUrl = 'https://shop-online-angular.firebaseio.com/';

    constructor(private authService:AuthService, private itemService: ItemService, private http: Http){}

    saveItemsOnFirebase(){
        const token = this.authService.getToken();
        let items = this.itemService.getItems();
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
    
}