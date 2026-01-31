# Coding Flavour SMTP

![Your trusted Postman](https://media.tenor.com/YUtTGfa4wQkAAAAM/annoyed-akward.gif)

## What is it?

Coding Flavour SMTP is a tool for centralizing emails in Coding Flavour. Any topic related to emails will have its functions here.

## How to install it?

### Programmatically
#### Local
To use it locally:
- Clone the repository
- Install the root dependencies: `npm i`
- Link the project through NPM Link, executing in the root: `npm link`
- In any other project, link `smtp` with `npm link @coding-flavour/smtp`

In this point, you can already import the SMTP in your project from `node_modules`

#### Artifactory

To use it with _Artifactory_:

- Have the _Artifactory_ server active
- Add to the dependencies of the `package.json` of the consumer the library of `smtp`: `@coding-flavour/smtp: "1.0.0"`
- Install the dependencies: `npm i`

In this point, you can already import the SMTP in your project from `node_modules`

### As a server

To use it as a server:

- Clone the repository
- Install the root dependencies: `npm i`
- Create a _.env_ file like the one in _.env.example_
- Run the server: `npm run dev`
- Use a tool like _PostMan_ to send requests to the server

## How to use it?

### Programmatically

This library exposes several functions for sending emails. The available functions are detailed below:
- `TEMPLATES`: An object that contains the available email templates. Each template has a name and an associated function that generates the content of the email.
- `getCodingFlavourEmail`: A function that returns the Coding Flavour email address, used for sending emails.
- `GmailService`: An object that contains the configuration and functions necessary to send emails through Gmail with nodemailer (default service).
  - `sendMail`: A function that takes email parameters and sends it through Gmail.
- `SendGrid`: An object that contains the configuration and functions necessary to send emails through SendGrid (maintained for compatibility).
  - `sendMail`: A function that takes email parameters and sends it through SendGrid.

## What does this toolset offer?

With this tool, we want to offer a solution for managing emails in Coding Flavour. The goal is to centralize email management and facilitate its use through a simple and easy-to-use API.

- Generation of email templates.
- Sending emails through Gmail with 2FA authentication (default service).
- Sending emails through SendGrid (maintained for compatibility).
- Centralized management of email sending.

## YAML

_In Progress..._

## Credits

Created by Daniel Sanchez Betancor for the Coding Flavour team