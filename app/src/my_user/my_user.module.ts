import { Module } from '@nestjs/common';
import { MyUserService } from './my_user.service';
import { MyuserCrudResolver } from './my_user.crud.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { MyUserResolver } from './my_user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [MyuserCrudResolver, MyUserService, MyUserResolver],
  exports: [MyUserService, MyuserCrudResolver, MyUserResolver],
})
export class MyUserModule {}
