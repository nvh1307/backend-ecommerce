import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entities/user/user.entity";

@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity> {}
