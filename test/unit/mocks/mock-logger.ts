const logSpy = jest.fn();

jest.mock('@coding-flavour/logger', () => ({
  __esModule: true,
  default: () => ({
    log: (msg: string) => logSpy(msg),
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

export {
  logSpy
}