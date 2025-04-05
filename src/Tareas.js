const { COMPLEJIDADES, VALOR_BASE, calcularCostoBase, calcularOverhead } = require("./Complejidades");

class Tarea {
  constructor(codigo, duracion, complejidad = COMPLEJIDADES.MINIMA) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto() {
    const costoBase = calcularCostoBase(this.duracion);
    const extraComplejidad = this.complejidad.calcularExtra(this.duracion);
    return costoBase * (1 + extraComplejidad);
  }

  mostrarTarea() {
    console.log(`Código: ${this.codigo} - Duración: ${this.duracion} - Complejidad: ${this.complejidad.nombre} - Costo: $${this.getCosto().toFixed(2)}`);
  }
}

class TareaCompuesta extends Tarea {
  constructor(codigo, duracion, tareas = [], complejidad = COMPLEJIDADES.MINIMA) {
    super(codigo, duracion, complejidad);
    this.tareas = tareas;
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCosto() {
    const costoBase = super.getCosto();
    const overhead = calcularOverhead(this.tareas);
    const costoTareas = this.tareas.reduce((acum, tarea) => acum + tarea.getCosto(), 0);
    
    return (costoBase + costoTareas) * (1 + overhead);
  }

  mostrarTarea() {
    super.mostrarTarea();
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta, COMPLEJIDADES };