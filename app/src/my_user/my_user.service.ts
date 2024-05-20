import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MyUserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string) {
    const user = await this.prisma.myuser.findFirst({
      where: {
        email: email,
      },
    });
    return user;
  }
}
