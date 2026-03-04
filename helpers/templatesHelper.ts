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

const TEMPLATES: Record<Options, TemplateFunction> = {
  [Options.PORTFOLIO]: getPortfolioTemplate,
  [Options.KEENLY]: getKeenlyTemplate,
  [Options.KEENLY_FEEDBACK]: getKenlyFeedbackTemplate
}

export default TEMPLATES;
export {
  isTemplateKey
}