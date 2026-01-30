# 🛠️ Herramientas y Formato en Coding Flavour

## Editor principal

- **VSCode** es el editor estándar del equipo
- La configuración se gestiona mediante `@coding-flavour/vscode-settings`

---

## Formato de código

El formato de código en Coding Flavour **no depende de herramientas externas** como ESLint o Prettier instaladas globalmente.

En su lugar, usamos **`@coding-flavour/vscode-settings`**, que configura VSCode con linting integrado y las reglas del equipo.

### Instalación

```bash
npm install @coding-flavour/vscode-settings
```

### Configuración en `package.json`

```json
{
  "scripts": {
    "vscode:settings": "vscode-settings install"
  }
}
```

### Ejecución

```bash
npm run vscode:settings
```

Esto genera la carpeta `.vscode/` con la configuración del equipo, incluyendo:
- Formato automático al guardar
- Reglas de indentación (4 espacios, sin tabs)
- Single quotes en strings
- Semicolons al final de statements
- Configuración de lenguajes soportados

👉 La carpeta `.vscode/` está en `.gitignore` porque cada desarrollador la genera localmente.

---

## Lenguaje preferido

- **TypeScript** sobre JavaScript
- Para proyectos nuevos con JavaScript, siempre usar TypeScript
- Configuración estricta recomendada

### Configuración TypeScript recomendada

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## Módulos JavaScript

- Prioridad absoluta: **ES Modules (ESM)**
- `package.json` debe incluir `"type": "module"`
- Usar sintaxis `import`/`export` siempre
- Evitar CommonJS (`require`/`module.exports`) excepto casos heredados

---

## Reglas de formato (aplicadas por vscode-settings)

| Regla | Valor |
|-------|-------|
| Indentación | 4 espacios |
| Tabs | No |
| Semicolons | Sí |
| Quotes | Single (`'`) |
| Trailing commas | ES5 |
| Bracket spacing | Sí |

---

## Criterio

👉 El Companion no debe generar código que contradiga estas reglas de formato.

👉 Si un proyecto no tiene `@coding-flavour/vscode-settings` instalado, debe sugerirse su instalación.
