/*
* @Author: th_le
* @Date:   2017-05-11 14:56:37
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 16:13:02
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

@NgModule({
  declarations: [
    MenuComponent,
    FoodDetailComponent
  ],
  imports: [
    FormsModule,
    MenuRoutingModule
  ]
})

export class MenuModule { }