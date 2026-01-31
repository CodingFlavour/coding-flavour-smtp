const isSubjectKey = (key: string): key is keyof typeof SUBJECTS => {
  return Object.keys(SUBJECTS).includes(key);
}

const SUBJECTS = {
    PORTFOLIO: 'Portfolio contact',
    WISE_SEEKER: 'Solicitud Wise Seeker',
    DEFAULT: 'Coding Flavour Email',
};

export default SUBJECTS;
export {
  isSubjectKey
}