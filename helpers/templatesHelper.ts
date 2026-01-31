import { Options } from "./options";

type TemplateFunction = (from: string, message: string, options: { name: string }) => string;

const isTemplateKey = (key: string): key is Options => {
  return Object.keys(TEMPLATES).includes(key);
}

const getPortfolioTemplate: TemplateFunction = (from, message, { name }) => {
  return `From ${name} - ${from} \n\n ${message}`;
}

const getWiseSeekerTemplate: TemplateFunction = (from, _message, _options) => {
  return `Wise Seeker Request from ${from}`;
}

const TEMPLATES: Record<Options, TemplateFunction> = {
  [Options.PORTFOLIO]: getPortfolioTemplate,
  [Options.WISE_SEEKER]: getWiseSeekerTemplate,
}

export default TEMPLATES;
export {
  isTemplateKey
}