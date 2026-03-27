import { Options } from '../../helpers/options';
import SUBJECTS from '../../helpers/subjectsHelper';

describe('SUBJECTS Test Suite', () => {
  it('should have correct subject for KEENLY', () => {
    expect(SUBJECTS[Options.KEENLY]).toBe('Solicitud de Keenly');
  });

  it('should have correct subject for KEENLY_FEEDBACK', () => {
    expect(SUBJECTS[Options.KEENLY_FEEDBACK]).toBe('Keenly Feedback');
  });

  it('should have correct subject for FAMILY_VAULT_INVITATION', () => {
    expect(SUBJECTS[Options.FAMILY_VAULT_INVITATION]).toBe('Invitación a Family Vault');
  });

  it('should have correct subject for CONTROL_PANEL_INVITATION', () => {
    expect(SUBJECTS[Options.CONTROL_PANEL_INVITATION]).toBe('Invitación a Control Panel');
  });
});
