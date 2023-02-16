import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./user.entity/user.entity";

@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity>
