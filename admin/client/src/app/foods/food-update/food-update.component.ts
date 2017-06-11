import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FoodService } from '../shared/food.service';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-update',
  templateUrl: './food-update.component.html',
  styleUrls: ['./food-update.component.css'],
  providers: [ FoodService ]
})

export class FoodUpdateComponent implements OnInit, OnDestroy {

	private sub: any;
	id: string;
	food: Food = new Food();

  constructor(private router: Router, private foodService: FoodService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	// Extract id from url
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  	// Load data to controls
  	this.loadData(this.id);
  }

 	loadData(id) {
 		this.foodService.getById(id)
 			.subscribe(food => this.food = food);
 	}

  onSubmit(foodForm) {
  	this.foodService.update(this.id, this.food)
  		.subscribe(() => {
  			this.food = new Food();
  			foodForm.reset();
  		})
  }

  onReset(foodForm) {
  	this.food = new Food();
  	foodForm.reset();
  }

  onBack() {
  	this.router.navigate(['/foods']);
  }

  ngOnDestroy() {
  	this.sub.unsubscribe();
  }

}
