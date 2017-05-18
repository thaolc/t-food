/*
* @Author: th_le
* @Date:   2017-05-11 14:56:54
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 16:08:19
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const menuRoutes: Routes = [
  { path: 'menu', component: MenuComponent, data: { title: 'Thực đơn'} },
  { path: 'food/:id', component: FoodDetailComponent, data: { title: 'Chi tiết món ăn'} }
]

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MenuRoutingModule { }