import { Injectable } from '@angular/core';
import { Pregunta } from '../models/Pregunta';
import { Respuesta } from '../models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta;
  deshabilitarBtn=true;
  preguntaConfirmada = false;
  respuestasUsuario: Respuesta[] = [];

  preguntas: Pregunta[] = [
    {descripcion:"Cual es la capital de argentina" , respuestas: [
      {nombre: "Buenos Aires", esCorrecta:true},
      {nombre: "Paris", esCorrecta:false},
      {nombre: "Santa Fe", esCorrecta:false},
      {nombre: "lima", esCorrecta:false},
    ]},
    {descripcion:"Cual es la capital de Francia" , respuestas: [
      {nombre: "Roma", esCorrecta:false},
      {nombre: "Paris", esCorrecta:true},
      {nombre: "Dublin", esCorrecta:false},
      {nombre: "Atenas", esCorrecta:false},
    ]},
    {descripcion:"Cual es la capital de Egipto" , respuestas: [
      {nombre: "Londres", esCorrecta:false},
      {nombre: "Berlin", esCorrecta:false},
      {nombre: "El Cairo", esCorrecta:true},
      {nombre: "Casablanca", esCorrecta:false},
    ]}
  ]
  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }
  guardarRespuesta(){
    this.indexPregunta++;
    this.respuestasUsuario.push(this.opcionSeleccionada)
    this.opcionSeleccionada = null;
    this.preguntaConfirmada= false;
    this.deshabilitarBtn = true;
  }
  reiniciar(){
    this.respuestasUsuario = []
    this.opcionSeleccionada = null;
    this.preguntaConfirmada= false;
    this.deshabilitarBtn = true;
  }
}
