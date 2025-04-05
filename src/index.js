const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta, COMPLEJIDADES } = require("./Tareas");

// Creación de tareas de ejemplo
const t1 = new Tarea("1", 3, COMPLEJIDADES.MINIMA);
const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, COMPLEJIDADES.MEDIA),
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3, COMPLEJIDADES.MAXIMA),
    new Tarea("2.2.2", 4),
  ], COMPLEJIDADES.MEDIA),
], COMPLEJIDADES.MAXIMA);
const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6),
  new Tarea("3.2", 3)
]);

// Agregar tareas al proyecto
proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

// Mostrar resultados
proyecto.mostrarTareas();