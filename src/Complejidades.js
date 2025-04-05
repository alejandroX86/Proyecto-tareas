const VALOR_BASE = 100; // Valor configurable común para todas las tareas

const COMPLEJIDADES = {
  MINIMA: {
    nombre: "Mínima",
    calcularExtra: (duracion) => 0,
  },
  MEDIA: {
    nombre: "Media",
    calcularExtra: (duracion) => 0.05,
  },
  MAXIMA: {
    nombre: "Máxima",
    calcularExtra: (duracion) => 
      duracion <= 10 ? 0.07 : 0.07 + (Math.max(0, duracion - 10) * 1000 / (duracion * VALOR_BASE))
  },
};

const calcularCostoBase = (duracion) => duracion * VALOR_BASE;

const calcularOverhead = (tareas) => tareas.length > 3 ? 0.04 : 0;

module.exports = { COMPLEJIDADES, VALOR_BASE, calcularCostoBase, calcularOverhead };