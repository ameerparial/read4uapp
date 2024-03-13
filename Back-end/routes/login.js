import express from "express";

const Router = express.Router();

const LoginRouter = () => {
  Router.get("/", (req, res) => {
    res.send("Ameer Hamza is here");
  });
  return Router;
};

export default LoginRouter;
