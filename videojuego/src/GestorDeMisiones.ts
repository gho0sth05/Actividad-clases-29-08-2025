import { Mision, MisionCombate, MisionExploracion } from "./Mision";

export class GestorDeMisiones {
  private misiones: Mision[] = [];

  constructor() {
    this.misiones.push(new MisionCombate("Derrota 3 enemigos", 50));
    this.misiones.push(new MisionExploracion("Descubre la cueva secreta", 70));
    this.misiones.push(new MisionExploracion("recata a la princesa", 100));
  }

  listarMisiones(): string[] {
    return this.misiones.map((m, i) => `${i + 1}. ${m.constructor.name}: ${m["descripcion"]}`);
  }

  completarMision(index: number): string {
    const mision = this.misiones[index];
    if (!mision) return "❌ Misión no encontrada";
    return mision.completar();
  }

  getMision(index: number) {
    return this.misiones[index];
  }
}