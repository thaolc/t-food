/*
* @Author: th_le
* @Date:   2017-05-09 14:35:46
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-10 14:13:42
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: 'Page not found' } }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}