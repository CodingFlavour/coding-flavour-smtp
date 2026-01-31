type TemplateFunction = (from: string, message: string, options: { name: string }) => string;

const isTemplateKey = (key: string): key is keyof typeof TEMPLATES => {
  return Object.keys(TEMPLATES).includes(key);
}

const getPortfolioTemplate: TemplateFunction = (from, message, { name }) => {
  return `From ${name} - ${from} \n\n ${message}`;
}

const getWiseSeekerTemplate: TemplateFunction = (from) => {
  return `Wise Seeker Request from ${from}`;
}

const TEMPLATES = {
  PORTFOLIO: getPortfolioTemplate,
  WISE_SEEKER: getWiseSeekerTemplate,
}

export default TEMPLATES;
export {
  isTemplateKey
}