import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { MyuserCrudResolver } from 'src/my_user/my_user.crud.resolver';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.myuser.findFirst({
      where: {
        email: email
      }
    })
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
