import { Options } from "./options";

const isSubjectKey = (key: string): key is Options => {
  return Object.keys(SUBJECTS).includes(key);
}

const SUBJECTS: Record<Options, string> = {
    [Options.PORTFOLIO]: 'Portfolio contact',
    [Options.WISE_SEEKER]: 'Solicitud Wise Seeker'
};

export default SUBJECTS;
export {
  isSubjectKey
}