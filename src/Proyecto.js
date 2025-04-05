class Proyecto {
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea) {
      this.tareas.push(tarea);
    }
  
    getDuracion() {
      return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
    }
  
    getCostoTotal() {
      return this.tareas.reduce((acum, tarea) => acum + tarea.getCosto(), 0);
    }
  
    mostrarTareas() {
      this.tareas.forEach((tarea) => tarea.mostrarTarea());
      console.log(`Duración Total: ${this.getDuracion()}`);
      console.log(`Costo Total: $${this.getCostoTotal().toFixed(2)}`);
    }
  
    cleanTareas() {
      this.tareas = [];
    }
  }
  
  module.exports = new Proyecto();