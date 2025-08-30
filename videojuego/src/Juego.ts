import { Jugador } from "./Jugador";
import { GestorDeMisiones } from "./GestorDeMisiones";

export class Juego {
  private jugador: Jugador;
  private gestorMisiones: GestorDeMisiones;

  constructor(nombreJugador: string) {
    this.jugador = new Jugador(nombreJugador, 1);
    this.gestorMisiones = new GestorDeMisiones();
  }

  // Mostrar información del jugador
  mostrarJugador(): string {
    return this.jugador.mostrarInfo();
  }

  // Listar todas las misiones disponibles
  listarMisiones(): string[] {
    return this.gestorMisiones.listarMisiones();
  }

  // Completar una misión y darle recompensa al jugador
  completarMision(index: number): string {
    const mensaje = this.gestorMisiones.completarMision(index);
    const mision = this.gestorMisiones.getMision(index);

    if (mision) {
      this.jugador.ganarExperiencia(mision.getRecompensa);
    }

    return mensaje;
  }
}
