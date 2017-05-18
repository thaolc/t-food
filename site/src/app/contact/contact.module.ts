/*
* @Author: th_le
* @Date:   2017-05-11 14:55:29
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:48:33
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module'

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    FormsModule,
    ContactRoutingModule
  ]
})

export class ContactModule { }