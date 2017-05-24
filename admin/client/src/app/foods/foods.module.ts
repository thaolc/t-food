/*
* @Author: th_le
* @Date:   2017-05-24 14:12:07
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-24 14:47:27
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FoodsComponent } from './foods.component';
import { FoodNewComponent } from './food-new/food-new.component';
import { FoodUpdateComponent } from './food-update/food-update.component';

import { FoodsRoutingModule } from './foods-routing.module';

@NgModule({
  declarations: [
    FoodsComponent,
    FoodNewComponent,
    FoodUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FoodsRoutingModule
  ],
  providers: []
})

export class FoodsModule {}