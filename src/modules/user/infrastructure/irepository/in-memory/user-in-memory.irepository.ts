import { User } from "../../../domain/user.model";
import { UserRepository } from "../../../domain/user.repository";
import { USERS } from "./user.inmemory";

export class UserInMemoryIRepository implements UserRepository {
  async getById(id: number): Promise<User | null> {
    const user = USERS.find((user) => user.id_user === id);

    if (!user) {
      return null;
    }

    return new User(user.id_user, user.alias, user.facility);
  }
}
