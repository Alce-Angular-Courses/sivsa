import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoRefComponent } from './saludo-ref/saludo-ref.component';
import { SaludoRxComponent } from './saludo-rx/saludo-rx.component';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from '../shared/truncate.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    SaludoComponent,
    SaludoRefComponent,
    SaludoRxComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    TruncatePipe
  ]
})
export class HomeModule { }
