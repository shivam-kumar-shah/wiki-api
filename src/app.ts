import "dotenv/config";
import express from "express";
import wikiRouter from "./api/wikipedia";
import { errorHandler } from "./middlewares/error";
import { connectToDB } from "./config/database";

const app = express();

app.use("/api", wikiRouter);

app.use(errorHandler);

connectToDB(() => {
  app.listen(3000, () =>
    console.log("Server started on: http://localhost:3000/")
  );
});
