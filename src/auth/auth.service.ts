import { UserService } from "src/user/user.service";
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from "src/entities/user/user.entity";

export class AuthService{
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ){}

  async validateUser(email:string, password:string):Promise<UserEntity>{
    const user = await this.userService.getUserByEmail(email)
    if(user && user.password === password){
      return user
    }
    return null
  }

  async login(user:UserEntity):Promise<{access_token:string}>{
    const payload = {email:user.email, sub:user.id}
    return{
      access_token:this.jwtService.sign(payload)
    }
  }
}