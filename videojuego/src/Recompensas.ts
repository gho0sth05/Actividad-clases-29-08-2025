export class Recompensas {
  idRecompensas: number;
  descripcion: string;
  valor: number;

  constructor(idRecompensas: number, descripcion: string, valor: number) {
    this.idRecompensas = idRecompensas;
    this.descripcion = descripcion;
    this.valor = valor;
  }

  asignar(): void {
    console.log(`Recompensa asignada: ${this.descripcion} con valor ${this.valor}`);
  }
}