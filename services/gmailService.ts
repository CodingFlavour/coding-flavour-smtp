import nodemailer from 'nodemailer';

const GmailService = () => {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("Environment not setted correctly");
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });

  const sendMail = async (
    to: string,
    subject: string,
    html: string
  ) => {
    const mailOptions = {
      from: user,
      to,
      subject,
      html,
    };

    const response = await transporter.sendMail(mailOptions);
    return response;
  };

  return { sendMail };
};

export default GmailService;
