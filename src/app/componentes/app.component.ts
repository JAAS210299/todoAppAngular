import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tipoTarea } from '../modelos/tipoTarea';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Atributos
  arrayObjetos: tipoTarea[] = []
  // Métodos
  constructor(){
    if (localStorage.getItem("lista") == null || localStorage.getItem("lista") == "[]") {
      alert("No existe almacenamiento previo en el navegador y se procederá a crearlo ahora por primera vez" );  
      this.arrayObjetos = [{ id: 0, title: "Tarea 1",descripcion: "Está es la tarea 1", estadoCompletado: false }];
      localStorage.setItem("lista", JSON.stringify( this.arrayObjetos)); 
    } 
    else {
      alert( "Si existe almacenamiento previo en el navegador y se procederá a cargarlo");
      if (typeof(localStorage.getItem("lista"))=='string'){
        let variableString:any = localStorage.getItem("lista");
        this.arrayObjetos = JSON.parse(variableString);
      }
    }
  }
  completarTarea(evento:any):void{}
  editarTarea(posicionTr:number):void{}
  borrarTarea(posicion:number):void{}
}
