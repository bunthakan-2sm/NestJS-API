import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { LoginResponse } from './auth.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.myuser.findFirst({
      where: {
        email: email,
      },
    });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async getMe(email: string): Promise<LoginResponse> {
    const me = await this.prisma.myuser.findFirst({
      where: {
        email: email,
      },
    });
    const payload = { email: me.email, sub: me.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
