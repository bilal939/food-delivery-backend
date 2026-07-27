import "dotenv/config";
import express from "express";
import { connectDB } from "./config/database";
import cors from "cors";
import { helmetMiddleware } from "./middleware/helmet.middlware";
import bodyParser from "body-parser";
import { errorHandler, notFoundHandler } from "./utils/error/errorhandler";
import authroutes from "./modules/auth/auth.routes";
const app = express();

app.use(helmetMiddleware);
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", authroutes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log("server has been created", process.env.PORT);
});
