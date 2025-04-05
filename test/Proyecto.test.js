const proyecto = require("../src/Proyecto");
const { Tarea, TareaCompuesta, COMPLEJIDADES } = require("../src/Tareas");

describe("Proyecto con costos y complejidades", () => {
  let t1, t2, t3;

  beforeEach(() => {
    t1 = new Tarea("1", 3, COMPLEJIDADES.MINIMA);
    t2 = new TareaCompuesta("2", 5, [
      new Tarea("2.1", 6, COMPLEJIDADES.MEDIA),
      new TareaCompuesta("2.2", 8, [
        new Tarea("2.2.1", 3, COMPLEJIDADES.MAXIMA),
        new Tarea("2.2.2", 4),
      ], COMPLEJIDADES.MEDIA),
    ], COMPLEJIDADES.MAXIMA);
    t3 = new TareaCompuesta("3", 7, [
      new Tarea("3.1", 6),
      new Tarea("3.2", 3)
    ]);
    
    proyecto.agregarTarea(t1);
    proyecto.agregarTarea(t2);
    proyecto.agregarTarea(t3);
  });

  afterEach(() => {
    proyecto.cleanTareas();
  });

  test("Costo de tarea simple con complejidad mínima", () => {
    expect(t1.getCosto()).toBe(300); // 3 * 100
  });

  test("Costo de tarea con complejidad media", () => {
    const t = new Tarea("test", 10, COMPLEJIDADES.MEDIA);
    expect(t.getCosto()).toBe(1050); // 10 * 100 * 1.05
  });

  test("Costo de tarea compuesta con overhead", () => {
    const t = new TareaCompuesta("test", 5, [
      new Tarea("1", 1),
      new Tarea("2", 1),
      new Tarea("3", 1),
      new Tarea("4", 1)
    ]);
    expect(t.getCosto()).toBe(936); // (5*100 + 4*100) * 1.04
  });

  test("Duración total del proyecto", () => {
    expect(proyecto.getDuracion()).toBe(45);
  });
});