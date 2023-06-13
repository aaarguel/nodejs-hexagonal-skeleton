import { Request, Response } from "express";

import { UserUseCase } from "../../application/user.usecase";

export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  async sendEmailToUser(req: Request, res: Response) {
    try {
      const { id: userId } = req.params;
      await this.userUseCase.sendEmailToUser(Number(userId));
      res.status(200).json({
        message: "Email sent successfully",
      });
    } catch (error: any) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
