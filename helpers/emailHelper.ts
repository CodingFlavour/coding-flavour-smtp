const getCodingFlavourEmail = (teamName: string) => {
  const EMAIL_DSANCHEZ = process.env.EMAIL_DSANCHEZ
  const EMAIL_AMAYOR = process.env.EMAIL_AMAYOR;
  const EMAIL_KOPEL = process.env.EMAIL_KOPEL;
  const EMAIL_DEFAULT = process.env.EMAIL_DEFAULT;

  if (!EMAIL_DSANCHEZ || !EMAIL_AMAYOR || !EMAIL_KOPEL || !EMAIL_DEFAULT) {
    throw new Error("Emails are not correctly defined in the environment variables.");
  }

  switch (teamName) {
    case "dsanchez":
      return EMAIL_DSANCHEZ;
    case "amayor":
      return EMAIL_AMAYOR;
    case "kopel":
      return EMAIL_KOPEL;
    default:
      return EMAIL_DEFAULT;
  }
};

export { getCodingFlavourEmail };
