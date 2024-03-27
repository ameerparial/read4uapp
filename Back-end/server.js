import express from "express";
import LoginRouter from "./routes/login";
import UserDataService from "./services/UserdataService";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import DashboardRouter from "./routes/DashboardRoute";
import LogoutRouter from "./routes/logoutRouter";

const UserServices = new UserDataService("./data/RegisterAccounts.json");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "ameerhamzakhuhro",
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: new Date().getTime() + 1000 * 36000 },
  })
);
app.use("/login-me", LoginRouter(UserServices));
app.use("/dashboard", DashboardRouter());
app.use("/logout", LogoutRouter());

app.listen(5500, () => {
  console.log("Listening at the port 5500...");
});
