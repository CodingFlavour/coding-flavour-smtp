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

import * as CodingFlavourSMTP from "../../index";

describe("Coding Flavour SMTP Test Suite", () => {
    it("should return the correct object when invoking library", async () => {
        expect(CodingFlavourSMTP).toBeDefined();

        expect(CodingFlavourSMTP).toHaveProperty("SendGrid");
        expect(CodingFlavourSMTP).toHaveProperty("GmailService");
        expect(CodingFlavourSMTP).toHaveProperty("TEMPLATES");
        expect(CodingFlavourSMTP).toHaveProperty("SUBJECTS");
        expect(CodingFlavourSMTP).toHaveProperty("getCodingFlavourEmail");
        expect(CodingFlavourSMTP).toHaveProperty("trySendMail");

        expect(CodingFlavourSMTP.SendGrid).toBeDefined();
        expect(CodingFlavourSMTP.GmailService).toBeDefined();
        expect(CodingFlavourSMTP.TEMPLATES).toBeDefined();
        expect(CodingFlavourSMTP.SUBJECTS).toBeDefined();
        expect(CodingFlavourSMTP.getCodingFlavourEmail).toBeDefined();
        expect(CodingFlavourSMTP.trySendMail).toBeDefined();

        expect(CodingFlavourSMTP.SendGrid).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.GmailService).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.TEMPLATES).toBeInstanceOf(Object);
        expect(CodingFlavourSMTP.SUBJECTS).toBeInstanceOf(Object);
        expect(CodingFlavourSMTP.getCodingFlavourEmail).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.trySendMail).toBeInstanceOf(Function);
    })
})