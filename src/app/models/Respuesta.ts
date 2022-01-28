export class Respuesta{
    nombre:string;
    esCorrecta:boolean;

    constructor(nombre:string, esCorrecta:boolean) {
        this.nombre = nombre;
        this.esCorrecta = esCorrecta;
    }
}