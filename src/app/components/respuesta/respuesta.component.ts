import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/Pregunta';
import { PreguntaService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  listaPreguntas: Pregunta[];
  respuestasUsuario: any[];
  constructor(private _preguntaService: PreguntaService, private _router:Router) { }

  ngOnInit(): void {
    this.listaPreguntas = this._preguntaService.getPreguntas();
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
    
  }

  volver(){
    this._preguntaService.reiniciar();
    this._router.navigate(['/dashboard'])
  }
}
