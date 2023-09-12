import { Request, NextFunction, Response } from "express";
import SendGrid from "../services/emailService";
import { TEMPLATES, getTemplate } from "../helpers/templatesHelper";
import { getCodingFlavourEmail } from "../helpers/emailHelper";

interface IEmailRequestParams {
  from: string;
  to: string;
  name: string;
  message: string;
}

const PORTFOLIO_SUBJECT = "Portfolio contact";
const REGEX_EMAIL_VALIDATOR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const sendMail = (
  req: Request<IEmailRequestParams>,
  res: Response,
  next: NextFunction
) => {
  try {
    const sendgrid = SendGrid();
    const { from, to, name, message } = req.body;

    const codingFlavourEmail = getCodingFlavourEmail(to);
    if (!codingFlavourEmail) {
      res.send("'To' does not exists");
      next();
      return;
    }
    if (!name || !message) {
      res.send("Empty body params");
      next();
      return;
    }
    if (!RegExp(REGEX_EMAIL_VALIDATOR).exec(from)) {
      res.send("Not valid 'From' email");
      next();
      return;
    }
    const html = getTemplate(TEMPLATES.PORTFOLIO, from, name, message);
    sendgrid.sendMail(codingFlavourEmail, PORTFOLIO_SUBJECT, html);
    res.send("OK");
  } catch (e) {
    next(e);
  }
};

export { sendMail };
