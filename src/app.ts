import express from "express";
const app = express();
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();

import cors from 'cors';
app.use(cors());

import { setRoutes } from "../routes/emailRoutes";
setRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening at http://${process.env.HOST_URL}:${process.env.PORT}`
  );
});
