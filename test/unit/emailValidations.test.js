import { validateRequiredParams, validateOptionalParams } from '../../controllers/validations/emailValidations.js';
import * as emailHelper from '../../helpers/emailHelper.js';
import { Options } from '../../helpers/options.js';
describe('Email Validations Test Suite', () => {
    describe('validateRequiredParams', () => {
        beforeEach(() => {
            jest.spyOn(emailHelper, 'getCodingFlavourEmail').mockReturnValue('test@codingflavour.com');
        });
        afterEach(() => {
            jest.restoreAllMocks();
        });
        it('should return valid params when all required fields are correct', () => {
            // Given
            const intake = {
                from: 'user@example.com',
                to: 'dsanchez'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result).toEqual({
                from: 'user@example.com',
                to: 'test@codingflavour.com'
            });
            expect(result.error).toBeUndefined();
        });
        it('should return error when from is not a string', () => {
            // Given
            const intake = {
                from: 123,
                to: 'dsanchez'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBe('Invalid body params');
        });
        it('should return error when to is not a string', () => {
            // Given
            const intake = {
                from: 'user@example.com',
                to: null
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBe('Invalid body params');
        });
        it('should return error when from email format is invalid', () => {
            // Given
            const intake = {
                from: 'invalid-email',
                to: 'dsanchez'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBe("Not valid 'From' email");
        });
        it('should return error when from email has no domain', () => {
            // Given
            const intake = {
                from: 'user@',
                to: 'dsanchez'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBe("Not valid 'From' email");
        });
        it('should return error when to email does not exist in getCodingFlavourEmail', () => {
            // Given
            jest.spyOn(emailHelper, 'getCodingFlavourEmail').mockReturnValue('');
            const intake = {
                from: 'user@example.com',
                to: 'nonexistent'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBe("Not valid 'To' email");
        });
        it('should accept valid email with subdomain', () => {
            // Given
            const intake = {
                from: 'user@mail.example.com',
                to: 'dsanchez'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBeUndefined();
            expect(result.from).toBe('user@mail.example.com');
        });
        it('should accept valid email with numbers and dots', () => {
            // Given
            const intake = {
                from: 'user.123@example.com',
                to: 'dsanchez'
            };
            // When
            const result = validateRequiredParams(intake);
            // Then
            expect(result.error).toBeUndefined();
            expect(result.from).toBe('user.123@example.com');
        });
    });
    describe('validateOptionalParams', () => {
        it('should return provided values when all optional params are given', () => {
            // Given
            const intake = {
                templateKey: Options.WISE_SEEKER,
                name: 'John Doe',
                message: 'Test message'
            };
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result).toEqual({
                templateKey: Options.WISE_SEEKER,
                name: 'John Doe',
                message: 'Test message'
            });
            expect(result.error).toBeUndefined();
        });
        it('should use default values when optional params are undefined', () => {
            // Given
            const intake = {};
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result).toEqual({
                templateKey: Options.PORTFOLIO,
                name: undefined,
                message: ''
            });
            expect(result.error).toBeUndefined();
        });
        it('should use default templateKey when templateKey is undefined', () => {
            // Given
            const intake = {
                name: 'John Doe'
            };
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result.templateKey).toBe(Options.PORTFOLIO);
            expect(result.name).toBe('John Doe');
            expect(result.error).toBeUndefined();
        });
        it('should not use any name when name is undefined', () => {
            // Given
            const intake = {
                templateKey: Options.WISE_SEEKER
            };
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result.templateKey).toBe(Options.WISE_SEEKER);
            expect(result.name).toBeUndefined();
            expect(result.error).toBeUndefined();
        });
        it('should return error when templateKey is not a string', () => {
            // Given
            const intake = {
                templateKey: 123,
                name: 'John Doe'
            };
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result.error).toBe('Invalid template key');
            expect(result.templateKey).toBe(Options.PORTFOLIO);
        });
        it('should use empty string as valid templateKey', () => {
            // Given
            const intake = {
                templateKey: '',
                name: 'John Doe'
            };
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result.templateKey).toBe(Options.PORTFOLIO);
            expect(result.error).toBeUndefined();
        });
        it('should not use empty string as valid name', () => {
            // Given
            const intake = {
                templateKey: Options.PORTFOLIO,
                name: ''
            };
            // When
            const result = validateOptionalParams(intake);
            // Then
            expect(result.error).toBe('Invalid body params');
        });
    });
});
