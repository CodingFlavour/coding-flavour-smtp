# 📦 Versionado y Changelog en Coding Flavour

En Coding Flavour, todo cambio relevante debe quedar **registrado, versionado y comunicable**.

El changelog no es un trámite.
Es la forma en la que el equipo y los consumidores entienden **qué ha cambiado y por qué**.

---

### Ubicación y estructura

Todo proyecto debe incluir un archivo `CHANGELOG.md` en la **raíz del repositorio**, con el siguiente contenido mínimo:

```md
# Coding Flavour Common Changelog

- Lee el registro de cambios en [español](docs/CHANGELOG-ES.md)
- Read changelogs in [english](docs/CHANGELOG-EN.md)
```

Los changelogs detallados viven en la carpeta `docs/` y se mantienen, como mínimo, en:
- `docs/CHANGELOG-ES.md`
- `docs/CHANGELOG-EN.md`

---

### Formato del changelog (español)

El changelog en español sigue este formato:

```md
# Registro de cambios

## (Icono del alcance del cambio) [Versión](Enlace a release)

- Descripción del cambio 1.
- Descripción del cambio 2.
```

Por ejemplo:

```md
# Registro de cambios

## 📜 [1.0.2](https://github.com/CodingFlavour/coding-flavour-common/releases/tag/1.0.2)

- Descripción clara y concisa del cambio.

## 🚀 [1.0.1](https://github.com/CodingFlavour/coding-flavour-common/releases/tag/1.0.1)

- Descripción del cambio.

## 🚀 [1.0.0](https://github.com/CodingFlavour/coding-flavour-common/releases/tag/1.0.0)

- Lanzamiento inicial.
```

Las entradas deben:
- Describir **qué ha cambiado**, no cómo
- Estar orientadas al **consumidor del proyecto**
- Ser claras y concisas

---

### Relación con SemVer

Coding Flavour utiliza **versionado semántico (SemVer)**:

- **MAJOR**: Cambios incompatibles o ruptura de contratos
- **MINOR**: Nuevas funcionalidades compatibles
- **PATCH**: Correcciones o cambios internos sin impacto en la API

Antes de añadir una entrada al changelog, debe evaluarse:
- El impacto del cambio
- El tipo de versión que corresponde

---

### Cuándo es obligatorio actualizar el changelog

La actualización del changelog es **obligatoria** cuando un cambio:

- Introduce o modifica comportamiento observable
- Cambia un endpoint, API o contrato
- Añade o modifica funcionalidades
- Afecta a consumidores externos

No es obligatorio cuando el cambio es:
- Refactor interno sin cambio de comportamiento
- Documentación
- Formato o limpieza de código

---

### Relación con `package.json`

Todo cambio que requiera entrada en el changelog debe ir acompañado de:

- Actualización de la versión en `package.json`
- Coherencia entre:
  - Versión declarada
  - Entrada de changelog
  - Tipo de cambio realizado

No se aceptan cambios con:
- Changelog actualizado pero versión incorrecta
- Versión cambiada sin entrada en el changelog

---

### Creación de archivos

Si los archivos de changelog no existen:

- Deben crearse explícitamente
- Siguiendo la estructura y formato definidos en este documento

La ausencia de changelog en un proyecto versionado se considera una desviación de los estándares Coding Flavour.

---

## 📚 Diccionario de cabeceras de cambios (Coding Flavour)

En Coding Flavour utilizamos un conjunto limitado y consistente de cabeceras para clasificar los cambios.

El objetivo es:
- Facilitar la lectura del changelog
- Evitar interpretaciones ambiguas
- Mantener un lenguaje común en todo el ecosistema

No se deben inventar nuevas cabeceras sin consenso del equipo.

---

### 🚀 Nuevas características

Cambios que introducen **nueva funcionalidad** para el consumidor.

Ejemplos:
- Nueva feature
- Nuevo endpoint
- Nueva integración
- Nuevo flujo de usuario

Suele implicar:
- Versión **MINOR**
- Entrada obligatoria en el changelog
- Tests asociados

---

### 🐛 Correcciones de errores

Cambios que corrigen **comportamientos incorrectos** existentes.

Ejemplos:
- Bugfix
- Corrección de edge cases
- Errores de lógica
- Fix de comportamiento inesperado

Suele implicar:
- Versión **PATCH**
- Tests que validen el caso corregido

---

### 💅 Pulido interno

Cambios que mejoran el código **sin modificar comportamiento observable**.

Ejemplos:
- Refactors
- Limpieza de código
- Mejora de legibilidad
- Optimización interna sin impacto externo

Suele implicar:
- Versión **PATCH**
- No requiere tests nuevos si el comportamiento no cambia

---

### 🧱 Cambios estructurales

Cambios que afectan a la **estructura del proyecto** o su arquitectura.

Ejemplos:
- Reorganización de carpetas
- Cambios de arquitectura interna
- Ajustes en la forma de distribuir responsabilidades

Puede implicar:
- **MINOR** o **MAJOR**, según impacto
- Justificación clara en el changelog

---

### 🔥 Eliminaciones

Cambios que **eliminan funcionalidades, endpoints o comportamientos**.

Ejemplos:
- Deprecaciones
- Eliminación de APIs
- Limpieza de funcionalidades obsoletas

Suele implicar:
- Versión **MAJOR**
- Entrada clara y explícita en el changelog

---

### 🧪 Testing

Cambios relacionados exclusivamente con **tests**.

Ejemplos:
- Añadir cobertura
- Mejorar tests existentes
- Ajustes en herramientas de testing

Suele implicar:
- Versión **PATCH**
- No afecta a consumidores finales

---

### 📦 Dependencias

Cambios relacionados con **actualización o gestión de dependencias**.

Ejemplos:
- Actualización de paquetes
- Cambios de versiones internas
- Ajustes de compatibilidad

El impacto depende del cambio:
- PATCH / MINOR / MAJOR según el caso
- Debe justificarse claramente

---

### 📄 Documentación

Cambios que afectan únicamente a **documentación**.

Ejemplos:
- README
- Changelog
- Guías internas
- Comentarios relevantes

Suele implicar:
- No requiere cambio de versión
- No afecta al comportamiento del código

---

### ⚠️ Regla de uso

- Cada entrada del changelog debe usar **una única cabecera**
- La cabecera debe reflejar el **impacto principal** del cambio
- En caso de duda, prioriza el punto de vista del consumidor

---

### 🧭 Criterio final

Antes de elegir una cabecera, pregúntate:

> “¿Qué tipo de cambio diría un consumidor que ha ocurrido?”

Si la cabecera no responde a eso, no es la correcta.

