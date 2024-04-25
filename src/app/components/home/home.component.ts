import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private fs: FoodService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLocaleLowerCase().includes(params['searchItem'].toLocaleLowerCase()));
      else if (params['tag'])
        this.foods=this.fs.getAllFoodByTag(params['tag'])
      else
        this.foods = this.fs.getAll(); //done

    })
  }
}
