import { NextFunction, Request, Response } from "express";
import { getCodingFlavourEmail } from "../helpers/emailHelper";
import GmailService from "../services/gmailService";
import TEMPLATES from "../helpers/templatesHelper";
import SUBJECTS from "../helpers/subjectsHelper";

interface IEmailRequestParams {
  from: string;
  to: string;
  name: string;
  message: string;
  templateKey?: string;
  subjectKey?: string;
  templateData?: any;
}

const REGEX_EMAIL_VALIDATOR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const sendMail = async (
  req: Request<IEmailRequestParams>,
  res: Response,
  next: NextFunction
) => {
  const { from, to, name, message, templateKey, subjectKey, templateData } = req.body;

  if (!name || !message) {
    res.send("Empty body params");

    return;
  }

  if (typeof from !== "string" || typeof to !== "string") {
    res.send("Invalid body params");

    return;
  }

  if (!RegExp(REGEX_EMAIL_VALIDATOR).exec(from)) {
    res.send("Not valid 'From' email");

    return;
  }

  const codingFlavourEmail = getCodingFlavourEmail(to);

  if (!codingFlavourEmail) {
    res.send("'To' does not exist");

    return;
  }

  const templateKeyToUse = templateKey || 'PORTFOLIO';
  const subjectKeyToUse = subjectKey || 'PORTFOLIO';

  const template = TEMPLATES[templateKeyToUse as keyof typeof TEMPLATES];
  const subject = SUBJECTS[subjectKeyToUse as keyof typeof SUBJECTS];

  if (!template) {
    res.send("Invalid template key");
    return;
  }

  if (!subject) {
    res.send("Invalid subject key");
    return;
  }

  const html = templateData 
    ? template(...Object.values(templateData))
    : template(from, name, message);

  try {
    const gmailService = GmailService();
    await gmailService.sendMail(codingFlavourEmail, subject, html);

    res.send("OK");
  } catch (e) {
    next(e);
  }
};

export { sendMail };

