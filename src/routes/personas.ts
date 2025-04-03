import Persona from '../model/persona';
import Genero from '../model/genero';

class personasCRUD {
    private personas: Persona[] = []; // Lista de personas

    // Crear
    createPersona(id_: number, nombre: string, apellido: string, dni: string, fechaDeNac: Date, genero: Genero, donante: boolean, autos: Auto[]): Persona {
        const newPersona: Persona = { id_, nombre, apellido, dni, fechaDeNac, genero, donante, autos};
        this.personas.push(newPersona);
        return newPersona;
    }

    // Leer
    getPersona(id_: number): Persona | undefined {
        return this.personas.find(personas => personas.id_ === id_);
    }

    // Borrar
    deletePersona(id_: number): 'Persona eliminada' | 'Persona no encontrada' {
        const index = this.personas.findIndex(personas => personas.id_ === id_);

        if (index === -1) return 'Persona no encontrada';

        this.personas.splice(index, 1);
        return 'Persona eliminada';
    }
}