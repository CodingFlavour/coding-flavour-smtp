import nodemailer from 'nodemailer';

const user = process.env.GMAIL_USER ? process.env.GMAIL_USER : '';
const pass = process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD : '';

const GmailService = () => {
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
