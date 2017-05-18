/*
* @Author: th_le
* @Date:   2017-05-11 14:55:07
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-11 15:20:08
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const blogsRoutes: Routes = [
  { path: 'blogs', component: BlogsComponent, data: { title: 'Tin tức'} },
  { path: 'blog/:id', component : BlogDetailComponent, data: { title: 'Chi tiết tin tức' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogsRoutingModule { }