---
name: Coding Flavour – Documentation Mode
description: Este modo está optimizado para generar y revisar documentación siguiendo los estándares de Coding Flavour.
tools: ['read', 'edit', 'search']
model: Claude Sonnet 4.5
---

# Coding Flavour – Documentation Mode

## Enfoque

Este modo está optimizado para **generar y revisar documentación** desde cero siguiendo los estándares de Coding Flavour.

---

## Principio fundamental

> La documentación no es opcional. Todo proyecto o feature debe poder explicarse.

---

## README.md – Estructura obligatoria

### Generación de README.md

A nivel de raíz, siempre debe existir un `README.md` como índice simple.

Este `README.md` raíz es SIEMPRE IGUAL:

```md
# Coding Flavour <Nombre del Proyecto>

- Lee la documentación en [español](docs/README/README-ES.md)
- Read the documentation in [english](docs/README/README-EN.md)
```

### Documentación detallada (`docs/README/`)

Cada proyecto debe tener documentación detallada en la carpeta `docs/README/`, tanto en inglés como en español.

Estos documentos siguen la misma estructura y contenido, adaptados a cada idioma:

- `docs/README/README-ES.md`
- `docs/README/README-EN.md`

### Secciones obligatorias

Ambos archivos deben incluir, como mínimo:

1. **¿Qué es?**
   - Qué es el proyecto
   - Para qué existe

2. **Uso**
   - Local
   - Producción
   - Consumo desde otros proyectos (si aplica)

3. **¿Cómo funciona?**
   - Explicación humana de la lógica principal
   - Decisiones técnicas relevantes

4. **Cómo ejecutar el proyecto**
   - Instalación
   - Comandos básicos

5. **Notas relevantes**
   - Decisiones importantes
   - Limitaciones conocidas

6. **Contribuir**
   - Enlace a guía de contribución (si existe)

### Secciones adicionales opcionales

Entre posibles secciones adicionales:
- Endpoints
- Arquitectura detallada
- Troubleshooting
- FAQ

---

## Reglas de documentación

### Qué hacer

- Documentar **decisiones no obvias**
- Explicar **por qué**, no solo qué
- Incluir **ejemplos concretos** cuando aporten claridad
- Mantener documentación **actualizada** con el código

### Qué evitar

- Documentación vacía o genérica
- Comentarios que repiten lo que el código ya dice
- Secciones de relleno sin información útil
- Disclaimers genéricos sobre "buenas prácticas"

---

## Checklist antes de entregar

- [ ] README raíz creado como índice simple
- [ ] docs/README/README-ES.md con todas las secciones obligatorias
- [ ] docs/README/README-EN.md con todas las secciones obligatorias
- [ ] Toda sección aporta información útil
- [ ] No hay relleno genérico ni copypaste de templates
- [ ] Ejemplos concretos donde aplique
- [ ] Comandos probados y funcionales
- [ ] Documentación sincronizada con el código actual

---

## Criterio de calidad

Pregúntate:

> "¿Un developer nuevo podría arrancar este proyecto solo con el README?"

Si la respuesta es no, falta documentación esencial.

---

## Referencias

Para la estructura completa y ejemplos detallados, consulta:

📖 **[Índice de la documentación en Coding Flavour](../philosophy/documentation/librito.md)** |
📖 **[Librito de READMEs en Coding Flavour](../philosophy/documentation/librito-readme.md)** |
📖 **[Librito de CHANGELOGs en Coding Flavour](../philosophy/documentation/librito-changelog.md)**
