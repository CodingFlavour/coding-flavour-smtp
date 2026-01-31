# Coding Flavour SMTP

![Tu cartero de confianza](https://media.tenor.com/YUtTGfa4wQkAAAAM/annoyed-akward.gif)
## ¿Qué es?

Coding Flavour SMTP es una herramienta para la centralización de correos electrónicos en Coding Flavour. Cualquier tema relacionado con correos electrónicos tendrá sus funciones aquí.

## ¿Cómo se instala?

### Programaticamente

#### Local

Para usarlo de forma local:

- Clonar el repositorio
- Instalar las dependencias de raíz: `npm i`
- Vincular el proyecto a través de NPM Link, ejecutando en la raíz: `npm link`
- En cualquier otro proyecto, vincular `smtp` con `npm link @coding-flavour/smtp`

En este punto, ya puedes importar el SMTP en tu proyecto desde `node_modules`

#### Artifactory

Para usarlo con _Artifactory_:

- Tener activo el servidor de _Artifactory_ activo
- Añadir a las dependencias del `package.json` del consumidor la librería de `smtp`: `@coding-flavour/smtp: "1.0.0"`
- Instalar las dependencias: `npm i`

En este punto, ya puedes importar el SMTP en tu proyecto desde `node_modules`

### Como servidor

Para usarlo como servidor:

- Clonar el repositorio
- Instalar las dependencias de raíz: `npm i`
- Crear un archivo _.env_ como el de _.env.example_
- Ejecutar el servidor: `npm run dev`
- Utilizar una herramienta como _PostMan_ para lanzar peticiones al servidor

## ¿Cómo se usa?

### Programaticamente

Esta librería expone varias funciones para el envío de correos electrónicos. A continuación se detallan las funciones disponibles:

- `TEMPLATES`: Un objeto que contiene las plantillas de correo electrónico disponibles. Cada plantilla tiene un nombre y una función asociada que genera el contenido del correo electrónico.
- `getCodingFlavourEmail`: Una función que devuelve la dirección de correo electrónico de Coding Flavour, utilizada para enviar correos electrónicos.
- `GmailService`: Un objeto que contiene la configuración y las funciones necesarias para enviar correos electrónicos a través de Gmail con nodemailer (servicio por defecto).
  - `sendMail`: Una función que toma los parámetros del correo electrónico y lo envía a través de Gmail.
- `SendGrid`: Un objeto que contiene la configuración y las funciones necesarias para enviar correos electrónicos a través de SendGrid (mantenido para compatibilidad).
  - `sendMail`: Una función que toma los parámetros del correo electrónico y lo envía a través de SendGrid.

## ¿Qué ofrece este conjunto de herramientas?

Con esta herramienta se quiere ofrecer una solución para la gestión de correos electrónicos en Coding Flavour. Se busca centralizar la gestión de correos electrónicos y facilitar su uso a través de una API sencilla y fácil de usar.

- Generación de plantillas de correos electrónicos.
- Envío de correos electrónicos a través de Gmail con autenticación 2FA (servicio por defecto).
- Envío de correos electrónicos a través de SendGrid (mantenido para compatibilidad).
- Posibilidad de personalizar las plantillas de correo electrónico.

## YAML

_En curso_

## Créditos

Creado por Daniel Sánchez Betancor para el equipo Coding Flavour
