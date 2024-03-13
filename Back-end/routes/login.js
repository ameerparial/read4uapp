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
    res.json(current_user);
  });
  return Router;
};

export default LoginRouter;
