/*
* @Author: th_le
* @Date:   2017-05-10 13:39:28
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-24 14:27:49
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';

const blogsRoutes: Routes = [
  { path: 'blogs', component: BlogsComponent, data: { title: 'All blogs' } },
  { path: 'blog/new', component: BlogNewComponent, data: { title: 'Add a new blog' } },
  { path: 'blog/update/:id', component: BlogUpdateComponent, data: { title: 'Update a blog' } }
]

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class BlogsRoutingModule {}