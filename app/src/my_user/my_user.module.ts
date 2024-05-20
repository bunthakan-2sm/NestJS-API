import { Module } from '@nestjs/common';
import { MyUserService } from './my_user.service';
import { MyuserCrudResolver } from './my_user.crud.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MyuserCrudResolver, MyUserService],
  exports: [MyUserService, MyuserCrudResolver],
})
export class MyUserModule {}
