enum TEMPLATES {
  PORTFOLIO,
  TICKET_CREATED,
}

const getTicketCreatedTemplate = () => {
  return (ticketId: number, pass?: string) => {
    return `Hello!
    Your ticket has been created successfully.

    You can refer to the ticket ID "${ticketId}" for any further queries.
    ${pass ? `Your pass to access the ticket is: ${pass}` : ""}

    Thank you for using our service!`;
  }
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
    default:
      throw new Error("Template not found"); 
  }
};

const buildTemplate = (
  template: TEMPLATES,
) => {
  switch (template) {
    case TEMPLATES.TICKET_CREATED:
      return getTicketCreatedTemplate();
    default:
      throw new Error("Template not found");
  }
}

export { TEMPLATES, getTemplate, buildTemplate };
