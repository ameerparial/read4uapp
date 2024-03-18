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
    // receive true/false from server
    console.log(userStatus);
    res.send(userStatus);
  });

  Router.post("/register", (req, res) => {
    if (UserServices.addData(req.body)) {
      return res.redirect("http://localhost:3000/login");
    }
    return redirect("http://localhost:3000/register");
  });
  return Router;
};

export default LoginRouter;
