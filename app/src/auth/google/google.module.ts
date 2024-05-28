import { Module } from '@nestjs/common';
import { GoogleService } from './google.services';
import { GoogleController } from './google.controller';
import { GoogleStrategy } from './google.stratetgy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'google' })],
  controllers: [GoogleController],
  providers: [GoogleService, GoogleStrategy],
})
export class GoogleModule {}
