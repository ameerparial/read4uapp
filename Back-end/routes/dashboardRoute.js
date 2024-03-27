import express from "express";
const Router = express.Router();

const DashboardRouter = () => {
  Router.get("/", (req, res) => {
    const data = req.session.user;
    console.log("Session Data has: ..");
    console.log(data);
    return res.json({ data: `result is: ${data}` });
  });

  return Router;
};

export default DashboardRouter;
