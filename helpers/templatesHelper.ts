enum TEMPLATES {
  PORTFOLIO,
}
const getTemplate = (
  template: TEMPLATES,
  from: string,
  name: string,
  message: string
) => {
  switch (template) {
    case TEMPLATES.PORTFOLIO:
      return `From ${name} - ${from} \n\n ${message}`;
  }
};

export { TEMPLATES, getTemplate };
