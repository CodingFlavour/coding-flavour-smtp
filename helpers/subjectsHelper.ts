import { Options } from "./options";

const isSubjectKey = (key: string): key is Options => {
  return Object.keys(SUBJECTS).includes(key);
}

const SUBJECTS: Record<Options, string> = {
    [Options.PORTFOLIO]: 'Portfolio contact',
    [Options.KEENLY]: 'Solicitud de Keenly',
    [Options.KEENLY_FEEDBACK]: 'Keenly Feedback',
    [Options.FAMILY_VAULT_INVITATION]: 'Invitación a Family Vault',
    [Options.CONTROL_PANEL_INVITATION]: 'Invitación a Control Panel'
};

export default SUBJECTS;
export {
  isSubjectKey
}