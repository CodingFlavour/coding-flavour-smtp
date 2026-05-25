# Coding Flavour SMTP

![Tu cartero de confianza](https://media.tenor.com/YUtTGfa4wQkAAAAM/annoyed-akward.gif)

## ¿Qué es?

Coding Flavour SMTP es la librería central de envío de correos electrónicos del ecosistema Coding Flavour. Centraliza las plantillas, los asuntos y la lógica de envío para que cualquier proyecto del equipo pueda enviar correos sin reimplementar nada.

No expone ningún servidor HTTP. Es una librería de consumo puro.

---

## ¿Cómo se usa?

### Instalación local

- Clonar el repositorio
- Instalar dependencias: `npm i`
- Vincular con NPM Link en la raíz: `npm link`
- En el proyecto consumidor: `npm link @coding-flavour/smtp`

### Instalación desde Artifactory

- Añadir a `package.json` del consumidor: `"@coding-flavour/smtp": "3.0.0"`
- Instalar: `npm i`

### Consumo desde otros proyectos

La función principal es `sendMail`. Acepta los datos del correo y un objeto de opciones con el flag `dryRun`.

```typescript
import { sendMail } from '@coding-flavour/smtp'
import type { EmailData, SendEmailOptions } from '@coding-flavour/smtp'

// Dry-run (por defecto) — valida y registra el contenido sin enviar
await sendMail(
  { from: 'usuario@dominio.com', to: 'dsanchez', name: 'Usuario', message: 'Hola' }
)

// Envío real — debe ser una acción explícita e intencionada
await sendMail(
  { from: 'usuario@dominio.com', to: 'dsanchez', name: 'Usuario', message: 'Hola' },
  { dryRun: false }
)
```

#### Parámetros de `EmailData`

| Campo | Tipo | Requerido | Descripción |
|---|---|---|---|
| `from` | `string` | Sí | Email del remitente (debe ser un email válido) |
| `to` | `string` | Sí | Destinatario — miembro del equipo: `dsanchez`, `amayor`, `kopel` |
| `name` | `string` | Sí | Nombre del remitente |
| `message` | `string` | Sí | Cuerpo del mensaje |
| `templateKey` | `string` | No | Clave de la plantilla. Por defecto: `portfolio` |

#### Templates disponibles

| Clave | Descripción |
|---|---|
| `portfolio` | Contacto general desde el portfolio |
| `keenly` | Solicitud de acceso a Keenly |
| `keenly_feedback` | Feedback de Keenly |
| `family_vault_invitation` | Invitación a Family Vault |
| `control_panel_invitation` | Invitación al Panel de Control |

#### API completa exportada

| Export | Tipo | Descripción |
|---|---|---|
| `sendMail` | `function` | Función principal de envío |
| `EmailData` | `type` | Tipo del objeto de datos del correo |
| `SendEmailOptions` | `type` | Tipo del objeto de opciones (`dryRun`) |
| `TEMPLATES` | `object` | Mapa de funciones de plantilla por clave |
| `SUBJECTS` | `object` | Mapa de asuntos por clave |
| `getCodingFlavourEmail` | `function` | Resuelve el email de un miembro del equipo |
| `GmailService` | `function` | Cliente de envío vía Gmail (nodemailer) |
| `SendGrid` | `function` | Cliente de envío vía SendGrid (compatibilidad) |

---

## ¿Cómo funciona?

La librería sigue una arquitectura de responsabilidad única por capa:

1. **`sendMail`** recibe los datos y las opciones, delega la validación y decide si enviar o hacer dry-run.
2. **Validaciones** comprueban que `from` sea un email válido y que `to` corresponda a un miembro del equipo registrado en las variables de entorno.
3. **Helpers** (`TEMPLATES`, `SUBJECTS`) construyen el contenido y el asunto del correo a partir de la `templateKey`.
4. **`GmailService`** ejecuta el envío real vía nodemailer con autenticación Gmail 2FA.

El flag `dryRun` está activo por defecto — enviar un correo debe ser siempre una acción explícita e intencionada del consumidor.

---

## ¿Cómo ejecutar el proyecto?

```bash
npm i
npm test                # Todos los tests
npm run test:unit       # Solo tests unitarios
npm run test:unit:debug # Tests unitarios con output completo
```

### Variables de entorno

Crea un `.env` a partir de `.env.example`:

```
EMAIL_DSANCHEZ=email@codingflavour.com
EMAIL_AMAYOR=email@codingflavour.com
EMAIL_KOPEL=email@codingflavour.com

GMAIL_USER=tu_cuenta@gmail.com
GMAIL_APP_PASSWORD=tu_app_password
```

---

## Notas relevantes

- **`dryRun: true` es el comportamiento por defecto.** Pasar `{ dryRun: false }` es un requisito explícito para enviar correos reales. Esto previene envíos accidentales durante el desarrollo o los tests.
- **`SendGrid` se mantiene por compatibilidad** pero el proveedor activo es Gmail. No se garantiza soporte activo de SendGrid.
- El consumidor es responsable de inicializar las variables de entorno antes de usar la librería. El proyecto no llama a `dotenv.config()` internamente.

---

## Créditos

Creado por Daniel Sánchez Betancor para el equipo Coding Flavour.
