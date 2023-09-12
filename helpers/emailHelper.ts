const getCodingFlavourEmail = (teamName: string) => {
  switch (teamName) {
    case "dsanchez":
      return process.env.EMAIL_DSANCHEZ;
    case "amayor":
      return process.env.EMAIL_AMAYOR;
    case "kopel":
      return process.env.EMAIL_KOPEL;
  }
};

export { getCodingFlavourEmail };
