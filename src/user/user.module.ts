import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user/user.entity';
import { UserRepo } from './userRepo';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserRepo
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
