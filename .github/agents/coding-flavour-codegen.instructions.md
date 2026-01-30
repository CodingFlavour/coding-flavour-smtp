---
name: Coding Flavour – Code Generation Mode
description: Este modo está optimizado para generar nuevo código desde cero siguiendo los estándares de Coding Flavour.
tools: ['execute', 'read', 'edit', 'search', 'agent', 'todo']
model: Claude Sonnet 4.5
---

# Coding Flavour – Code Generation Mode

## Enfoque

Este modo está optimizado para **generar nuevo código** desde cero siguiendo los estándares de Coding Flavour.

---

## Reglas operativas

### Generación de código

- Sigue estrictamente las convenciones definidas en [el Librito de la Programación](../philosophy/librito.md)
- Respeta formato, naming y estructura de carpetas
- Programa en ESM (ES Modules) usando `import`/`export`
  - Si un proyecto usa CommonJS, pregunta antes de generar código
  - Si un proyecto es nuevo, asume ESMs
- No introduzcas patrones no justificados o no documentados
- No asumas decisiones de arquitectura sin indicarlo explícitamente

### Logging obligatorio

- **NUNCA uses `console.log`, `console.warn`, `console.error` directamente**
- **SIEMPRE usa `@coding-flavour/logger`** para cualquier logging
- Instala el paquete si no existe: `npm install @coding-flavour/logger`
- Inicializa el logger con un prefijo descriptivo del contexto
- Usa los métodos apropiados según severidad: `log()`, `warn()`, `error()`, `debug()`
- Aprovecha las opciones de tabulación para reflejar el flujo de ejecución
- Consulta el [Librito de Logging](../philosophy/logging/librito.md) para más detalles

### Lenguaje y tecnología

- **Para proyectos JavaScript nuevos: usa TypeScript**
  - Inicializa con configuración TypeScript estricta
  - Genera archivos `.ts` o `.tsx` en lugar de `.js` o `.jsx`
  - Incluye `tsconfig.json` con configuración recomendada
- Solo usa JavaScript puro si el proyecto ya existe en JavaScript

---

## Uso de Git

- Asume que el código generado:
  - No va directamente a master/main
  - Será revisado por otro desarrollador

### Sintaxis de Git

**Commits**:

```
@<Version SemVer> @mensaje descriptivo
Ejemplo: @6.2.1 @Añadida funcionalidad de login con OAuth
```

**Ramas**:

```
camelCase con prefijo de versión
Ejemplo: 0.headerDSanchez
```

---

## 🧪 Testing

Genera tests solo cuando el cambio introduce **comportamiento observable**.

Antes de generar un test, pregúntate:

> "¿Este test me daría confianza para modificar este código mañana?"

Si la respuesta es no, no generes ese test.

Para la filosofía completa de testing, consulta:
- [Filosofía del Testing](../philosophy/testing/librito.md)
- [Testing Unitario con Vitest](../philosophy/testing/testing-unitario.md)

---

## 📦 Changelog y SemVer

Actualiza changelog y versión solo cuando el cambio lo justifique.

Antes de cerrar un cambio, pregúntate:

> "¿Un consumidor podría entender el impacto de este cambio solo leyendo el changelog?"

Si la respuesta es no, el changelog es insuficiente o el versionado es incorrecto.

Para la filosofía completa de versionado, consulta:
- [Librito de CHANGELOGs](../philosophy/documentation/librito-changelog.md)

---

## Workflow típico

1. Analizar el contexto y la estructura existente
2. Confirmar dudas si falta información crítica
3. Generar los recursos necesarios
4. Preparar commit descriptivo
5. Indicar que está listo para revisión humana

---

## Checklist antes de entregar

- [ ] Formato aplicado via @coding-flavour/vscode-settings
- [ ] Estructura de carpetas respetada
- [ ] Naming conventions seguidas
- [ ] Código debuggeable y explícito
- [ ] CSS acompañando al componente
- [ ] **Logger instalado y usado (NUNCA console.log)**
- [ ] Tests generados si aplican
- [ ] Commit message con formato correcto
- [ ] Listo para revisión humana
