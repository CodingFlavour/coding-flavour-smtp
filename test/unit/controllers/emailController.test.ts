import { EmailData } from "../../../types/Email";
import { logSpy } from "../mocks/mock-logger";

const mockValidateRequiredParams = jest.fn().mockReturnValue({});
const mockValidateOptionalParams = jest.fn().mockReturnValue({ templateKey: "portfolio" });
const mockSendMail = jest.fn().mockResolvedValue({ success: true });

jest.mock('../../../controllers/validations/emailValidations', () => ({
  __esModule: true,
  validateRequiredParams: (params: any) => mockValidateRequiredParams(params),
  validateOptionalParams: (params: any) => mockValidateOptionalParams(params)
}));

jest.mock('../../../services/gmailService', () => ({
  __esModule: true,
  default: () => ({
    sendMail: (to: string, subject: string, html: string) => mockSendMail(to, subject, html)
  })
}));

jest.mock('../../../helpers/subjectsHelper', () => ({
  __esModule: true,
  default: {
    portfolio: 'Portfolio contact'
  }
}));

jest.mock('../../../helpers/templatesHelper', () => ({
  __esModule: true,
  default: {
    portfolio: (from: string, message: string, options: any) => `<p>${message}</p><p>Best, ${from}</p>`
  }
}));

async function setup() {
  const { default: sendMail } = await import("../../../controllers/emailController")

  const emailData: EmailData = {
    from: 'invalid-email',
    to: 'also-invalid',
    name: 'Test User',
    message: 'This is a test message',
    templateKey: 'PORTFOLIO',
  };

  return {
    sendMail,
    emailData
  }
}

describe("Email Controller Test Suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('should return error if validation fails for required params', async () => {
    // Given
    const { sendMail, emailData } = await setup();
    mockValidateRequiredParams.mockReturnValueOnce({ error: "Invalid body params" });

    // When
    const actual = sendMail(emailData, { dryRun: true });

    // Then
    expect(actual).rejects.toThrow("Invalid body params");
  });
  it('should return error if validation fails for optional params', async () => {
    // Given
    const { sendMail, emailData } = await setup();
    mockValidateOptionalParams.mockReturnValueOnce({ error: "Invalid optional params" });

    // When
    const actual = sendMail(emailData, { dryRun: true });

    // Then
    expect(actual).rejects.toThrow("Invalid optional params");
  });
  it('should not send email if dryRun is true', async () => {
    // Given
    const { sendMail, emailData } = await setup();

    // When
    await sendMail({ ...emailData }, { dryRun: true });

    // Then
    expect(logSpy).toHaveBeenCalledWith("Dry run mode - Email not sent - Email content");
  });
  it('should send email if dryRun is false', async () => {
    // Given
    const { sendMail, emailData } = await setup();

    // When
    const actual = sendMail({ ...emailData }, { dryRun: false });

    // Then
    expect(actual).resolves.toBeUndefined();
    expect(mockSendMail).toHaveBeenCalled();
  });
});
