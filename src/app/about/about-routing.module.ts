import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { BlogComponent } from './blog/blog.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
 /*  { path: '', component: AboutComponent }, */
 {
   path: '', 
   component: AboutComponent,
   children: [
     { path: '', pathMatch: 'full', redirectTo: 'nosotros' },
     { path: 'nosotros', component: NosotrosComponent }, 
     { path: 'blog', component: BlogComponent },
   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
