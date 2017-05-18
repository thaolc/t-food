/*
* @Author: th_le
* @Date:   2017-05-11 14:56:03
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:59:40
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FormsModule,
    HomeRoutingModule
  ]
})

export class HomeModule {}