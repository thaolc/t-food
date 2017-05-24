/*
* @Author: th_le
* @Date:   2017-05-24 14:12:46
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-24 14:36:26
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodsComponent } from './foods.component';
import { FoodNewComponent } from './food-new/food-new.component';
import { FoodUpdateComponent} from './food-update/food-update.component';

const foodsRoutes: Routes = [
  { path: 'foods', component: FoodsComponent, data: { title: 'All foods' } },
  { path: 'food/new', component: FoodNewComponent, data: { title: 'Add a new food' } },
  { path: 'food/update/:id', component: FoodUpdateComponent, data: { title: 'Update a food' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(foodsRoutes)
  ],
  exports: [ RouterModule ]
})

export class FoodsRoutingModule {}