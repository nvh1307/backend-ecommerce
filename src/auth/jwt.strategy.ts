import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from 'passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<UserEntity> {
    return this.userService.getUserById(payload)
  }
}