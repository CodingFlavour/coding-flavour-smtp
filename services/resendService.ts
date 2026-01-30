import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY : '';
const from = process.env.RESEND_FROM ? process.env.RESEND_FROM : '';

const ResendService = () => {
    const resend = new Resend(apiKey);

    const sendMail = async (
        to: string,
        subject: string,
        html: string
    ) => {
        const response = await resend.emails.send({
            from,
            to,
            subject,
            html,
        });

        return response;
    };

    return { sendMail };
};

export default ResendService;
