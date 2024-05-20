import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { MyUserModule } from 'src/my_user/my_user.module';

@Module({
  imports: [MyUserModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
