import * as CodingFlavourSMTP from "../../index";

describe("Coding Flavour SMTP Test Suite", () => {
    it("should return the correct object when invoking library", async () => {
        expect(CodingFlavourSMTP).toBeDefined();
        // SendGrid, TEMPLATES, buildTemplate, getCodingFlavourEmail
        expect(CodingFlavourSMTP).toHaveProperty("SendGrid");
        expect(CodingFlavourSMTP).toHaveProperty("TEMPLATES");
        expect(CodingFlavourSMTP).toHaveProperty("buildTemplate");
        expect(CodingFlavourSMTP).toHaveProperty("getCodingFlavourEmail");
        
        expect(CodingFlavourSMTP.SendGrid).toBeDefined();
        expect(CodingFlavourSMTP.TEMPLATES).toBeDefined();
        expect(CodingFlavourSMTP.buildTemplate).toBeDefined();
        expect(CodingFlavourSMTP.getCodingFlavourEmail).toBeDefined();

        expect(CodingFlavourSMTP.SendGrid).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.TEMPLATES).toBeInstanceOf(Object);
        expect(CodingFlavourSMTP.buildTemplate).toBeInstanceOf(Function);
        expect(CodingFlavourSMTP.getCodingFlavourEmail).toBeInstanceOf(Function);
    })
})