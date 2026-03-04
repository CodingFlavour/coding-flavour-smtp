import { Options } from "./options";

const isSubjectKey = (key: string): key is Options => {
  return Object.keys(SUBJECTS).includes(key);
}

const SUBJECTS: Record<Options, string> = {
    [Options.PORTFOLIO]: 'Portfolio contact',
    [Options.KEENLY]: 'Solicitud de Keenly',
    [Options.KEENLY_FEEDBACK]: 'Keenly Feedback'
};

export default SUBJECTS;
export {
  isSubjectKey
}