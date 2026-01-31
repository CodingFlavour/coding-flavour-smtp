import { getCodingFlavourEmail } from "../../helpers/emailHelper";
import { Options } from "../../helpers/options";
import { isSubjectKey } from "../../helpers/subjectsHelper";
import { isTemplateKey } from "../../helpers/templatesHelper";

const REGEX_EMAIL_VALIDATOR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

type WithError = { error?: string; }
type RequireParamsIntake = {
  from: any;
  to: any;
}

export type RequireParams = {
  from: string;
  to: string;
} & WithError

type OptionalParamsIntake = {
  templateKey?: any;
  name?: any;
  message?: any;
}

export type OptionalParams = {
  templateKey: Options;
  name: string;
  message: string;
} & WithError

const withError = <T>(intake: T, err: string) => ({ ...intake, error: err });
const isNotNull = (value: any): value is NonNullable<any> => value !== null && value !== undefined;
const isValidStr = (value: any): value is string => typeof value === "string" && value.trim() !== "";

const validateRequiredParams = (intake: RequireParamsIntake): RequireParams => {
  const { from, to } = intake;

  if (!isValidStr(from) || !isValidStr(to)) {
    return withError(intake, "Invalid body params");
  }


  if (!RegExp(REGEX_EMAIL_VALIDATOR).exec(from)) {
    return withError(intake, "Not valid 'From' email");
  }

  const emailToSend = getCodingFlavourEmail(to)

  if (!emailToSend) {
    return withError(intake, "Not valid 'To' email");
  }

  return {
    from,
    to: emailToSend
  }
}

const validateOptionalParams = (intake: OptionalParamsIntake): OptionalParams => {
  const { templateKey, name, message } = intake;

  const templateKeyToUse = templateKey || Options.PORTFOLIO;
  const messageToUse = message || '';

  const errorIntake = {
    templateKey: Options.PORTFOLIO,
    name: '',
    message: ''
  }

  if (isNotNull(name) && !isValidStr(name) || isNotNull(message) && !isValidStr(message)) {
    return withError(errorIntake, "Invalid body params");
  }

  if (!isValidStr(templateKeyToUse) || !isTemplateKey(templateKeyToUse) || !isSubjectKey(templateKeyToUse)) {
    return withError(errorIntake, "Invalid template key");
  }

  return {
    templateKey: templateKeyToUse,
    name,
    message: messageToUse
  }
}

export {
  validateRequiredParams,
  validateOptionalParams
};