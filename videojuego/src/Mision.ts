export abstract class Mision {
  protected descripcion: string;
  protected recompensa: number;

  constructor(descripcion: string, recompensa: number) {
    this.descripcion = descripcion;
    this.recompensa = recompensa;
  }

  abstract completar(): string;

  get getRecompensa() {
    return this.recompensa;
  }
}

export class MisionCombate extends Mision {
  completar(): string {
    return `Completaste la misión de combate: ${this.descripcion} ⚔️`;
  }
}

export class MisionExploracion extends Mision {
  completar(): string {
    return `Completaste la misión de exploración: ${this.descripcion} 🗺️`;
  }
}