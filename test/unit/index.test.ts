import * as CodingFlavourSMTP from "../../index";

describe("Coding Flavour SMTP Test Suite", () => {
    it("should return the correct object when invoking library", async () => {
        expect(CodingFlavourSMTP).toBeDefined();

        expect(CodingFlavourSMTP).toHaveProperty("SendGrid");
        expect(CodingFlavourSMTP).toHaveProperty("ResendService");
        expect(CodingFlavourSMTP).toHaveProperty("TEMPLATES");
        expect(CodingFlavourSMTP).toHaveProperty("getCodingFlavourEmail");
        
        expect(CodingFlavourSMTP.SendGrid).toBeDefined();
        expect(CodingFlavourSMTP.ResendService).toBeDefined();
        expect(CodingFlavourSMTP.TEMPLATES).toBeDefined();
        expect(CodingFlavourSMTP.getCodingFlavourEmail).toBeDefined();

        expect(CodingFlavourSMTP.SendGrid).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.ResendService).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.TEMPLATES).toBeInstanceOf(Object);
        expect(CodingFlavourSMTP.getCodingFlavourEmail).toBeInstanceOf(Function);
    })
})