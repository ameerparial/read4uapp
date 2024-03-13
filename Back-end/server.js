import express from "express";
import LoginRouter from "./routes/login";
import UserDataService from "./services/UserdataService";
const UserServices = new UserDataService("./data/RegisterAccounts.json");
const app = express();

app.use("/login-me", LoginRouter(UserServices));

app.listen(5500, () => {
  console.log("Listening at the port 5000...");
});
