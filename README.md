
# 🖥️ Portal Académico — Estilo Consola (CMD / PowerShell)

Este proyecto es un portal académico multipágina diseñado con una estética similar a
**CMD** y **PowerShell**, utilizando HTML, CSS y JavaScript.  
Cada sección del curso (Inicio, Primer Corte, Segundo Corte y Tercer Corte) se presenta 
como si fuera una consola interactiva, con paneles de salida, prompts simulados y una 
navegación superior persistente.

---

## 📁 Estructura del proyecto

```tetx
/portal-consola
├─ index.html          # Página de Inicio (Introducción)
├─ primer.html         # Sección del Primer Corte
├─ segundo.html        # Sección del Segundo Corte
├─ tercer.html         # Sección del Tercer Corte
├─ /css
│    ├─ base.css       # Estilos globales, tema consola
│    ├─ home.css       # Estilos opcionales para Inicio
│    ├─ corte.css      # Estilos opcionales para cortes
├─ /js
│    └─ common.js      # Script compartido (menú activo, scroll suave)
└─ /assets             # Carpeta para tus PDFs, imágenes, docs, etc.
```
---

## 🎯 Objetivo del proyecto

Organizar el contenido académico por cortes utilizando una interfaz limpia y atractiva
con temática de consola.  
El diseño imita elementos visuales de:

- **CMD** (fondo oscuro, verde terminal)
- **PowerShell** (azules y cian característicos)
- Ventanas tipo terminal con "burbujas" de cerrar/minimizar/maximizar
- Salidas simuladas como `dir`, `Get-Content`, etc.

---

## 📌 Descripción de cada página

### 🏠 **1. Inicio (`index.html`)**
Contiene una **introducción sobre CMD y PowerShell**, explicando su propósito y 
diferencias, **sin ejemplos ni comandos ejecutados**.  
Esta página funciona como presentación del portal y su organización.

### 📂 **2. Primer Corte (`primer.html`)**
Espacio para colocar:

- Guia de comandos
- Ficha tecnica de soporte
- comandos a tener en cuenta
- comandos que tiene uno que saber utlizar
- etc. `/assets`  

Incluye una tabla tipo consola simulando `dir` y un área para tus recursos.

### 📘 **3. Segundo Corte (`segundo.html`)**
Página lista para agregar material cuando lo necesites.  
Incluye una estructura mínima con un prompt y una salida tipo consola.

### 🧾 **4. Tercer Corte (`tercer.html`)**
Pensada para el proyecto final o entregables avanzados.  
Espacio limpio para agregar archivos, informes, diapositivas o repositorios.

---

## 🎨 Estilos

### `css/base.css`
Aquí se define:

- Tema general (fondos, colores de consola, estilo PowerShell)
- Navbar fija
- Paneles de salida (`.output`)
- Línea de prompt (`.line` + `.prompt`)
- Estilo de tablas y secciones

### `css/home.css`
(Usado solo si quieres personalizar Inicio)

### `css/corte.css`
(Usado para decoraciones específicas de páginas de cortes)

---

## ⚙️ Comportamiento JS

### `js/common.js`
Controla:

- Resaltar automáticamente en el menú la página actual
- Scroll suave para enlaces internos
- Soporte para subsecciones si decides agregarlas luego

No se requiere ningún framework.

---

## ⚡ Personalización rápida

Puedes modificar fácilmente:

### 🎨 Tema (CMD / PowerShell)
En `base.css`, cambia:

- Fondo tipo CMD:
  ```css
  --bg: #000;
  --accent: #00ff00;
  
---

### Fondo tipo PowerShell
```css
--accent-2: #4fc3f7;
--prompt: #2bdc74;
