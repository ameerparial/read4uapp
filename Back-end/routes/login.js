import express from "express";

const Router = express.Router();

const LoginRouter = (UserServices) => {
  Router.get("/", async (req, res) => {
    const data = await UserServices.getData();
    console.log(data);
    res.send(data);
  });

  Router.post("/", async (req, res) => {
    const current_user = req.body;
    const userObj = await UserServices.isUser(current_user);
    // receive true/false from server
    // req.session.user = userObj;
    console.log(userObj);
    res.json(userObj);
  });

  Router.post("/register", async (req, res) => {
    const message = await UserServices.addData(req.body);
    res.json(message);
  });
  return Router;
};

export default LoginRouter;
