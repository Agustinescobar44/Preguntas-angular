import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/preguntas.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent implements OnInit {
  btnString = "Aceptar"
  constructor(public _preguntaService:PreguntaService, private _router:Router) { }

  ngOnInit(): void {
  }
  siguiente(){
    switch (this.btnString) {
      case "Aceptar":
        this._preguntaService.preguntaConfirmada = true;
        if(this._preguntaService.getPreguntas().length-1 === this._preguntaService.indexPregunta) 
          this.btnString = "Finalizar";
        else 
          this.btnString = "Siguiente";

        break;
      case "Siguiente":
        this.btnString = "Aceptar";
        this._preguntaService.guardarRespuesta();

        break
      case "Finalizar":
        this._preguntaService.guardarRespuesta();
        this._preguntaService.indexPregunta = 0;
        this._router.navigate(['/respuesta']);

        break
      default:
        break;
    }
  }
}
