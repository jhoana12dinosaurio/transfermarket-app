# ⚽ TransferMarket Pro - Aplicación de Jugadores de Fútbol

Una aplicación web moderna tipo Transfermarket desarrollada en React + Vite que simula una plataforma de transferencias de jugadores de fútbol profesional.

## 🚀 Características

- **Diseño Tipo Transfermarket**: Interfaz profesional con colores vibrantes del mundo futbolístico
- **Base de Datos JSON**: Datos reales de jugadores y equipos de elite mundial
- **Búsqueda Inteligente**: Búsqueda por nombre, posición y nacionalidad
- **Perfiles Detallados**: Información completa con estadísticas, habilidades y trofeos
- **Responsive Design**: Totalmente adaptable a todos los dispositivos
- **Simulación API**: Uso de axios con delays para simular llamadas reales

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y servidor de desarrollo
- **Tailwind CSS v3** - Framework de estilos con colores personalizados
- **Axios** - Cliente HTTP para manejo de datos
- **JavaScript JSX** - Sin TypeScript para simplicidad

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación y búsqueda
│   ├── PlayerCard.jsx      # Tarjeta individual de jugador
│   ├── PlayerProfile.jsx   # Modal con perfil completo
│   ├── PlayersList.jsx     # Lista de jugadores
│   └── LoadingSpinner.jsx  # Componente de carga
├── data/
│   └── playersData.json    # Base de datos JSON
├── services/
│   └── dataService.js      # Lógica de datos con axios
└── App.jsx                 # Componente principal
```

## 🎨 Paleta de Colores Futbolera

- **Verde Transfermarket**: `#00A651`
- **Azul Futbolero**: `#1E3A8A`
- **Naranja Transfermarket**: `#F97316`
- **Rojo Competición**: `#DC2626`
- **Verde Césped**: `#228B22`
- **Amarillo Gol**: `#FFD700`

## 🏆 Equipos y Jugadores Incluidos

### Equipos Elite:
- Real Madrid (España)
- FC Barcelona (España)
- Manchester City (Inglaterra)
- Paris Saint-Germain (Francia)
- Bayern Munich (Alemania)
- Liverpool (Inglaterra)

### Estrellas Incluidas:
- Kylian Mbappé
- Vinicius Jr.
- Robert Lewandowski
- Erling Haaland
- Lionel Messi
- Y muchos más...

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
```bash
cd transfermarket-app
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

## 📝 Funcionalidades Principales

### 🔍 Búsqueda Avanzada
- Búsqueda por nombre de jugador
- Filtrado por posición
- Búsqueda por nacionalidad
- Resultados en tiempo real

### 👤 Perfil de Jugador
- Estadísticas completas (goles, asistencias, partidos)
- Gráficos de habilidades (velocidad, disparo, pase, etc.)
- Valor de mercado actualizado
- Historial de trofeos
- Información del equipo actual

### 💰 Información de Mercado
- Valores de mercado realistas
- Duración de contratos
- Información de equipos y ligas

## 🎯 Desafíos para Estudiantes

Este proyecto es tu campo de juego. ¡Haz un **fork** y completa estos desafíos para demostrar tus habilidades en React!

### 1. 🖼️ Completa las Imágenes y Logos
Algunos jugadores o equipos podrían no tener una imagen o logo asignado en `src/data/playersData.json`.
- **Tu Misión:** Investiga y encuentra las URLs de las imágenes para todos los jugadores y los logos de todos los equipos. ¡Asegúrate de que cada perfil se vea completo y profesional!

### 2. ➕ Expande la Base de Datos
El universo del fútbol es enorme. ¿Por qué limitarse a solo 6 equipos?
- **Tu Misión:** Agrega al menos 2 equipos nuevos de tu liga favorita y 3 jugadores para cada uno de esos equipos. Esto pondrá a prueba tu comprensión de la estructura de datos. (Por ejemplo Futol Peruano)

### 3. 🔎 Filtros Avanzados por Equipo
Actualmente, la búsqueda es general. Vamos a mejorarla.
- **Tu Misión:** Modifica el componente `Header.jsx` para añadir un `select` (menú desplegable) que permita filtrar jugadores por equipo. Deberás obtener la lista de equipos desde `dataService.js` y usar un `useState` para manejar el filtro seleccionado.

### 4. ⭐ Sistema de Jugadores Favoritos
Todo fan tiene sus jugadores preferidos. ¡Permitamos que los usuarios guarden los suyos!
- **Tu Misión:**
    1.  En `PlayerCard.jsx`, agrega un botón (ej. un ícono de estrella) para marcar un jugador como favorito.
    2.  En `App.jsx`, utiliza `useState` para mantener un array con los IDs de los jugadores favoritos.
    3.  Crea una nueva sección o un filtro en el `Header.jsx` para mostrar solo los jugadores favoritos.
    4.  **(Bonus):** Usa `localStorage` para que los favoritos se guarden entre sesiones.

### 5. 📝 Formulario para Añadir Nuevos Jugadores
Para que la aplicación sea verdaderamente dinámica, necesitamos poder agregar datos sin editar el JSON manualmente.
- **Tu Misión:**
    1.  Crea un nuevo componente `AddPlayerForm.jsx`.
    2.  Diseña un formulario con campos para el nombre, edad, posición, nacionalidad, equipo, etc.
    3.  Implementa la lógica para manejar el estado del formulario usando `useState`.
    4.  Crea una nueva función en `dataService.js` llamada `addPlayer` que simule agregar un jugador nuevo al listado (no necesitas guardarlo permanentemente en el archivo JSON, solo actualizar el estado de la aplicación).
    5.  Agrega un botón en `Header.jsx` que muestre/oculte este formulario.

## 🎮 Simulación de API

El `dataService.js` simula una API real con:
- Delays realistas en las respuestas
- Manejo de errores
- Estructura de respuesta consistente
- Métodos RESTful simulados

## 🔧 Personalización

Para personalizar la aplicación:

1. **Modificar datos**: Edita `src/data/playersData.json`
2. **Cambiar colores**: Modifica `tailwind.config.js`
3. **Añadir componentes**: Crea nuevos archivos en `/components`
4. **Agregar servicios**: Extiende `dataService.js`

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📟 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Componentes Destacados

- **Tarjetas de jugadores** con hover effects
- **Modal de perfil** con animaciones suaves
- **Header con gradientes** tipo Transfermarket
- **Gráficos de habilidades** interactivos
- **Spinners de carga** personalizados

¡Perfecto para aprender React, trabajar con datos JSON y crear interfaces modernas! ⚽✨