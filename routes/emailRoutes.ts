import { Express } from "express";
import { sendMail } from "../controllers/emailController";

const setRoutes = (app: Express) => {
  app.post("/send-email", sendMail);
};

export { setRoutes };
