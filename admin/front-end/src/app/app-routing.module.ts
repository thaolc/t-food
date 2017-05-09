/*
* @Author: th_le
* @Date:   2017-05-09 14:35:46
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-09 14:42:20
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'blogs', component: BlogsComponent, data: { title: 'All blogs' } },
  { path: 'blog/new', component: BlogNewComponent, data: { title: 'Add a new blog' } },
  { path: 'blog/update', component: BlogUpdateComponent, data: { title: 'Update a blog' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}