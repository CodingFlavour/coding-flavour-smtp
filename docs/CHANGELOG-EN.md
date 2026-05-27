

# Changelog

## [3.0.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/3.0.0) - 2026-05-25

#### 🔥 Removals

- Express HTTP server removed. The package no longer exposes an HTTP service — it is exclusively a consumption library.
- `trySendMail` removed from public exports. The main API function is now `sendMail`.
- Scripts `dev` and `preprod` removed from `package.json`.

#### 🚀 New features

- `sendMail` exposed as the main library function, replacing `trySendMail`.
- New `SendEmailOptions` parameter with `dryRun` flag (enabled by default). Pass `{ dryRun: false }` to send the email; without it, the function validates and logs the content without sending.
- `EmailData` and `SendEmailOptions` exported from the entry point for consumers to type their calls.

#### 🧪 Testing

- `emailController` and `emailValidations` tests restructured under `test/unit/controllers/`.
- Express mock removed and replaced with a shared, reusable logger mock.

#### 📦 Dependencies

- Removed `express`, `cors` and `dotenv` from production dependencies.
- Removed `@types/express`, `@types/cors`, `nodemon`, `ts-node` and `tsc-esm-fix` from development dependencies.

## [2.0.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/2.0.0) - 2026-03-27

#### 🚀 New features

- Added templates for Keenly, Keenly Feedback, Family Vault Invitation, and Control Panel Invitation.
- `trySendMail` is now exported from the library entry point.
- `TemplateFunction` now accepts a flexible options object (`{ [key: string]: string }`) instead of `{ name: string }`.

#### 🔥 Removals

- `WISE_SEEKER` template, option, and subject removed.
- Unit test suite removed.

#### 💅 Internal polish

- `@coding-flavour/logger` activated in the controller (was previously commented out).
- Package renamed to `@coding-flavour/smtp`.

#### 📦 Dependencies

- `nodemailer` promoted to production dependency.

## 🔥 [1.2.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.2.0)

- For security, removed EMAIL_DEFAULT fallback in getCodingFlavourEmail: now only explicit team members are allowed as recipients. If the recipient is not valid, the endpoint fails.

## 💅 [1.1.2](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.2)

- Added unit test suite for emailController, emailValidations, and gmailService.
- Added Express mock for tests.
- Improved TypeScript and ESM build configuration for deployment.

## 💅 [1.1.1](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.1)

- Updated project dependencies.

## 🚀 [1.1.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.1.0)

- Added Gmail integration using nodemailer with 2FA authentication.
- Default service now uses Gmail instead of SendGrid.
- SendGrid remains available in the library for compatibility.
- Added environment variables `GMAIL_USER` and `GMAIL_APP_PASSWORD`.
- Added functionality to dynamically control email subject and template.
- New optional parameter in request: `templateKey` (controls both template and subject).
- Created `SUBJECTS` helper to manage predefined subjects.
- Parameter `message` is now optional for cases like Wise Seeker.
- Maintains backward compatibility with 'PORTFOLIO' default values.

## 🚀 [1.0.1](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.0.1)

- The library now exposes several functions for sending emails to consumers. It exposes the main SMTP to send emails, and auxiliary functions like templates to build the emails.

## 🚀 [1.0.0](https://github.com/CodingFlavour/coding-flavour-smtp/releases/tag/1.0.0)

- Initial release of Coding Flavour SMTP.
