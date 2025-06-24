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

## 🎯 Para Estudiantes

Este proyecto está diseñado como base educativa. Los estudiantes pueden:

1. **Expandir la base de datos JSON** - Agregar más jugadores y equipos
2. **Mejorar componentes** - Añadir nuevas funcionalidades
3. **Personalizar estilos** - Modificar la paleta de colores
4. **Integrar APIs reales** - Conectar con APIs de fútbol reales
5. **Agregar funcionalidades** - Sistema de favoritos, comparaciones, etc.

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