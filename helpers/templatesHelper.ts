const getTicketCreatedTemplate = (ticketId: number, pass?: string) => {
  return `Hello!
    Your ticket has been created successfully.

    You can refer to the ticket ID "${ticketId}" for any further queries.
    ${pass ? `Your pass to access the ticket is: ${pass}` : ""}

    Thank you for using our service!`;
}

const getPortfolioTemplate = (from: string, name: string, message: string) => {
  return `From ${name} - ${from} \n\n ${message}`;
}

const TEMPLATES = {
  TICKET_CREATED: getTicketCreatedTemplate,
  PORTFOLIO: getPortfolioTemplate
}

export default TEMPLATES;