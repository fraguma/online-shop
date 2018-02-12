import { Item } from "../models/item.model";

export class ItemService{
    private items : Item[] =[
        new Item(
            'Item numero 1',
            20.50,
            ''
        ), 
        new Item(
            'Item numero 2',
            34.90,
            ''
        ), 
        new Item(
            'Item numero 3',
            47.50,
            ''
        )
    ]

    getItems(){
        this.items.slice();
    }
}