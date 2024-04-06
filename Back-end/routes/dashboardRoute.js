import express from "express";
const Router = express.Router();

const DashboardRouter = (profileUploader, userServices) => {
  Router.get("/", (req, res) => {
    const data = req.session.user;
    console.log("Session Data has: ..");
    console.log(data);
    return res.json(data);
  });

  Router.post(
    "/profileUpdate",
    profileUploader.single("file"),
    async (req, res) => {
      const filename = req?.file?.filename;
      var updateUser = req.body;
      if (req?.file) updateUser = { ...updateUser, filename };
      // console.log("update object: ");
      // console.log(updateUser);
      // console.log("session");
      req.session.user = updateUser;
      const status = await userServices.updateUser(updateUser);
      res.json(status);
    }
  );

  return Router;
};

export default DashboardRouter;
