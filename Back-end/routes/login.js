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
    const userStatus = await UserServices.isUser(current_user);
    if (userStatus) {
      return res.redirect("http://localhost:3000/dashboard");
    }
    return res.redirect("http://localhost:3000/login");
  });
  return Router;
};

export default LoginRouter;
