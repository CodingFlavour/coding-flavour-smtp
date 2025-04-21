import { NextFunction, Request, Response } from "express";
import { getCodingFlavourEmail } from "../helpers/emailHelper";
import SendGrid from "../services/emailService";
import TEMPLATES from "../helpers/templatesHelper";

interface IEmailRequestParams {
  from: string;
  to: string;
  name: string;
  message: string;
}

const PORTFOLIO_SUBJECT = "Portfolio contact";
const REGEX_EMAIL_VALIDATOR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const sendMail = async (
  req: Request<IEmailRequestParams>,
  res: Response,
  next: NextFunction
) => {
  const { from, to, name, message } = req.body;

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

  const template = TEMPLATES.PORTFOLIO
  const html = template(from, name, message);

  try {
    const sendGrid = SendGrid();
    await sendGrid.sendMail(codingFlavourEmail, PORTFOLIO_SUBJECT, html);

    res.send("OK");
  } catch (e) {
    next(e);
  }
};

export { sendMail };

