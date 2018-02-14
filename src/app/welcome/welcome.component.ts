import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { ItemService } from '../shared/services/item.service';
import { DataStorageService } from '../shared/services/data-storage.service'
import { Response } from '@angular/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public items: Item[] = []

  constructor(private itemService:ItemService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    
  }

  saveItemsFirebase(){
    this.dataStorageService.saveItemsOnFirebase()
    .subscribe((response: Response) =>console.log('onSaveDAta() response: ', response));
  }

}
