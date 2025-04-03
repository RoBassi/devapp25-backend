import Persona from '../model/persona';
import Genero from '../model/genero';

const personas: Persona[] = [
    {
      id_: 1,
      nombre: "Juan",
      apellido: "Pérez",
      dni: "12345678",
      fechaDeNac: new Date("1990-05-15"),
      genero: Genero.Masculino,
      donante: true,
      autos: [
        {
          id_: 11,
          marca: "Toyota",
          modelo: "Corolla",
          anio: 2020,
          patente: "ABC123",
          color: "Rojo",
          numChasis: "CHS123456",
          numMotor: "MTR789012"
        }
      ]
    },
    {
      id_: 2,
      nombre: "Laura",
      apellido: "Gómez",
      dni: "87654321",
      fechaDeNac: new Date("1985-10-20"),
      genero: Genero.Femenino,
      donante: false,
      autos: [
        {
          id_: 12,
          marca: "Ford",
          modelo: "Fiesta",
          anio: 2018,
          patente: "XYZ987",
          color: "Azul",
          numChasis: "CHS654321",
          numMotor: "MTR321654"
        }
      ]
    }
  ];

  console.log(personas);