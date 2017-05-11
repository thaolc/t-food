/*
* @Author: th_le
* @Date:   2017-05-11 14:54:51
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:25:47
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BlogsRoutingModule } from './blogs-routing.module';

import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent
  ],
  imports: [
    FormsModule,
    BlogsRoutingModule
  ]
})

export class BlogsModule { }