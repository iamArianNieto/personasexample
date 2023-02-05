import { LoggingService } from './LoggingService.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { personasService } from './personas.service';
import { ComponentNameComponent } from './component-name/component-name.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    ComponentNameComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [LoggingService,personasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
