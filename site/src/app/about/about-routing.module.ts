/*
* @Author: th_le
* @Date:   2017-05-11 14:54:05
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:15:46
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
  { path: 'about', component: AboutComponent, data: { title: 'Về chúng tôi'} }
]

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AboutRoutingModule {}