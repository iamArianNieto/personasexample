import { personasService } from './../personas.service';
import { LoggingService } from './../LoggingService.service';

import { Component,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  //public nombreInput:string = '';
  //public apellidoInput:string = '';



  @ViewChild('nombreRef')  nombreInput:ElementRef;
  @ViewChild('apellidoRef')  apellidoInput:ElementRef;


  apellidoM:string;
  nombreM:string;
  texto_modal:string;

  constructor(private LoggingService:LoggingService,private personasService:personasService) {

    this.personasService.saludar.subscribe(

      (i:number) => {
        //alert("El indice es :" + i)
      this.texto_modal="Personal Eliminado :" + i;
      this.openMyDialog();
      this.LimpiarPersona()
      this.personasService.quitaPersona(i);
      }
    );

  }




  agregarPersona(){
    let personal = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);


    if(this.validarDatos(personal.nombre.toString(),personal.apellido.toString())==true){

      //this.personaCreada.emit(personal)
      this.personasService.agregarPersona(personal);
      this.texto_modal="Personal Agregado"
      this.openMyDialog();
      this.LimpiarPersona();
    }
    else{
      this.texto_modal="Por favor agrege datos al formulario"
      this.openMyDialog();

    }


  }

  LimpiarPersona(){

    this.apellidoM="";
    this.nombreM="";
  }


  validarDatos(nombre:string,apellido:string):boolean{
    let resultado:boolean = false;
    if(nombre==""){
      resultado =false;
    }
    else if (apellido==""){
      resultado =false;
    }
    else{
      resultado =true;
    }
    return resultado;
  }


    openMyDialog() {
        let myDialog:any = document.getElementById("myDialog");
        myDialog.style.display = "block";
    }

    cerrar(){

      let myDialog:any = document.getElementById("myDialog");
        myDialog.style.display = "none";
    }

}
