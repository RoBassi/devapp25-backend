import Auto from "./auto";
import Genero from "./genero";

interface Persona {
    id_: Number;
    nombre: String;
    apellido: String;
    dni: String;
    fechaDeNac: Date;
    genero: Genero;
    donante: Boolean;
    autos: Auto[];
  }

export default Persona;