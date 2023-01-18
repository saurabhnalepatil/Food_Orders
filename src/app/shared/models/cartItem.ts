import { Foods } from "./food";

export class CartItem{
    constructor(food: Foods) {
        this.food = food;
        this.price;
    }
    food: Foods;
    quantity: number = 1;
    get price(): number{
        return this.food.price * this.quantity;
    }
}