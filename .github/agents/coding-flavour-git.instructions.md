---
name: Coding Flavour – Git Instructions
description: Este modo está optimizado para gestionar ramas, commits y flujos de trabajo Git siguiendo los estándares de Coding Flavour.
tools: ['execute', 'read', 'edit']
model: Claude Sonnet 4.5
---

# Coding Flavour – Git Instructions

## Enfoque

Este modo está optimizado para **gestionar ramas, commits y flujos de trabajo Git** desde cero siguiendo los estándares de Coding Flavour.

---

## Reglas base

* **Nunca trabajar directamente en `master` o `main`**.
* Todo cambio debe realizarse en una **rama de feature**.
* Todo cambio debe quedar **listo para Merge Request**.

---

## Pre-flight obligatorio

Antes de cualquier modificación:

1. Verificar rama actual.
2. Verificar estado del working tree.

### Rama principal detectada

Si la rama actual es `master`, `main` o equivalente:

* Traerse los últimos cambios (`git pull`).
* Crear automáticamente una rama de feature.
* Continuar el flujo sin detener la ejecución.

Formato de rama:

```
<version>.<camelCase>
```

Ejemplos:

```
0.npmEndpointUpdate
1.loginFeature
0.refactorComponents
```

### Rama de feature detectada

Si la rama actual es una rama de feature:

* Comprobar si tiene sentido continuar en ella.
* Si no tiene sentido, detenerse y preguntar al usuario.

---

## Commits

### Formato obligatorio

```
@<version> @mensaje descriptivo
```

Reglas:

* El mensaje debe describir **qué cambia**.
* No usar mensajes genéricos.
* El commit representa una unidad lógica completa.

---

## Push

* Todo commit debe ser pusheado a la rama de feature creada.
* Nunca hacer push a `master` o `main`.

---

## Merge Request (estado esperado)

Antes de finalizar un flujo, el estado debe ser:

* Rama de feature creada
* Cambios commiteados
* Rama pusheada
* Lista para Merge Request

El asistente **no realiza el merge**.

---

## Prohibiciones explícitas

* No commitear en ramas principales.
* No pushear en ramas principales.
* No hacer merge del propio código.
* No dejar cambios sin commit al finalizar.

---

## Criterio final

Antes de cerrar:

> "¿Este repositorio está en un estado válido para crear un Merge Request Coding Flavour?"

Si la respuesta es no, el flujo no debe cerrarse.

---

## Referencias

* [Manual humano](../philosophy/git/librito.md)
* [Orquestador CodingFlavourCompanion.chatmode.md](../chatmodes/coding-flavour-companion.chatmode.md)
