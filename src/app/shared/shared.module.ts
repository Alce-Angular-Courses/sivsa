import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarDirective } from './comentar.directive';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [
    ComentarDirective,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComentarDirective,
    TruncatePipe
  ]
})
export class SharedModule { }
