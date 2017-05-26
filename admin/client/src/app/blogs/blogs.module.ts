/*
* @Author: th_le
* @Date:   2017-05-10 13:22:08
* @Last Modified by:   th_le
* @Last Modified time: 2017-05-25 13:19:59
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogsComponent } from './blogs.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogUpdateComponent } from './blog-update/blog-update.component';

import { BlogsRoutingModule} from './blogs-routing.module';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogNewComponent,
    BlogUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogsRoutingModule
  ],
  providers: []
})

export class BlogsModule {}