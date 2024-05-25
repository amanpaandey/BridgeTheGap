import dotenv from "dotenv";
import dbConnect from "./db/connect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.on("error", (err) => {
      console.log(`error in db connection`, err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`ERROR IN MONGODB CONNECTION`, error);
  });