jest.mock('@coding-flavour/logger', () => ({
  __esModule: true,
  default: () => ({
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
    board: jest.fn(),
    setLoggerPrefix: jest.fn(),
    resetTabulation: jest.fn(),
    setDebugMode: jest.fn(),
    resetStartTime: jest.fn(),
    getTimeElapsed: jest.fn(),
    setLogFile: jest.fn(),
    resetLogFile: jest.fn(),
    ln: jest.fn(),
  })
}));

import { sendMail } from '../../controllers/emailController';
import { Options } from '../../helpers/options';
import SUBJECTS from '../../helpers/subjectsHelper';
import TEMPLATES from '../../helpers/templatesHelper';
import { mockExpress } from './mocks/mock-express';

const FROM = 'test@domain.com';
const TEMPLATE_KEY = Options.PORTFOLIO;
const TO = 'dest@domain.com';
const MESSAGE = 'Mensaje de prueba';
const NAME = 'Daniel';

const BASE_BODY = {
  body: {
    from: FROM,
    templateKey: TEMPLATE_KEY,
    to: TO,
    name: NAME,
    message: MESSAGE
  }
}

const sendMailMock = jest.fn();

jest.mock('../../services/gmailService', () => {
  return jest.fn().mockImplementation(() => {
    return {
      sendMail: sendMailMock
    };
  });
});

jest.mock('../../helpers/emailHelper', () => ({
  getCodingFlavourEmail: (_teamName: string) => 'dest@domain.com'
}));

describe('emailController sendMail Test Suite', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    process.env = {
      ...OLD_ENV,
      EMAIL_DSANCHEZ: 'dsanchez@codingflavour.com',
      EMAIL_AMAYOR: 'amayor@codingflavour.com',
      EMAIL_KOPEL: 'kopel@codingflavour.com',
      EMAIL_DEFAULT: 'default@codingflavour.com',
    };
  });

  afterEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
    jest.clearAllMocks();
    process.env = OLD_ENV;
  });

  it('should call GmailService.sendMail with correct params for portfolio', async () => {
    // Given
    const { Request, Response } = mockExpress(BASE_BODY);
    const html = TEMPLATES[Options.PORTFOLIO](FROM, MESSAGE, { name: NAME });

    // When
    await sendMail(Request, Response);

    // Then
    expect(sendMailMock).toHaveBeenCalledWith(
      TO,
      SUBJECTS[Options.PORTFOLIO],
      html
    );
    expect(Response.send).toHaveBeenCalledWith('OK');
  });

  it('should call GmailService.sendMail with correct params for wise_seeker', async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        ...BASE_BODY.body,
        templateKey: Options.WISE_SEEKER,
      }
    });
    sendMailMock.mockResolvedValue({ success: true });

    // When
    await sendMail(Request, Response);

    // Then
    expect(sendMailMock).toHaveBeenCalledWith(
      TO,
      SUBJECTS[Options.WISE_SEEKER],
      TEMPLATES[Options.WISE_SEEKER](FROM, MESSAGE, { name: NAME })
    );
    expect(Response.send).toHaveBeenCalledWith('OK');
  });

  it('should handle missing optional message param', async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        from: BASE_BODY.body.from,
        to: BASE_BODY.body.to,
        templateKey: BASE_BODY.body.templateKey,
        name: BASE_BODY.body.name
      }
    });
    sendMailMock.mockResolvedValue({ success: true });

    // When
    await sendMail(Request, Response);

    // Then
    expect(sendMailMock).toHaveBeenCalledWith(
      TO,
      expect.any(String),
      expect.any(String)
    );
    expect(Response.send).toHaveBeenCalledWith('OK');
  });

  it('should return 400 if validation fails', async () => {
    // Given
    const { Request, Response } = mockExpress({
      body: {
        from: '',
        to: '',
        templateKey: Options.PORTFOLIO
      }
    });

    // When
    await sendMail(Request, Response);

    // Then
    expect(sendMailMock).not.toHaveBeenCalled();
    expect(Response.send).toHaveBeenCalledWith(expect.any(String));
  });

  it('should return error if GmailService.sendMail throws', async () => {
    // Given
    const { Request, Response } = mockExpress(BASE_BODY);

    sendMailMock.mockRejectedValue(new Error('Gmail error'));

    // When
    await sendMail(Request, Response);
    // Then
    expect(sendMailMock).toHaveBeenCalled();
    expect(Response.send).toHaveBeenCalledWith('Error sending email');
  });
});
