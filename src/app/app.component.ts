import { Persona } from './persona.model';
import {  personasService } from './personas.service';
import { LoggingService } from './LoggingService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit{

  constructor(private LoggingService:LoggingService,private personasService:personasService) {}

  titulo = 'Listado de Personas';
  Persona:Persona[] = [];

  ngOnInit():void{
    this.Persona = this.personasService.personas;
  }



}
