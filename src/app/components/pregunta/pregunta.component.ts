import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/Pregunta';
import { Respuesta } from 'src/app/models/Respuesta';
import { PreguntaService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listaPreguntas: Pregunta[];
  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listaPreguntas = this.preguntaService.getPreguntas();
  }

  obtenerPregunta(){
    return this.listaPreguntas[this.preguntaService.indexPregunta].descripcion;
  }
  seleccionarRespuesta(respuesta:Respuesta, index: number){
    if(this.preguntaService.preguntaConfirmada) return 
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false; 
  }
  respuestaSeleccionada(respuesta:Respuesta){
    //respuesta seleccionada y no confirmada
    if(this.preguntaService.opcionSeleccionada !== respuesta) return

    if(!this.preguntaService.preguntaConfirmada) return "active"
    else{
      //respuesta correcta
      if(this.preguntaService.opcionSeleccionada.esCorrecta)return "list-group-item-success"
      //respuesta incorrecta
      else return "list-group-item-danger"
    } 
    
  }
  iconCorrecta(respuesta:Respuesta){
    return this.preguntaService.opcionSeleccionada === respuesta &&
            this.preguntaService.preguntaConfirmada &&
            this.preguntaService.opcionSeleccionada.esCorrecta
  }
  iconIncorrecta(respuesta:Respuesta){
    return this.preguntaService.opcionSeleccionada === respuesta &&
            this.preguntaService.preguntaConfirmada &&
            !this.preguntaService.opcionSeleccionada.esCorrecta
  }
}
