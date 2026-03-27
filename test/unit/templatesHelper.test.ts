import { Options } from '../../helpers/options';
import TEMPLATES from '../../helpers/templatesHelper';

describe('TEMPLATES Test Suite', () => {
  describe('KEENLY', () => {
    it('should render keenly request with from email', () => {
      // Given
      const from = 'user@example.com';

      // When
      const result = TEMPLATES[Options.KEENLY](from, '', {});

      // Then
      expect(result).toBe(`Keenly Request from ${from}`);
    });
  });

  describe('KEENLY_FEEDBACK', () => {
    it('should render feedback with issue, message and from email', () => {
      // Given
      const from = 'user@example.com';
      const message = 'The button is broken';
      const issue = 'UI Bug';

      // When
      const result = TEMPLATES[Options.KEENLY_FEEDBACK](from, message, { issue });

      // Then
      expect(result).toBe(`Issue: ${issue}<br />Details: ${message}<br />User email: ${from}`);
    });
  });

  describe('FAMILY_VAULT_INVITATION', () => {
    it('should render invitation link with uuid token', () => {
      // Given
      const from = 'admin@codingflavour.com';
      const uuid = 'abc-123-def';

      // When
      const result = TEMPLATES[Options.FAMILY_VAULT_INVITATION](from, '', { uuid });

      // Then
      expect(result).toContain(`https://familia.codingflavour.com/register?token=${uuid}`);
    });
  });

  describe('CONTROL_PANEL_INVITATION', () => {
    it('should render invitation link with uuid and email', () => {
      // Given
      const from = 'admin@codingflavour.com';
      const uuid = 'def-456-ghi';
      const email = 'newuser@example.com';
      const baseUrl = "https://control-panel.codingflavour.com/auth/register";
      const params = new URLSearchParams({ uuid, email });
      const expectedLink = `${baseUrl}?${params.toString()}`;

      // When
      const result = TEMPLATES[Options.CONTROL_PANEL_INVITATION](from, '', { uuid, email });

      // Then
      expect(result).toContain(expectedLink);
    });

    it('should include the link in href, anchor text and plain url', () => {
      // Given
      const uuid = 'def-456-ghi';
      const email = 'newuser@example.com';
      const baseUrl = "https://control-panel.codingflavour.com/auth/register";
      const params = new URLSearchParams({ uuid, email });
      const expectedLink = `${baseUrl}?${params.toString()}`;

      // When
      const result = TEMPLATES[Options.CONTROL_PANEL_INVITATION]('admin@codingflavour.com', '', { uuid, email });

      // Then
      expect(result.match(new RegExp(expectedLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))?.length).toBe(3);
    });
  });
});
