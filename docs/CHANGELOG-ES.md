# Registro de cambios

## 🚀 [1.2.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.2.0)

- Añadida funcionalidad para controlar dinámicamente el subject y template del email.
- Nuevos parámetros opcionales en el request: `templateKey`, `subjectKey` y `templateData`.
- Creado helper `SUBJECTS` para gestionar asuntos predefinidos.
- Mantiene compatibilidad hacia atrás con valores por defecto 'PORTFOLIO'.

## 🚀 [1.1.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.0)

- Añadida integración con Gmail usando nodemailer con autenticación 2FA.
- El servicio por defecto ahora usa Gmail en lugar de SendGrid.
- SendGrid se mantiene disponible en la librería para compatibilidad.
- Añadidas variables de entorno `GMAIL_USER` y `GMAIL_APP_PASSWORD`.

## 🚀 [1.0.1](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.0.1)

- La librería ahora expone varias funciones para enviar emails a consumidores. Expone el SMTP principal para enviar emails, y funciones auxiliares como templates para construir los emails.

## 🚀 [1.0.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.0.0)

- Lanzamiento inicial de Coding Flavour SMTP.
