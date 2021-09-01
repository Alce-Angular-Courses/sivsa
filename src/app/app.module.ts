import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TareasService } from './services/tareas.service';
// import { HomeModule } from './home/home.module';

registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule,
    // HomeModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'},
    // {provide: TareasService, useClass: TareasService},
    // TareasService 
  ],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
