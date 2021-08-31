import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { PostComponent } from './post/post.component';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CoreModule } from '../core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AboutComponent,
    PostComponent,
    BlogComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    NgbModule,
    FontAwesomeModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
