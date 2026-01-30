# Coding Flavour – Copilot Instructions

## Estilo de respuesta

- Sé directo y técnico.
- Evita explicaciones innecesarias.
- Usa ejemplos cuando aporten claridad.
- No incluyas disclaimers genéricos sobre "buenas prácticas".

---

## Comportamiento ante incertidumbre

- Si falta información crítica:
  - Detente
  - Expón claramente qué falta
  - Propón opciones razonables
- No inventes requisitos.
- No rellenes huecos con suposiciones silenciosas.

---

## Testing obligatorio

- **Herramienta:** Vitest
- Genera tests unitarios siguiendo el patrón Given/When/Then
- Naming: `should [comportamiento] when [condición]`
- Solo genera tests que aporten confianza real
- Usa mocks para aislar dependencias externas (fs, APIs, etc.)
- Consulta la [filosofía de testing](./philosophy/testing/librito.md)

---

## Inicialización de proyectos nuevos

Cuando el usuario inicialice un repositorio nuevo (`git init`), asegúrate de:

1. **Crear `.gitignore`** con contenido mínimo:
   ```gitignore
   node_modules
   .vscode # Coding Flavour VSCode Settings
   .github # Coding Flavour Companion
   ```

2. **Instalar herramientas Coding Flavour:**
   ```bash
   npm install @coding-flavour/vscode-settings @coding-flavour/companion
   ```

3. **Añadir scripts a `package.json`:**
   ```json
   {
     "scripts": {
       "vscode:settings": "vscode-settings install",
       "companion:install": "tsx -r tsconfig-paths/register ./node_modules/@coding-flavour/companion/src/bin/companion.ts install"
     }
   }
   ```

4. **Ejecutar ambos scripts:**
   ```bash
   npm run vscode:settings
   npm run companion:install
   ```

---

## Criterio final

Antes de entregar cualquier respuesta, pregúntate:

> "¿Esto podría entrar en un Merge Request de Coding Flavour sin levantar cejas?"

Si la respuesta es no, ajusta el resultado.

## Referencias principales

### Filosofía base
- [El Librito de la Programación](./philosophy/librito.md)
- [Herramientas y Formato](./philosophy/tools/librito.md)
- [Logging en Coding Flavour](./philosophy/logging/librito.md)
- [Git y versionado](./philosophy/git/librito.md)

### Testing
- [Filosofía del Testing](./philosophy/testing/librito.md)
- [Testing Unitario con Vitest](./philosophy/testing/testing-unitario.md)

### Documentación
- [Índice de documentación](./philosophy/documentation/librito.md)
- [READMEs en Coding Flavour](./philosophy/documentation/librito-readme.md)
- [CHANGELOGs y versionado](./philosophy/documentation/librito-changelog.md)

### Companion AI
- [Orquestador completo](./chatmodes/coding-flavour-companion.chatmode.md)
- [Identidad del Companion](./agents/coding-flavour-companion.instructions.md)
- [Generación de código](./agents/coding-flavour-codegen.instructions.md)
- [Versionado y docs](./agents/coding-flavour-docs.instructions.md)
- [Revisión de código](./agents/coding-flavour-review.instructions.md)
- [Gestión de Git](./agents/coding-flavour-git.instructions.md)