import { Args, Query, Resolver } from '@nestjs/graphql';
import { Myuser } from 'prisma/generated/type-graphql';
import { PrismaService } from 'prisma/prisma.service';
import { MyUserService } from './my_user.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/strategies/jwt-auth.guard';

@Resolver()
export class MyUserResolver {
  constructor(
    private prisma: PrismaService,
    private userServices: MyUserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => Myuser)
  async getUserByMail(@Args('email') email: string){
    return this.userServices.findOne(email);
  }
}
