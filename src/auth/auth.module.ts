import { UserModule } from "src/user/user.module";
import { PassportModule } from 'passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "src/user/user.service";
import { Module } from '@nestjs/common';

@Module({
  imports:[
    UserModule,
    PassportModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions:{expiresIn:'1d'}
    })
  ],
  providers: [AuthService, JwtStrategy, UserService],
  // controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}