import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!: Foods;
  constructor(
    private activateRoute: ActivatedRoute,
    private foodServices: FoodService,
    private cartService: CartService,
    private router: Router
  ) {


    activateRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodServices.getFoodById(params['id'])
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
