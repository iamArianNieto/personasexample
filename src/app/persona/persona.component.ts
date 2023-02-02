import { personasService } from './../personas.service';
import { Persona } from './../persona.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  @Input() persona:Persona;
  @Input() i:number;


  constructor(private personasService:personasService){}

  emitirSaludo(){
  this.personasService.saludar.emit(this.i+1);

  }

}
