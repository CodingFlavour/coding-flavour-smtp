import GmailService from '../../services/gmailService';

// Los muertos de Jest con el Hoisting y el `mockX`, a ver si nos pasamos a Vitest el mes que viene
const mockSendMail = jest.fn().mockResolvedValue('ok');
const mockCreateTransport = jest.fn().mockReturnValue({
    sendMail: mockSendMail
});
jest.mock('nodemailer', () => ({
    createTransport: (args) => mockCreateTransport(args)
}));
describe('GmailService Test Suite', () => {
    const OLD_ENV = process.env;
    beforeEach(() => {
        process.env = {
            ...OLD_ENV,
            GMAIL_USER: 'testuser@gmail.com',
            GMAIL_APP_PASSWORD: 'testpass',
        };
    });
    afterEach(() => {
        jest.resetModules();
        jest.restoreAllMocks();
        jest.clearAllMocks();
        process.env = OLD_ENV;
    });
    it('should throw error if env vars are missing', () => {
        process.env.GMAIL_USER = '';
        process.env.GMAIL_APP_PASSWORD = '';
        expect(() => GmailService()).toThrow('Environment not setted correctly');
    });
    it('should return an object with sendMail function', () => {
        const service = GmailService();
        expect(typeof service.sendMail).toBe('function');
    });
    it('should call nodemailer.createTransport with correct config', () => {
        GmailService();
        expect(mockCreateTransport).toHaveBeenCalledWith({
            service: 'gmail',
            auth: {
                user: 'testuser@gmail.com',
                pass: 'testpass',
            },
        });
    });
    it('should call sendMail with correct mailOptions', async () => {
        const service = GmailService();
        const mailOptions = {
            from: 'testuser@gmail.com',
            to: 'dest@domain.com',
            subject: 'Test Subject',
            html: '<b>Test</b>',
        };
        await service.sendMail(mailOptions.to, mailOptions.subject, mailOptions.html);
        expect(mockSendMail).toHaveBeenCalledWith(mailOptions);
    });
});
