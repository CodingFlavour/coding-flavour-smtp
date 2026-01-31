import { getCodingFlavourEmail } from "../../helpers/emailHelper";

const REGEX_EMAIL_VALIDATOR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

type WithError = { error?: string; }
type RequireParamsIntake = {
  from: string;
  to: string;
}

export type RequireParams = RequireParamsIntake & WithError

type OptionalParamsIntake = {
  templateKey?: string;
  name?: string;
  message?: string;
}

export type OptionalParams = {
  templateKey: string;
  name: string;
  message: string;
} & WithError

const validateRequiredParams = (intake: RequireParamsIntake): RequireParams => {
  const withError = (err: string) => ({ ...intake, error: err });

  const { from, to } = intake;

  if (typeof from !== "string" || typeof to !== "string") {
    return withError("Invalid body params");
  }


  if (!RegExp(REGEX_EMAIL_VALIDATOR).exec(from)) {
    return withError("Not valid 'From' email");
  }

  if (!getCodingFlavourEmail(to)) {
    return withError("Not valid 'To' email");
  }

  return {
    from, to
  }
}

const validateOptionalParams = (intake: OptionalParamsIntake): OptionalParams => {
  const withError = (err: string) => ({
    templateKey: templateKeyToUse,
    name: nameToUse,
    message: messageToUse,
    error: err
  });

  const { templateKey, name, message } = intake;

  const templateKeyToUse = templateKey || 'PORTFOLIO';
  const nameToUse = name || 'No Name';
  const messageToUse = message || '';


  if (typeof templateKeyToUse !== "string") {
    return withError("Invalid template key");
  }

  return {
    templateKey: templateKeyToUse,
    name: nameToUse,
    message: messageToUse
  }
}

export {
  validateRequiredParams,
  validateOptionalParams
};