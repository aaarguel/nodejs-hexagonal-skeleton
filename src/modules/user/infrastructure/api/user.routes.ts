import express from "express";

import { userController } from "../dependencies";

const userRouter = express.Router();

userRouter.post(
  "/:id/send-email",
  userController.sendEmailToUser.bind(userController)
);

export { userRouter };
