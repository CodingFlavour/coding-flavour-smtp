# 📘 El Librito de la Programación – Git y versionado en Coding Flavour

## Índice

- [📘 El Librito de la Programación – Git y versionado en Coding Flavour](#-el-librito-de-la-programación--git-y-versionado-en-coding-flavour)
  - [Índice](#índice)
  - [1. Propósito](#1-propósito)
  - [2. Ramas principales (sagradas)](#2-ramas-principales-sagradas)
    - [¿Qué son?](#qué-son)
    - [Reglas](#reglas)
  - [3. Sintaxis de commits](#3-sintaxis-de-commits)
    - [Formato obligatorio](#formato-obligatorio)
    - [Componentes](#componentes)
    - [Ejemplos válidos](#ejemplos-válidos)
    - [Qué evitar](#qué-evitar)
    - [Criterio](#criterio)
  - [4. Sintaxis de ramas](#4-sintaxis-de-ramas)
    - [Formato obligatorio](#formato-obligatorio-1)
    - [Ejemplos válidos](#ejemplos-válidos-1)
    - [Reglas de naming](#reglas-de-naming)
    - [Qué evitar](#qué-evitar-1)
  - [5. Workflow de desarrollo](#5-workflow-de-desarrollo)
    - [Flujo estándar](#flujo-estándar)
  - [6. Merge Requests](#6-merge-requests)
    - [Reglas obligatorias](#reglas-obligatorias)
    - [Contenido de un MR](#contenido-de-un-mr)
    - [Responsabilidad del reviewer](#responsabilidad-del-reviewer)
  - [7. Reglas no negociables](#7-reglas-no-negociables)
    - [Para developers humanos](#para-developers-humanos)
    - [Para asistentes AI (Companion)](#para-asistentes-ai-companion)
    - [Consecuencias de incumplimiento](#consecuencias-de-incumplimiento)
  - [Criterio final](#criterio-final)
  - [Referencias](#referencias)

---

## 1. Propósito

Este librito define cómo trabajar con Git en proyectos de Coding Flavour.

El objetivo no es complicar el flujo, sino:

- Mantener un historial limpio y legible
- Proteger las ramas principales
- Facilitar la revisión de código
- Garantizar trazabilidad de cambios

---

## 2. Ramas principales (sagradas)

### ¿Qué son?

Las ramas principales son:

- `master`
- `main`

### Reglas

- **Nunca se commitea directamente sobre ellas**
- **Nunca se pushea directamente sobre ellas**
- Solo entra código:
  - Limpio
  - Revisado por otro developer
  - Testeado (si aplica)
  - Aprobado mediante Merge Request

👉 Si estás en una rama principal, **crea una rama de feature antes de trabajar**.

---

## 3. Sintaxis de commits

### Formato obligatorio

```
@<Version SemVer> @mensaje descriptivo
```

### Componentes

- **`@<Version SemVer>`**: Versión del proyecto siguiendo SemVer (ej: `@6.2.1`, `@1.0.0`, `@Alfa`)
- **`@mensaje descriptivo`**: Descripción clara de qué hace el commit

### Ejemplos válidos

```
@6.2.1 @Añadida funcionalidad de login con OAuth
@1.0.0 @Refactorizada arquitectura de componentes
@Alfa @First architecture planned
@2.3.5 @Corregido bug en validación de formularios
```

### Qué evitar

❌ Mensajes genéricos:
```
@1.0.0 @Fix
@2.0.0 @Update
@3.1.0 @Changes
```

❌ Sin formato:
```
Added login feature
Fixed bug
WIP
```

### Criterio

Un buen mensaje de commit debe responder:

> "¿Qué hace este cambio y en qué versión?"

---

## 4. Sintaxis de ramas

### Formato obligatorio

```
<prefijo>.<nombre>
```

Donde:

- **`<prefijo>`**: Número de versión principal (ej: `0`, `1`, `2`)
- **`<nombre>`**: Descripción en camelCase

### Ejemplos válidos

```
0.header
0.headerDSanchez
1.loginFeature
2.refactorComponents
0.miNuevaFeature
```

### Reglas de naming

- **camelCase**: primera palabra en minúscula, siguientes palabras capitalizadas
- **Descriptivo**: el nombre debe indicar qué contiene la rama
- **Sin espacios ni caracteres especiales**
- **Opcional**: incluir iniciales del developer si hay varias personas trabajando en features similares

### Qué evitar

❌ Sin prefijo:
```
header
loginFeature
```

❌ Espacios o guiones:
```
0.my-feature
0.new feature
```

❌ Nombres ambiguos:
```
0.fix
0.test
0.temp
```

---

## 5. Workflow de desarrollo

### Flujo estándar

1. **Verifica en qué rama estás**
   ```bash
   git branch
   ```

2. **Si estás en master/main, crea una rama de feature**
   ```bash
   git checkout -b 0.miNuevaFeature
   ```

3. **Trabaja en tu código**
   - Implementa la feature
   - Aplica formato correcto (via `@coding-flavour/vscode-settings`)
   - Genera tests si aplica
   - Documenta si es necesario

4. **Haz commit con formato correcto**
   ```bash
   git add .
   git commit -m "@1.0.0 @Implementada nueva feature X"
   ```

5. **Push de tu rama**
   ```bash
   git push origin 0.miNuevaFeature
   ```

6. **Crea un Merge Request**
   - Desde tu plataforma Git (GitHub, GitLab, etc.)
   - Asigna a un reviewer del equipo

7. **Espera revisión**
   - El reviewer aprueba o solicita cambios
   - Realiza los ajustes necesarios si los hay

8. **El reviewer hace el merge**
   - **Importante**: no haces merge de tu propio código
   - El reviewer es quien mergea a master/main

---

## 6. Merge Requests

### Reglas obligatorias

- **Todo cambio a master/main pasa por Merge Request**
- **Debe ser revisado por otro developer**
- **Debe ser mergeado por ese reviewer** (no por el autor del código)

### Contenido de un MR

Un Merge Request debe incluir:

- **Descripción clara** de qué cambia y por qué
- **Referencia a issue o tarea** si aplica
- **Changelog actualizado** si el cambio es versionable
- **Tests nuevos o modificados** si aplica

### Responsabilidad del reviewer

El reviewer debe validar:

- [ ] Cumplimiento del formato correcto (via `@coding-flavour/vscode-settings`)
- [ ] Estructura de carpetas correcta
- [ ] Naming conventions seguidas
- [ ] Código legible y mantenible
- [ ] Tests presentes si aplica
- [ ] Documentación actualizada si aplica
- [ ] Commit message con formato correcto

Si algo no cumple: **solicitar cambios**, no aprobar directamente.

---

## 7. Reglas no negociables

### Para developers humanos

1. **No commitees directamente a master/main**
2. **No pushees directamente a master/main**
3. **No hagas merge de tu propio código**
4. **Usa siempre el formato de commit correcto**
5. **Crea ramas con naming convention adecuado**

### Para asistentes AI (Companion)

1. **Asume que todo código irá a revisión**
2. **Genera commits siguiendo el formato exacto**
3. **Crea ramas con prefijo de versión**
4. **No generes código que vaya directo a master/main**
5. **Prepara todo para Merge Request**

### Consecuencias de incumplimiento

- **Código rechazado** en review
- **Merge Request bloqueado**
- **Historial de Git contaminado** (en casos extremos)

---

## Criterio final

Antes de hacer commit o push, pregúntate:

> "¿Este commit/rama sigue las convenciones de Coding Flavour?"

Si la respuesta es no, ajusta antes de continuar.

---

## Referencias

- [El Librito de la Programación](../librito.md)
- [Filosofía de desarrollo](../../../.coding-flavour/README.md)
- [Agente Coding Flavour](../../agents/coding-flavour-companion.instructions.md)
