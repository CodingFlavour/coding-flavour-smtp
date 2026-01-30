# 📘 El Librito de la Programación – Coding Flavour

## Índice

- [📘 El Librito de la Programación – Coding Flavour](#-el-librito-de-la-programación--coding-flavour)
  - [Índice](#índice)
  - [1. Propósito](#1-propósito)
  - [2. Conductas generales (no negociables)](#2-conductas-generales-no-negociables)
  - [3. Herramientas y formato](#3-herramientas-y-formato)
  - [4. Estructura de proyectos (ReactJS)](#4-estructura-de-proyectos-reactjs)
  - [5. Git y versionado](#5-git-y-versionado)
  - [6. Documentación](#6-documentación)
  - [7. Testing](#7-testing)
  - [8. Logging](#8-logging)
  - [9. Inicialización de proyectos nuevos](#9-inicialización-de-proyectos-nuevos)
    - [9.1. Crear `.gitignore`](#91-crear-gitignore)
    - [9.2. Instalar herramientas Coding Flavour](#92-instalar-herramientas-coding-flavour)
    - [9.3. Configurar scripts en `package.json`](#93-configurar-scripts-en-packagejson)
    - [9.4. Ejecutar scripts de configuración](#94-ejecutar-scripts-de-configuración)
    - [¿Qué hace cada herramienta?](#qué-hace-cada-herramienta)

## 1. Propósito

Este librito define cómo se escribe, estructura y presenta código en Coding Flavour.

No es una guía opcional.
Es la base común para que cualquier desarrollador (humano o asistente) pueda:

- Entender el código sin contexto previo
- Modificarlo sin miedo
- Revisarlo sin fricción

## 2. Conductas generales (no negociables)

- Las ramas principales (master/main) son sagradas.
- Nunca se commitea ni pushea directamente sobre ellas.
- Solo entra código:
    - Limpio
    - Revisado
    - Testeado
- Todo Merge Request:
    - Debe ser revisado por otro developer
    - Debe ser mergeado por ese developer

👉 El Companion debe asumir que todo código generado será revisado por otro humano.

## 3. Herramientas y formato

Para estándares de herramientas y formato, consulta el siguiente librito: [Herramientas y Formato en Coding Flavour](tools/librito.md)

👉 El Companion no debe generar código que contradiga el formato definido.

## 4. Estructura de proyectos (ReactJS)

Dentro de `src/`:

```css
src/
  assets/
  components/
  views/
```

- views/
    - Representan puntos de ruta
    - Son exportables
- components/
    - Reutilizables entre vistas
    - Son exportables
- assets/
    - Recursos estáticos

Reglas adicionales:

- Cada componente vive en su carpeta
- JS y CSS van juntos
- Naming en CamelCase
- Debuggabilidad > compactación

## 5. Git y versionado

<!-- **Commits**

```less
@tarea @mensaje descriptivo
```

Ejemplo:

```less
@Alfa @First architecture planned
```

**Ramas**

- camelCase
- Prefijo de versión

Ejemplo:

```pgsql
0.header
0.headerDSanchez
``` -->

Para la sintaxis completa de Git, consulta el librito: [Git y versionado en Coding Flavour](git/librito.md)

## 6. Documentación

Para estándares de documentación, consulta el siguiente librito: [Documentando nuestro proyecto](documentation/librito.md)

---

## 7. Testing

Para estándares de testing, consulta el siguiente librito: [Filosofia del Testing](testing/librito.md)

---

## 8. Logging

Para estándares de logging, consulta el siguiente librito: [Logging en Coding Flavour](logging/librito.md)

---

## 9. Inicialización de proyectos nuevos

Cuando se inicializa un repositorio nuevo con `git init`, se deben seguir estos pasos obligatorios:

### 9.1. Crear `.gitignore`

Añadir un archivo `.gitignore` en la raíz con el siguiente contenido mínimo:

```gitignore
node_modules
.vscode # Coding Flavour VSCode Settings
.github # Coding Flavour Companion
```

### 9.2. Instalar herramientas Coding Flavour

Instalar los paquetes obligatorios:

```bash
npm install @coding-flavour/vscode-settings @coding-flavour/companion
```

### 9.3. Configurar scripts en `package.json`

Añadir los siguientes scripts:

```json
{
  "scripts": {
    "vscode:settings": "vscode-settings install",
    "companion:install": "tsx -r tsconfig-paths/register ./node_modules/@coding-flavour/companion/src/bin/companion.ts install"
  }
}
```

### 9.4. Ejecutar scripts de configuración

```bash
npm run vscode:settings
npm run companion:install
```

### ¿Qué hace cada herramienta?

- **`@coding-flavour/vscode-settings`**: Configura VSCode con linting integrado (sin depender de ESLint o Prettier externos). Instala la carpeta `.vscode/` con la configuración del equipo.
- **`@coding-flavour/companion`**: Instala la estructura `.github/` con la filosofía, agentes y modos de chat para el asistente AI.

👉 Ambas carpetas (`.vscode/` y `.github/`) están en `.gitignore` porque cada desarrollador las genera localmente con estos scripts.
