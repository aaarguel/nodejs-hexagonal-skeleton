import { logger } from "../../../shared/infrastructure/dependencies.server";
import { UserUseCase } from "../application/user.usecase";
import { UserController } from "./api/user.controller";
import { UserInMemoryIRepository } from "./irepository/in-memory/user-in-memory.irepository";
import { UserDBIRepository } from "./irepository/relational-db/user-db.irepository";

//const userRepository = new UserInMemoryIRepository();
const userRepository = new UserDBIRepository();
const welcomeEmailSender = new UserUseCase(userRepository, logger);

export const userController = new UserController(welcomeEmailSender);
