import { User } from "./user.model";

export interface UserRepository {
  getById(id: number): Promise<User | null>;
}
