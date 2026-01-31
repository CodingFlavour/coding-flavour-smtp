const getCodingFlavourEmail = (teamName: string) => {
  const EMAIL_DSANCHEZ = process.env.EMAIL_DSANCHEZ
  const EMAIL_AMAYOR = process.env.EMAIL_AMAYOR;
  const EMAIL_KOPEL = process.env.EMAIL_KOPEL;

  if (!EMAIL_DSANCHEZ || !EMAIL_AMAYOR || !EMAIL_KOPEL) {
    throw new Error("Emails are not correctly defined in the environment variables.");
  }

  switch (teamName) {
    case "dsanchez":
      return EMAIL_DSANCHEZ;
    case "amayor":
      return EMAIL_AMAYOR;
    case "kopel":
      return EMAIL_KOPEL;
  }
};

export { getCodingFlavourEmail };
