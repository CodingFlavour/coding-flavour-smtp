import { Options } from "./options";

type TemplateFunction = (
  from: string,
  message: string,
  options: { [key: string]: string }) => string;

const isTemplateKey = (key: string): key is Options => {
  return Object.keys(TEMPLATES).includes(key);
}

const getPortfolioTemplate: TemplateFunction = (from, message, { name }) => {
  return `From ${name} - ${from} \n\n ${message}`;
}

const getKeenlyTemplate: TemplateFunction = (from, _message, _options) => {
  return `Keenly Request from ${from}`;
}

const getKenlyFeedbackTemplate: TemplateFunction = (from, message, { issue }) => {
  return `Issue: ${issue}<br />Details: ${message}<br />User email: ${from}`;
}

const getFamilyVaultInvitationTemplate: TemplateFunction = (from, _message, { uuid }) => {
  return `Hola! Te han invitado a FamilyVault.
Haz clic aquí para crear tu cuenta:
https://familia.codingflavour.com/register?token=${uuid}`;
}

const controlPanelInvitation: TemplateFunction = (from, _message, { uuid, email }) => {
  const link = `https://control-panel.codingflavour.com/auth/register?uuid=${uuid}&email=${email}`;
  return `
¡Hola!
<br /> <br />
Has sido invitado a Coding Flavour Control Panel.
<br /><br />
Haz clic aquí para crear tu cuenta:
<a href="${link}">${link}</a>
<br /><br />
Si el enlace no funciona, copia y pega la siguiente URL en tu navegador:
${link}`;
}

const TEMPLATES: Record<Options, TemplateFunction> = {
  [Options.PORTFOLIO]: getPortfolioTemplate,
  [Options.KEENLY]: getKeenlyTemplate,
  [Options.KEENLY_FEEDBACK]: getKenlyFeedbackTemplate,
  [Options.FAMILY_VAULT_INVITATION]: getFamilyVaultInvitationTemplate,
  [Options.CONTROL_PANEL_INVITATION]: controlPanelInvitation
}

export default TEMPLATES;
export {
  isTemplateKey
}