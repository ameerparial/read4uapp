import express from "express";
import LoginRouter from "./routes/login";
import UserDataService from "./services/UserdataService";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
const UserServices = new UserDataService("./data/RegisterAccounts.json");
const app = express();

app.use(cookieParser());
app.use(
  session({
    secret: "ameerhamza",
    cookie: { maxAge: 3000 },
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/login-me", LoginRouter(UserServices));

app.listen(5500, () => {
  console.log("Listening at the port 5500...");
});
