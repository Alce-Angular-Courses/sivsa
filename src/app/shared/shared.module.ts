import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarDirective } from './comentar.directive';



@NgModule({
  declarations: [
    ComentarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComentarDirective
  ]
})
export class SharedModule { }
