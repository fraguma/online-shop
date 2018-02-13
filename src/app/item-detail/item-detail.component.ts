import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/services/item.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  public id: number;
  public item: Item;

  constructor(private itemService:ItemService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['index']
        this.item = this.itemService.getItem(this.id);
      }
    );
  }
  
}
