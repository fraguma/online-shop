import { Item } from "../models/item.model";
import { Injectable } from "@angular/core";

export class ItemService{
    private items : Item[] =[
        new Item(
            'Item numero 1',
            20.50,
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kjHgbf9k2cnWJjJFOzi6qjompnNU-0UKwOsCZ6AgzFILkJxK'
        ), 
        new Item(
            'Item numero 2',
            34.90,
            'https://i2.linio.com/p/e7ad556f25504c845047bd9a43e511ef-product.jpg'
        ), 
        new Item(
            'Item numero 3',
            47.50,
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pXbsRVQucubrHz-7CZAwzpWFRESCMVHSX6y7e0sxkZKBZEDh'
        ),
        new Item(
            'Item numero 4',
            19.90,
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BL4YQd-J_hJGsqdiDTs83e4SMYXFs-4IZtTpPSHt9Hs4RW9rNg'
        )
    ]

    getItems(){
        return this.items.slice();
    }
}