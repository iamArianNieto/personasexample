import { LoggingService } from './LoggingService.service';
import { Persona } from "./persona.model";
import { Injectable, EventEmitter } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Injectable()

export class personasService{


  personas: Persona[] = [new Persona('Juan','Perez'),new Persona('Gabi','Martinez')];

  saludar = new EventEmitter<number>();

 constructor(private LoggingService:LoggingService){}

  agregarPersona(dato: Persona){
    this.personas.push(dato);
    this.LoggingService.enviaMensajeAConsola("agregamos persona: "+ dato.nombre +" "+dato.apellido)

  }

  quitaPersona(i:number){

    this.personas.splice(-2,i-1);

    this.LoggingService.enviaMensajeAConsola("eliminamos persona: "+i)

  }

}
