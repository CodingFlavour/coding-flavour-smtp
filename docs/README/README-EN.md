# Coding Flavour SMTP

![Your trusted Postman](https://media.tenor.com/YUtTGfa4wQkAAAAM/annoyed-akward.gif)

## What is it?

Coding Flavour SMTP is the central email sending library of the Coding Flavour ecosystem. It centralizes templates, subjects, and sending logic so any project in the team can send emails without reimplementing anything.

It does not expose any HTTP server. It is a pure consumption library.

---

## How to use it?

### Local installation

- Clone the repository
- Install dependencies: `npm i`
- Link with NPM Link at root: `npm link`
- In the consumer project: `npm link @coding-flavour/smtp`

### Installation from Artifactory

- Add to the consumer's `package.json`: `"@coding-flavour/smtp": "3.0.0"`
- Install: `npm i`

### Consuming from other projects

The main function is `sendMail`. It accepts email data and an options object with the `dryRun` flag.

```typescript
import { sendMail } from '@coding-flavour/smtp'
import type { EmailData, SendEmailOptions } from '@coding-flavour/smtp'

// Dry-run (default) — validates and logs the content without sending
await sendMail(
  { from: 'user@domain.com', to: 'dsanchez', name: 'User', message: 'Hello' }
)

// Real send — must be an explicit and intentional action
await sendMail(
  { from: 'user@domain.com', to: 'dsanchez', name: 'User', message: 'Hello' },
  { dryRun: false }
)
```

#### `EmailData` parameters

| Field | Type | Required | Description |
|---|---|---|---|
| `from` | `string` | Yes | Sender email (must be a valid email) |
| `to` | `string` | Yes | Recipient — team member: `dsanchez`, `amayor`, `kopel` |
| `name` | `string` | Yes | Sender name |
| `message` | `string` | Yes | Message body |
| `templateKey` | `string` | No | Template key. Default: `portfolio` |

#### Available templates

| Key | Description |
|---|---|
| `portfolio` | General contact from the portfolio |
| `keenly` | Keenly access request |
| `keenly_feedback` | Keenly feedback |
| `family_vault_invitation` | Family Vault invitation |
| `control_panel_invitation` | Control Panel invitation |

#### Full exported API

| Export | Type | Description |
|---|---|---|
| `sendMail` | `function` | Main sending function |
| `EmailData` | `type` | Email data object type |
| `SendEmailOptions` | `type` | Options object type (`dryRun`) |
| `TEMPLATES` | `object` | Map of template functions by key |
| `SUBJECTS` | `object` | Map of subjects by key |
| `getCodingFlavourEmail` | `function` | Resolves a team member's email from their name |
| `GmailService` | `function` | Gmail sending client (nodemailer) |
| `SendGrid` | `function` | SendGrid sending client (compatibility) |

---

## How does it work?

The library follows a single-responsibility architecture per layer:

1. **`sendMail`** receives data and options, delegates validation, and decides whether to send or dry-run.
2. **Validations** check that `from` is a valid email and that `to` corresponds to a team member registered in environment variables.
3. **Helpers** (`TEMPLATES`, `SUBJECTS`) build the email content and subject from the `templateKey`.
4. **`GmailService`** executes the real send via nodemailer with Gmail 2FA authentication.

The `dryRun` flag is active by default — sending an email must always be an explicit, intentional action by the consumer.

---

## How to run the project?

```bash
npm i
npm test                # All tests
npm run test:unit       # Unit tests only
npm run test:unit:debug # Unit tests with full output
```

### Environment variables

Create a `.env` from `.env.example`:

```
EMAIL_DSANCHEZ=email@codingflavour.com
EMAIL_AMAYOR=email@codingflavour.com
EMAIL_KOPEL=email@codingflavour.com

GMAIL_USER=your_account@gmail.com
GMAIL_APP_PASSWORD=your_app_password
```

---

## Relevant notes

- **`dryRun: true` is the default behavior.** Passing `{ dryRun: false }` is an explicit requirement to send real emails. This prevents accidental sends during development or testing.
- **`SendGrid` is maintained for compatibility** but the active provider is Gmail. Active SendGrid support is not guaranteed.
- The consumer is responsible for initializing environment variables before using the library. The project does not call `dotenv.config()` internally.

---

## Credits

Created by Daniel Sánchez Betancor for the Coding Flavour team.
