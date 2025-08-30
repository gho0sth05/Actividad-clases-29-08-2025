export class Jugador {
  private nombre: string;
  private nivel: number = 1;
  private experiencia: number = 0;
  readonly id: number;

  constructor(nombre: string, id: number) {
    this.nombre = nombre;
    this.id = id;
  }

  get getNombre() {
    return this.nombre;
  }

  get getNivel() {
    return this.nivel;
  }

  ganarExperiencia(puntos: number) {
    this.experiencia += puntos;
    if (this.experiencia >= 100) {
      this.nivel++;
      this.experiencia = 0;
    }
  }

  mostrarInfo() {
    return `Jugador: ${this.nombre} | Nivel: ${this.nivel}`;
  }
}