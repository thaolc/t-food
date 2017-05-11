/*
* @Author: th_le
* @Date:   2017-05-11 14:59:20
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 16:32:41
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationComponent } from './reservation.component';

const reservationRoutes: Routes = [
  { path: 'reservation', component: ReservationComponent, data: { title: 'Đặt hàng' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(reservationRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ReservationRoutingModule { }