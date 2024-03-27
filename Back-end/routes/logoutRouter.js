import express from "express";
const Router = express.Router();

const LogoutRouter = () => {
  Router.get("/", (req, res) => {
    console.log("Logout...");
    req.session.user = undefined;
    res.json({ logout: true, msg: "Logout Successfully!" });
  });

  return Router;
};
export default LogoutRouter;
