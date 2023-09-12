import sgMail, { MailDataRequired } from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : "";
const from = process.env.SENDGRID_FROM ? process.env.SENDGRID_FROM : "";
sgMail.setApiKey(apiKey);

const SendGrid = () => {
  const sendMail = async (
    to: string,
    subject: string,
    html: string
  ) => {
    const msg: MailDataRequired = {
      to,
      from,
      subject,
      text: html,
      html,
    };
    console.log(msg);
    const [response] = await sgMail.send(msg);
    return response;
  };
  return { sendMail };
};

export default SendGrid;
