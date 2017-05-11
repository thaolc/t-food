/*
* @Author: th_le
* @Date:   2017-05-11 14:56:22
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:55:29
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Trang chủ' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HomeRoutingModule { }