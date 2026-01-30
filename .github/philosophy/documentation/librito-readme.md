# 📖 READMES en Coding Flavour

En Coding Flavour, los archivos `README.md` son la primera línea de documentación para cualquier proyecto. Deben ser claros, concisos y útiles para cualquier desarrollador que se acerque al proyecto por primera vez.

El `README` no es solo una formalidad; es una herramienta esencial para:
- Entender rápidamente el propósito del proyecto
- Conocer las tecnologías utilizadas
- Saber cómo ejecutar y contribuir al proyecto

## Generación de README.md

A nivel de raíz, siempre debe existir un `README.md`.

Este `README.md` es SIEMPRE IGUAL:

```md
# Coding Flavour <Nombre del Proyecto>

- Lee la documentación en [español](docs/README/README-ES.md)
- Read the documentation in [english](docs/README/README-EN.md)
```

---

## Documentación detallada

Cada proyecto debe tener documentación detallada en la carpeta `docs/README/`, tanto en inglés como en español.

Estos documentos siguen la misma estructura y contenido, adaptados a cada idioma.

---

### Estructura obligatoria

Un README de Coding Flavour debe incluir, como mínimo, las siguientes secciones:

1. ¿Qué es?
- Qué es el proyecto
- Para qué existe
2. Uso
- Local
- Producción
- Consumo desde otros proyectos si aplica
3. ¿Cómo funciona?
- Explicación humana de la lógica principal
- Decisiones técnicas relevantes
4. Cómo ejecutar el proyecto
- Instalación
- Comandos básicos
5. Notas relevantes
- Decisiones importantes
- Limitaciones conocidas
6. Contribuir
- Enlace a guía de contribución si existe

Entre posibles secciones adicionales:
- Endpoints

---

## Ejemplo de README.md

<pre>
# Coding Flavour Artifactory

## ¿Qué es?

`Artifactory` es una plataforma privada para la gestión de paquetes npm, diseñada para almacenar y servir versiones de herramientas internas dentro de los `node_modules` de cualquier aplicación.

Por ejemplo, en un proyecto como `ArtifactoryWeb`, puedes importar el módulo common directamente desde el scope privado:

```javascript
import { algo } from '@coding-flavour/common';
```

## Uso

### Hosting local

Para poder utilizar `Artifactory` como servidor de paquetes, sigue estos pasos:

1. Configurar .npmrc

Debes configurar tu archivo `.npmrc` para redirigir las peticiones del scope privado a tu servidor local:

```txt
@coding-flavour:registry=http://localhost:8000
```

2. Descargar y ejecutar el servidor

Clona este repositorio y levanta el servidor:

```bash
git clone <repo>
cd coding-flavour-artifactory
npm i
npm run dev
```

Con esto, cualquier paquete `@coding-flavour/*` será accesible desde tu entorno local.

### Consumo en proyectos

Para consumir un módulo desde `Artifactory`, simplemente instálalo como cualquier otro paquete:

```bash
npm install @coding-flavour/common
```

O bien decláralo directamente en tu `package.json`:

```json
{
  "dependencies": {
    "@coding-flavour/common": "^1.0.0"
  }
}
```

## ¿Cómo funciona?

`Artifactory` actúa como un proxy entre el cliente y el repositorio real de paquetes `NPM`. El flujo de instalación de un paquete sigue estos pasos:

- El cliente (`NPM`) solicita un paquete con el scope `@coding-flavour`. Gracias a la configuración en `.npmrc`, esta petición se dirige al servidor de `Artifactory`.
- La solicitud llega con el nombre codificado como `@coding-flavour%2Fmodulo`, que `Artifactory` decodifica automáticamente como `coding-flavour/modulo`.
- `Artifactory` responde con un `metadata.json` que contiene la lista de versiones y dependencias disponibles. **Cuidado**: Los tags que no cumplan el formato `SEMVER` son descartados de la respuesta.
- Posteriormente, `NPM` realiza una segunda petición con los parámetros `p=modulo` y `v=1.0.0` para obtener el paquete en formato `tarball`.
- `Artifactory` empaqueta el módulo solicitado y devuelve el `tarball` al cliente.
- `NPM` descomprime el paquete y lo instala en `node_modules`, listo para su uso como cualquier otro módulo público.

Este comportamiento se mantiene tanto para instalaciones como para actualizaciones, permitiendo a `Artifactory` encargarse de la gestión completa de dependencias, versiones y empaquetado.

## Endpoints

Puedes ver los endpoints a través del fichero [swagger](../swagger.yaml)

## Contribuciones

Si deseas contribuir al proyecto, puedes encontrar más información en el archivo [CONTRIBUTING.md](../CONTRIBUTING.md).
</pre>

---

👉 El Companion debe generar README siguiendo este esquema, sin relleno innecesario.