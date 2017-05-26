import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogsModule } from './blogs/blogs.module';
import { FoodsModule } from './foods/foods.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BlogsModule,
    FoodsModule,
    AppRoutingModule
  ],
  providers: [
    AppConfig
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
