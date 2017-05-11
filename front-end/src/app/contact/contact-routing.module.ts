/*
* @Author: th_le
* @Date:   2017-05-11 14:55:41
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:33:27
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: 'contact', component: ContactComponent, data: { title: 'Liên hệ' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ContactRoutingModule { }