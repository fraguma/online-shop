import {Item} from './item.model'

export class User{
    constructor(
        public email: string,
        public password: string,
        public items: Item[]
    ){}
}