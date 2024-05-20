import { Injectable } from '@nestjs/common';
import { MyuserCrudResolver } from 'src/my_user/my_user.resolver';

@Injectable()
export class AuthService {
  constructor(private myUsersService: MyuserCrudResolver) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.myUsersService.findFirstMyuser();
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
