import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TareasComponent,
    ListaSimpleComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule
  ]
})
export class TareasModule { }
