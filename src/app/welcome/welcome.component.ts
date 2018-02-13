import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item.model';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public items: Item[] = []

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

}
