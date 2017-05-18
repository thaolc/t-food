/*
* @Author: th_le
* @Date:   2017-05-11 14:58:56
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 16:35:35
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReservationRoutingModule } from './reservation-routing.module';

import { ReservationComponent } from './reservation.component';

@NgModule({
  declarations: [
    ReservationComponent
  ],
  imports: [
    FormsModule,
    ReservationRoutingModule
  ]
})

export class ReservationModule { }