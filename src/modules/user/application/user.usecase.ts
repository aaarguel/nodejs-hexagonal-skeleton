import { Logger } from "../../../shared/domain/logger";
import { UserRepository } from "../domain/user.repository";

export class UserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly logger: Logger
  ) {}

  async sendEmailToUser(userId: number): Promise<void> {
    this.logger.info(`[User.UseCase] - Sending email to user: ${userId}`);

    const user = await this.userRepository.getById(userId);
    if (!user) {
      const error = new Error(`User not found: ${userId}`);
      this.logger.error(error.message);
      throw error;
    }
    console.log(user);

    this.logger.info(
      "[User.UseCase] - Successfully sent the email to the user"
    );
  }
}
