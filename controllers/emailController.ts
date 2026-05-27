import Logger from "@coding-flavour/logger";
import SUBJECTS from "../helpers/subjectsHelper";
import TEMPLATES from "../helpers/templatesHelper";
import GmailService from "../services/gmailService";
import type { EmailData } from "../types/Email";
import { OptionalParams, RequireParams, validateOptionalParams, validateRequiredParams } from "./validations/emailValidations";

const logger = Logger('SMTP Email Controller');

interface SendEmailOptions {
  dryRun?: boolean; // dryRun defaults to true. Sending must be an intentional action. Pass { dryRun: false } to send
}

const sendMail = async (emailData: EmailData, { dryRun = true }: SendEmailOptions) => {
  const { from, to, name, message, templateKey, ...rest } = emailData;

  const requireParams = validateRequiredParams({ from, to });

  if (requireParams.error) {
    logger.error("Error validating required params", { error: requireParams.error });

    throw new Error(requireParams.error);
  }

  const optionalParams = validateOptionalParams({ templateKey, name, message, ...rest });

  if (optionalParams.error) {
    logger.error("Error validating optional params", { error: optionalParams.error });

    throw new Error(optionalParams.error);
  }

  if (dryRun !== false) {
    logger.log("Dry run mode - Email not sent - Email content", {
      ...requireParams,
      ...optionalParams
    });

    return;
  }

  await trySendMail(requireParams, optionalParams);
};

const trySendMail = async (requiredParams: RequireParams, optionalParams: OptionalParams) => {
  const { from } = requiredParams;
  const { templateKey, message } = optionalParams;

  const template = TEMPLATES[templateKey];
  const subject = SUBJECTS[templateKey];

  const html = template(from, message, {
    ...optionalParams
  });

  try {
    const gmailService = GmailService();

    await gmailService.sendMail(requiredParams.to, subject, html);
  } catch (e) {
    logger.error("Error sending email", { error: e });

    throw new Error("Error sending email");
  }
}

export default sendMail;

