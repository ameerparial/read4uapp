import express from "express";
import LoginRouter from "./routes/login";
const app = express();

app.use("/login-me", LoginRouter());

app.listen(5500, () => {
  console.log("Listening at the port 5000...");
});
