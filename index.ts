import sendMail, { EmailData } from "./controllers/emailController";
import { getCodingFlavourEmail } from "./helpers/emailHelper";
import SUBJECTS from "./helpers/subjectsHelper";
import TEMPLATES from "./helpers/templatesHelper";
import SendGrid from "./services/emailService";
import GmailService from "./services/gmailService";

export {
  EmailData,
  getCodingFlavourEmail, GmailService, SendGrid, sendMail, SUBJECTS, TEMPLATES
};

