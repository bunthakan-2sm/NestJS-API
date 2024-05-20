import { Module } from '@nestjs/common';
import { MyUserService } from './my_user.service';
import { MyuserCrudResolver } from './my_user.resolver';

@Module({
  providers: [MyuserCrudResolver, MyUserService],
  exports: [MyUserService],
})
export class MyUserModule {}
