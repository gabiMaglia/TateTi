# 🎮 TateTi (Tres en línea) en React

📌 **Descripción (Español)**  
Este proyecto es una implementación clásica del juego **TateTi** (también conocido como tres en línea o tic-tac-toe) utilizando **React 19**. La aplicación está construida de forma modular, y su lógica está completamente desacoplada de la vista.  

El juego permite alternar turnos entre dos jugadores, detectar automáticamente un ganador o empate, y reiniciar la partida. Internamente, se utiliza el hook `useState` para manejar el estado del tablero y el jugador activo, respetando los principios de inmutabilidad del estado.

Es un proyecto simple pero ideal para practicar conceptos fundamentales de React como:
- Estado local (`useState`)
- Composición de componentes
- Renderizado condicional
- Manipulación de arrays de estado inmutable

---

📌 **Description (English)**  
This project is a classic implementation of the **Tic-Tac-Toe** game built with **React 19**. The app is modular and separates game logic from UI. It allows two players to alternate turns, automatically detects win or draw conditions, and supports game resets.

The app uses React’s `useState` hook to manage board state and active player, following immutable state update practices. It’s a great small project to practice core React concepts like:
- Local state management (`useState`)
- Component composition
- Conditional rendering
- Immutable array updates

---

## 🚀 Tecnologías / Tech Stack

- React 19  
- Vite  
- JavaScript (ES6+)  
- CSS

---

## ⚙️ Funcionalidades / Features

- ✏️ Tablero interactivo 3x3
- 🔁 Alternancia automática de turnos (jugador X / O)
- 🏆 Detección de victoria o empate
- ♻️ Reinicio rápido de partida
- 📦 Lógica desacoplada del layout
- 🎯 Renderizado reactivo de celdas

---

## 🔧 Instalación / Installation

```bash
git clone https://github.com/gabiMaglia/TateTi.git
cd TateTi
npm install
npm run dev
