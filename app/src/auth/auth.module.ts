import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { MyUserModule } from 'src/my_user/my_user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [MyUserModule, PassportModule, PrismaModule],
  providers: [AuthResolver, AuthService, LocalStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
