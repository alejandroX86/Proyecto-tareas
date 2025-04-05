Trabajo Práctico 

Sistema de Gestión de Tareas con Costos y Complejidades

📌 Descripción
Este proyecto es un sistema de gestión de tareas que calcula costos basados en:

Duración de la tarea.

Complejidad (Mínima, Media, Máxima).

Overhead por subtareas (si hay más de 3).

Desarrollado con JavaScript, sigue principios de POO y programación funcional, evitando condicionales mediante estrategias y composición.

🚀 Características Principales
✅ Jerarquía de Tareas

Tareas simples: Duración y costo básico.

Tareas compuestas: Agrupan subtareas con overhead del 4% si tienen más de 3.

✅ Cálculo de Costos

Valor base: Configurable ($100 por unidad de tiempo).

Complejidades:

Mínima: Sin extra.

Media: +5%.

Máxima: +7% (y $1000 extra por día si la duración > 10).

✅ Principios de Diseño

POO: Herencia (TareaCompuesta → Tarea), polimorfismo (getCosto()).

Funcional: Funciones puras, métodos reduce/forEach.

Sin condicionales: Se usan objetos (COMPLEJIDADES) para evitar if/switch.

⚙️ Instalación
Clonar/Inicializar:

bash
Copy
git clone <repo-url>
cd proyecto-tareas
npm install
Ejecutar:

bash
Copy
npm start  # Muestra tareas de ejemplo y costos
npm test   # Ejecuta pruebas unitarias (Jest)
📊 Estructura del Proyecto
Copy
proyecto-tareas/
├── src/
│   ├── Complejidades.js    # Lógica de costos y complejidades
│   ├── Tareas.js           # Clases Tarea y TareaCompuesta
│   ├── Proyecto.js         # Gestión de tareas globales
│   └── index.js            # Ejemplo de uso
├── test/                   # Pruebas unitarias
└── package.json
