import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/catch';

import { FoodService } from '../shared/food.service';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-new',
  templateUrl: './food-new.component.html',
  styleUrls: ['./food-new.component.css'],
  providers: [FoodService]
})
export class FoodNewComponent implements OnInit {

	food: Food = new Food();

  constructor(private router: Router, private foodService: FoodService) { }

  ngOnInit() {
  }

  onSubmit(foodForm) {
  	this.foodService.create(this.food)
  		.subscribe(() => {
  			this.food = new Food();
  			foodForm.reset();
  		})
  }

  onReset(foodForm) {
  	this.food = new Food();
  	foodForm.reset();
  }

  // Navigate to foods list screen
  onBack() {
  	this.router.navigate(['/foods']);
  }

}
