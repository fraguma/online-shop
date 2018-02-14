import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Item[] = []

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  getItemsFirebase(){
    this.items = this.dataStorageService.getItemsFromFirebase();
    console.log(this.items);
  }

}
