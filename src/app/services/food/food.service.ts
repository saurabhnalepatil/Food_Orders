import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number):Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 }
    ];
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 370,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Chiken Tandur',
        cookTime: '45-50',
        price: 1399,
        favorite: true,
        origins: ['Italy','China','India'],
        star: 4.8,
        imageUrl: '/assets/food2.jpg',
        tags: ['FastFood', 'Tandur','Chicken', 'Lunch'],
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '10-15',
        price: 125,
        favorite: false,
        origins: ['Italy','Japan','India'],
        star: 3.0,
        imageUrl: '/assets/food3.jpg',
        tags: ['FastFood', 'Burger', 'BreakFast','SnackTime'],
      },
      {
        id: 4,
        name: 'Chicken Leg Piece',
        cookTime: '25-35',
        price: 480,
        favorite: true,
        origins: ['India', 'China', 'Italy','America'],
        star: 4.2,
        imageUrl: '/assets/food4.jpg',
        tags: ['FastFood', 'legPic', 'Chicken', 'Lunch'],
      },
      {
        id: 5,
        name: 'Soop Vegitable',
        cookTime: '20-25',
        price: 380,
        favorite: false,
        origins: ['India','Italy','Rusia'],
        star: 2.5,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood', 'BreakFast', 'Soop', 'Lunch'],
      },
      {
        id: 6,
        name: 'Vegitable Pizza',
        cookTime: '15-20',
        price: 260,
        favorite: false,
        origins: ['Italy','India'],
        star: 3.5,
        imageUrl: '/assets/food6.jpg',
        tags: ['FastFood','Pizza','BreakFast', 'Lunch'],
      },
      {
        id: 7,
        name: 'paneer masala',
        cookTime: '25-30',
        price: 340,
        favorite: false,
        origins: ['India','England'],
        star: 4.8,
        imageUrl: '/assets/food7.jpg',
        tags: ['FastFood', 'Paneer', 'Vegitable', 'Lunch'],
      },
      {
        id: 8,
        name: 'Fish',
        cookTime: '30-35',
        price: 650,
        favorite: true,
        origins: ['India','Italy','China'],
        star: 4.0,
        imageUrl: '/assets/food8.jpg',
        tags: ['FastFood', 'Fish', 'Lunch'],
      },
      {
        id: 9,
        name: 'Chiken Birayani',
        cookTime: '30-40',
        price: 420,
        favorite: true,
        origins: ['China','India'],
        star: 4.8,
        imageUrl: '/assets/food9.jpg',
        tags: ['FastFood', 'Birayani', 'Chicken', 'Lunch'],
      },
      {
        id: 10,
        name: 'Chiken Burger',
        cookTime: '15-25',
        price: 230,
        favorite: false,
        origins: ['Italy','India'],
        star: 4.1,
        imageUrl: '/assets/food10.jpg',
        tags: ['FastFood', 'Burger', 'Chicken', 'BreakFast'],
      },
      {
        id: 11,
        name: 'french fries',
        cookTime: '5-10',
        price: 120,
        favorite: true,
        origins: ['India','Us','Japan'],
        star: 3.8,
        imageUrl: '/assets/food11.jpg',
        tags: ['FastFood', 'FrenchFries', 'BreakFast', 'Snaks'],
      }
    ];
  }
}
