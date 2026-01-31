function getError(simulateDownloadError, simulateAbortedRequest) {
    if (simulateAbortedRequest) {
        return new Error("Request aborted");
    }
    else if (simulateDownloadError) {
        return new Error("Download error");
    }
}
function mockExpress(request = jest.fn(), downloadOptions = {}) {
    const { simulateDownloadError, simulateAbortedRequest } = downloadOptions;
    jest.mock("express", () => {
        const actualModule = jest.requireActual("express");
        const send = jest.fn();
        const json = jest.fn();
        const status = jest.fn(() => ({ send, json }));
        const download = jest.fn((_path, _filename, callback) => {
            callback(getError(simulateDownloadError, simulateAbortedRequest));
        });
        return {
            ...actualModule,
            Request: request,
            Response: {
                ...actualModule.Response,
                send,
                json,
                status,
                download
            }
        };
    });
    const { Request, Response } = jest.requireMock("express");
    jest.spyOn(Response, "send");
    jest.spyOn(Response, "download");
    return { Request, Response };
}
export { mockExpress };
