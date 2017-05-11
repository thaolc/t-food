/*
* @Author: th_le
* @Date:   2017-05-11 14:53:43
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:13:06
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    FormsModule,
    AboutRoutingModule
  ]
})

export class AboutModule { }