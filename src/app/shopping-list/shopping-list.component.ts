import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Item } from '../shared/models/item.model';

import {Response} from '@angular/http'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = []
  result;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  getItemsFirebase(){
    this.dataStorageService.getItemsFromFirebase();
   }

   getUsersFirebase(){
    this.dataStorageService.getUsersFromFirebase();
   }

   getUsersStoraged() {
    this.result = this.dataStorageService.getUsersFromFirebaseNoSubscribe()
      .subscribe((response: Response) => {
        const data = response.json();
        console.log(data);
    });
  }

}
