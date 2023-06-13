import { Optional } from "sequelize";
import {
  Column,
  Index,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
} from "sequelize-typescript";

import { sequelize } from "../../../../../shared/infrastructure/db/sequelize.config";
import { User } from "../../../domain/user.model";
import { UserRepository } from "../../../domain/user.repository";

@Table({
  tableName: "user",
  timestamps: false,
})
class UserModel extends Model<UserModel> implements User {
  @PrimaryKey
  @Column
  public id_user!: number;
  @Column
  public alias!: string;
  @Column
  public facility!: string;
}

sequelize().addModels([UserModel]);

export class UserDBIRepository implements UserRepository {
  async getById(id: number): Promise<User | null> {
    const user = await UserModel.findByPk(id);

    if (!user) {
      return null;
    }

    return new User(
      user.getDataValue("id_user"),
      user.getDataValue("alias"),
      user.getDataValue("facility")
    );
  }
}
