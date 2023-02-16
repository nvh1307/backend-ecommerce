import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user.entity/user.entity';
import { UserRepo } from '../userRepo';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepo)
    private readonly userRepo: UserRepo,
  
  ){}

  async createUser(user:UserEntity) : Promise<UserEntity> {
    return this.userRepo.save(user);
  }

  async getUser():Promise<UserEntity> {
    return this.userRepo.find();
  }

  async getUserById(id:number):Promise<UserEntity>{
    return this.userRepo.findOne(id);
  }
  
  async updateUser(id:number, user:UserEntity): Promise<UserEntity>{
    return this.userRepo.update(id,user);
  }

  async deleteUser(id:number):Promise<void>{
    await this.userRepo.delete(id)
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return await this.userRepo.findOne({ where: { email: email } });
  }

}
