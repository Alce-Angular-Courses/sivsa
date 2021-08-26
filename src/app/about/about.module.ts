import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent,
    PostComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
