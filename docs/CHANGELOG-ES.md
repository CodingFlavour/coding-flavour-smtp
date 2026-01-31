
# Registro de cambios

## 💅 [1.1.2](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.2)

- Añadida batería de tests unitarios para emailController, emailValidations y gmailService.
- Añadido mock de Express para tests.
- Mejorada configuración TypeScript y build ESM para despliegue.

## 💅 [1.1.1](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.1)

- Actualizadas dependencias del proyecto.

## 🚀 [1.1.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.0)

- Añadida integración con Gmail usando nodemailer con autenticación 2FA.
- El servicio por defecto ahora usa Gmail en lugar de SendGrid.
- SendGrid se mantiene disponible en la librería para compatibilidad.
- Añadidas variables de entorno `GMAIL_USER` y `GMAIL_APP_PASSWORD`.
- Añadida funcionalidad para controlar dinámicamente el subject y template del email.
- Nuevo parámetro opcional en el request: `templateKey` (controla tanto template como subject).
- Creado helper `SUBJECTS` para gestionar asuntos predefinidos.
- Parámetro `message` ahora es opcional para casos como Wise Seeker.
- Mantiene compatibilidad hacia atrás con valores por defecto 'PORTFOLIO'.

## 🚀 [1.0.1](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.0.1)

- La librería ahora expone varias funciones para enviar emails a consumidores. Expone el SMTP principal para enviar emails, y funciones auxiliares como templates para construir los emails.

## 🚀 [1.0.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.0.0)

- Lanzamiento inicial de Coding Flavour SMTP.
