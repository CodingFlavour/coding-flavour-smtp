import { NextFunction, Request, Response } from "express";
import SUBJECTS, { isSubjectKey } from "../helpers/subjectsHelper";
import TEMPLATES, { isTemplateKey } from "../helpers/templatesHelper";
import GmailService from "../services/gmailService";
import { OptionalParams, RequireParams, validateOptionalParams, validateRequiredParams } from "./validations/emailValidations";

interface IEmailRequestParams {
  from: string;
  to: string;
  name: string;
  message: string;
  templateKey?: string;
}


const sendMail = async (
  req: Request<IEmailRequestParams>,
  res: Response,
  next: NextFunction
) => {
  const { from, to, name, message, templateKey } = req.body;

  const requireParams = validateRequiredParams({ from, to });

  if (requireParams.error) {
    res.send(requireParams.error);

    return;
  }

  const optionalParams = validateOptionalParams({ templateKey, name, message });

  if (optionalParams.error) {
    res.send(optionalParams.error);
    return;
  }

  const errorSendingMail = await trySendMail(requireParams, optionalParams);

  if (errorSendingMail) {
    res.send(errorSendingMail);
    return;
  }

  res.send("OK");
};

const trySendMail = async (requiredParams: RequireParams, optionalParams: OptionalParams) => {
  const { from } = requiredParams;
  const { templateKey, message } = optionalParams;

  if (!isTemplateKey(templateKey) || !isSubjectKey(templateKey)) {
    return "Invalid template key";
  }

  const template = TEMPLATES[templateKey];
  const subject = SUBJECTS[templateKey];

  const html = template(from, message, {
    name: optionalParams.name || 'No Name'
  });

  try {
    const gmailService = GmailService();

    await gmailService.sendMail(requiredParams.to, subject, html);
  } catch (e) {
    return "Error sending email";
  }
}

export { sendMail };

